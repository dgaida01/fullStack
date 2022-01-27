
import React from "react";
import {useState,useEffect} from 'react';
import {useParams} from 'react-router';
import axios from 'axios';
import {useHistory} from 'react-router-dom'

const EditNinja = () =>{
    //pull from backend the persons information save it to a state variable:
    let [ninjaDetails,setNinjaDetails]=useState({
        fristName:'',
        lastName:'',
        numBelts:0,
        isVeteran:false
    });

    //this will handel changes on the form
    //we have to intialize history to use to rediret home
    let history = useHistory();

    let changehandler =(e)=>{
        console.log('change in form detected');
        if (e.target.type=='checkbox'){
            setNinjaDetails({
                ...ninjaDetails,
                [e.target.name]:e.target.checked
            })
        }
        else{
        setNinjaDetails({
            ...ninjaDetails,
            [e.target.name]:e.target.value
        })
        }
    }

    //get information about the id of the item we want to edit:
    const {id}=useParams();
    
    useEffect(()=>{
        axios.get(`http://localhost:8000/api/ninjas/${id}`)
        .then(res=>{
            console.log("response when making request for one ninja", res)
            //save res.data.results into state
            setNinjaDetails(res.data.results)
        
        })
        .catch(err=> console.log(err))
    }, [])

    let updateNinjaHandler =(e)=>{
        e.preventDefault();
        axios.put(`http://localhost:8000/api/ninjas/${id}`,ninjaDetails)
        .then(res=>{
            console.log(res.data);

        })
        .catch((err)=>{console.log('Error adding Ninja from form',err)})
        history.push('/')
    }

    return(
        <div>
            <h3>Edit Ninja below:</h3>
            <form onSubmit={updateNinjaHandler} >
            <div className="form-group col">
                <label htmlFor="">First Name</label>
                <input type="text" name="firstName" id="" className="form-control" value={ninjaDetails.firstName} onChange={changehandler}/>
            </div>
            <div className="form-group col">
                <label htmlFor="">Last Name</label>
                <input type="text" name="lastName" id="" className="form-control" value={ninjaDetails.lastName} onChange={changehandler} />
            </div>
            <div className="form-group">
                <label htmlFor=""> Number of Belts </label>
                <input type="number" name="numBelts" id="" className="form-control" value={ninjaDetails.numBelts} onChange={changehandler} />
            </div>
            <div className="form-group">
                <label htmlFor=""> is Ninja a vet? </label>
                <input type="checkbox" name="isVeteran" id="" className="form-checkbox mt-2 ms-2" checked={ninjaDetails.isVeteran} onChange={changehandler} />
            </div>
                <input type="submit" value="Update Ninja" className="btn btn-success mt-3 "/>
            </form>
        </div>
    )
}
export default EditNinja;