import React, {useState, useEffect}from "react";
import axios from 'axios';
import {Link} from "react-router-dom";

const AllProducts =(props)=>{

    let [listOfProducts,setListOfProducts]=useState([])
    let [isDeleted,setIsDeleted]=useState(false)


    useEffect(()=>{
        
        axios.get('http://localhost:8000/api/Products')
        .then(res=>{
            console.log(res.data.results);
            setListOfProducts((res.data.results))           
        
        })                
        .catch(err=>console.log('issue getting all products',err))

    },[isDeleted,props.refresh])

    let deleteItem=(id)=>{
        axios.delete(`http://localhost:8000/api/Products/${id}`)
        .then(res=>{
            console.log(res);
            setIsDeleted(!isDeleted)
        })
        .catch(err=>console.log('issue deleting the product',err))
    }

    return(
        <div className=" container d-grid justify-content-center">
            <hr />
            <h1>All Products:</h1>
            {
            
                listOfProducts.map((aProd,idx)=>{
                    return(
                        <span key={idx} className="mb-4">
                    <h4 className="text-center"><Link to={`/Product/Detail/${aProd._id}`}>{aProd.title}</Link></h4>
                    <div  className="row">
                        <Link to={`/Product/Edit/${aProd._id}`}className="col btn btn-success">Edit </Link>
                        <Link to={`/Product/Detail/${aProd._id}`} className="col btn btn-info ">Details</Link>
                        <button onClick={()=>{deleteItem(aProd._id)}} className="col btn btn-danger">delete</button>

                    </div>
                    </span>
                    )
                })
            }
        </div>
    )
}
export default AllProducts;