import axios from "axios";
import React, {useEffect, useState} from "react";
import {useParams} from 'react-router';
import {Link,useHistory} from 'react-router-dom';

let ProductDetails =()=>{

    let {id:prodID}=useParams();
    let [aProduct,setAProduct]=useState({});
    let history = useHistory();

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/Products/${prodID}`)
        .then(res=>{
            console.log('getting one product',res.data.results);
            setAProduct(res.data.results)
            
        })
        .catch(err=>{console.log('axios faild to get product',err)})
    },[])

    let deleteItem=()=>{
        axios.delete(`http://localhost:8000/api/Products/${prodID}`)
        .then(res=>{
            console.log(res);
            history.push('/')
        })
        .catch(err=>console.log('issue deleting the product',err))
    }

    return(
        <div className="container-fluid">

        
        <div className="row justify-content-center gap-1">
            <h1 className="col-12 text-center">
                Product Details
            </h1>
        </div>
        <div className="row justify-content-center gap-1">
                <h3 className='col-4 text-end'>Product:</h3>
                <p className="col-4 mb-0 align-self-center">{aProduct.title}</p>
        </div>
        <div className="row justify-content-center gap-1">
                <h3 className='col-4 text-end'>Price:</h3>
                <p className="col-4 mb-0 align-self-center">{aProduct.price}</p>
        </div>
        <div className="row justify-content-center gap-1">
                <h3 className='col-4 text-end'>Description:</h3>
                <p className="col-4 mb-0 align-self-center">{aProduct.description}</p>
        </div>
        
        <div className="d-flex justify-content-center ">
        <Link to={'/'} className="btn btn-primary">Return Home</Link>
        <button onClick={deleteItem} className="btn btn-danger">Delete</button>
         </div>
        
      
        </div>
    )
}
export default ProductDetails;