
import React from "react";
import {useState} from 'react';
import axios from 'axios';

const NinjaForm = () =>{

    let [firstName,setFirstName] = useState('');
    let [lastName,setLastName] = useState('');
    let [numBelts,setNumBelts] = useState(0);
    let [isVeteran,setIsVeteran] = useState(false);

    let addNinjaHandler =(e)=>{
        e.preventDefault();

        let ninjaObj = {
            firstName,
            lastName,
            numBelts,
            isVeteran
        }
        axios.post('http://localhost:8000/api/addNinja',ninjaObj)
        .then(res=>{
            console.log(res.data);
        })
        .catch((err)=>{console.log('Error adding Ninja from form',err)})



    }

    return(
        <div>
            <form onSubmit={addNinjaHandler} >
            <div className="form-group col">
                <label htmlFor="">First Name</label>
                <input type="text" name="" id="" className="form-control" onChange={(e)=>{setFirstName(e.target.value)}}/>
            </div>
            <div className="form-group col">
                <label htmlFor="">Last Name</label>
                <input type="text" name="" id="" className="form-control" onChange={(e)=>{setLastName(e.target.value)}}/>
            </div>
            <div className="form-group">
                <label htmlFor=""> Number of Belts </label>
                <input type="number" name="" id="" className="form-control" onChange={(e)=>{setNumBelts(e.target.value)}}/>
            </div>
            <div className="form-group">
                <label htmlFor=""> is Ninja a vet? </label>
                <input type="checkbox" name="" id="" className="form-checkbox mt-2 ms-2" onChange = {(e)=>{setIsVeteran(e.target.checked)}}/>
            </div>
                <input type="submit" value="Add Ninja" className="btn btn-success mt-3 "/>
            </form>
        </div>
    )
}
export default NinjaForm;