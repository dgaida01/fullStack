import React, {useState, useEffect} from 'react';
import { useParams } from "react-router";
import {useHistory} from 'react-router-dom';
import axios from 'axios';

const OneNinja = () => {
    const { id } = useParams();

    const [ninjaDetails, setNinjaDetails] = useState({})
    const history = useHistory();

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/aNinja/${id}`)
        .then(res=>{
            console.log("response when making request for one ninja", res)
            //save res.data.results into state
            setNinjaDetails(res.data.results)
        })
        .catch(err=> console.log(err))
    }, [])
    
        //delete the ninja
        const deleteNinja =()=>{
            console.log('deleteing');
            axios.delete(`http://localhost:8000/api/deleteNinja/${id}`)
            .then(res=>{
                console.log(res);
            })
            .catch(err=>{
                console.log("someting went wrong",err);
            })
            history.push('/')
        }


    return (
        <div>
            <h4>Details about {ninjaDetails.firstName} {ninjaDetails.lastName}</h4>
            <p>Number of belts: {ninjaDetails.numBelts}</p>
            <p>ID: {id}</p>
            <p>Veteran status: {ninjaDetails.isVeteran? "Is a Veteran": "Not a Veteran"}</p>
            <button className="btn btn-danger" onClick={deleteNinja}>Delete Ninja</button>
        </div>
    );
};


export default OneNinja;