import React from "react";
import axios from 'axios';
import {useState, useEffect} from 'react';
import {Link, useHistory} from 'react-router-dom';
const AllNinjas = ()=>{

    let [listOfNinjas,setListOfNinjas]=useState([]);
    let [changeMade,setChangeMade]=useState(false);
  

    useEffect(()=>{
    axios.get('http://localhost:8000/api/allNinjas')
    .then(res=>{
        console.log(res);
        setListOfNinjas(res.data.results)
 
    })
    .catch(err=>console.log('could not get data: ',err))
    },[changeMade])  


    let deleteNinja=(ninjaID)=>{
        axios.delete(`http://localhost:8000/api/deleteNinja/${ninjaID}`)
        .then(res=>{
            console.log(res);
        })
        .catch(err=>{
            console.log("someting went wrong",err);
        })
        setChangeMade(!changeMade);
    }

    return(
        <div>
        <h1>all the ninjas</h1>
        {
            listOfNinjas.map((aNinja,idx)=>{
                return(
                    <div key={idx} style={{border:'1px solid black'}}>
                        <h4>{aNinja.firstName} {aNinja.lastName}</h4>
                        <p>Number of belts: {aNinja.numBelts}</p>
                        <p>
                        <Link to={`/ninjas/${aNinja._id}`} className='btn btn-info'>Dtails</Link> &nbsp;
                        <Link to={`/ninjas/edit/${aNinja._id}`} className='btn btn-warning'>Edit</Link> &nbsp;
                        <button className="btn btn-danger" onClick={()=>deleteNinja(`${aNinja._id}`)}>Delete Ninja</button>
                        </p>

                    </div>

                )
            })
        }

        </div>
    )
}

export default AllNinjas;