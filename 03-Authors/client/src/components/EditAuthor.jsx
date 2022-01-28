import React, { useState, useEffect } from "react";
import { useHistory, Link } from 'react-router-dom';
import axios from 'axios';
import { useParams } from "react-router-dom";

const EditAuthor = () => {
    let [name, setName] = useState('');
    let [quote, setQuote] = useState('');
    let [authObj, setAuthObj] = useState([]);
    let [formError, setFormError] = useState({});
    let history = useHistory();
    let { id } = useParams();
    let [validID, setValidID] = useState(false);

    useEffect(() => {
        console.log(id);
        axios.get(`http://localhost:8000/api/authors/${id}`)
            .then(res => {
                console.log('getting author to update', res);
                if (res.data.error) {
                    setValidID(false);
                }
                else {
                    setAuthObj(res.data.result);
                    setQuote(res.data.result.quote)
                    setValidID(true);
                }
            })
            .catch(err => { console.log('front end issue getting auth for update', err) })
    }, [id])

    let updateAuthorInfo = (e) => {



        if (e.target.name == 'quote') {
            let cpQuote = [...quote];
            cpQuote[0] = e.target.value;
            setAuthObj({
                ...authObj,
                [e.target.name]: cpQuote
            })
        }
        else {
            setAuthObj({
                ...authObj,
                [e.target.name]: e.target.value
            })
        }

    }


    let addAuthor = (e) => {
        e.preventDefault()

        axios.put(`http://localhost:8000/api/authors/${id}`, authObj)
            .then(res => {
                if (res.data.error) {
                    // console.log(res.data.error);
                    console.log(res["data"]["error"]);
                    setFormError(res.data.error);
                }
                else {
                    console.log(res);
                    history.push('/')
                }
            })
            .catch(err => { console.log("attempt to add failed", err) })


    }

    return (

        <>
                {validID?
                <form onSubmit={addAuthor} className="container d-grid justify-content-center gap-1">
                    <h1>Favorite Authors</h1>
                    {/* <Link to={'/'}>Home</Link> */}
                    <label htmlFor="">Edit Author:</label>

                    <div className="row">
                        <label className='col-3'>Name</label>
                        <input type="text" name="name" id="" className="col-8" value={authObj.name} onChange={(e) => { updateAuthorInfo(e) }} />
                    </div>
                    <div className="row justify-content-center text-danger">{formError.errors?.name.message}</div>
                    <div className="row">
                        <label className='col-3'>Quote</label>
                        <textarea name="quote" id="quote" className="col-9" style={{ height: "100px" }} value={authObj.quote?.[0]} onChange={(e) => { updateAuthorInfo(e) }} />
                    </div>
                    <div className="row justify-content-center text-danger"></div>
                    <div className="row justify-content-center ">
                        <button type="submit" className="btn btn-success col-5 me-4">Edit Author</button>
                        <Link to={'/'} className="btn btn-info col-5">Cancel</Link>
                    </div>
                </form>
                : <div>
                    <h1> Sorry we cannot find the author you are looking for</h1> 
                    <Link to={'/'} className="btn btn-info col-5">go back to list</Link>
                </div>
                }
            </>
                 
    )
}

export default EditAuthor;