import React, { useState, useEffect } from "react";
import { useHistory, Link } from 'react-router-dom';
import axios from 'axios';

const NewAuthor = () => {
    let [name, setName] = useState('');
    let [quote, setQuote] = useState('');
    let [formError, setFormError] = useState({});
    let history=useHistory();



    let addAuthor = (e) => {
        e.preventDefault()
        let authorObj = { name, quote };
        axios.post('http://localhost:8000/api/authors', authorObj)
            .then(res => {
                if(res.data.error){
                    // console.log(res.data.error);
                    console.log(res["data"]["error"]);
                    setFormError(res.data.error);
                }
                else{
                console.log(res);
                history.push('/')
                }
            })
            .catch(err => { console.log("attempt to add failed", err) })


    }

    return (
        <form onSubmit={addAuthor} className="container d-grid justify-content-center gap-1">
            <h1>Favorite Authors</h1>
            {/* <Link to={'/'}>Home</Link> */}
            <label htmlFor="">Add New Author:</label>
            
                <div className="row">
                    <label className='col-3'>Name</label>
                    <input type="text" name="name" id="" className="col-6" onChange={(e) => { setName(e.target.value) }} />
                </div>
                <div className="row justify-content-center text-danger">{formError.errors?.name.message}</div>
                <div className="row">
                    <label className='col-3'>Quote</label>
                    <textarea name="quote" id="" className="col-9" style={{ height: "100px" }} onChange={(e) => { setQuote(e.target.value) }} />
                </div>
                <div className="row justify-content-center text-danger">{formError.errors?.['quote.0']['message']}</div>
                <div className="row justify-content-center ">
                    <button  type="submit" className="btn btn-success col-5 me-4">Add Author</button>
                    <Link to={'/'} className="btn btn-info col-5">Cancel</Link>
                </div>
        </form>
    )
}

export default NewAuthor;