import React, { useState, useEffect } from "react";
import axios from "axios";
import {useParams} from 'react-router';
import {useHistory} from 'react-router-dom';


let NewProductForm = (props) => {

let [productInfo,setProductInfo]=useState({})
let {id} = useParams();
let history = useHistory();
let [formErrors,setFormErrors]=useState({})


useEffect(()=>{
    console.log(id);
    if(id!=undefined){
        axios.get(`http://localhost:8000/api/Products/${id}`)
        .then(res=>{
            console.log('edit mode',res);
            setProductInfo(res.data.results)

        })
        .catch(err=>{console.log('failed to get product',err)})
    }
   

},[id])

let updateProductInfo = (e)=>{
        setProductInfo( {...productInfo,               
                        [e.target.name]:e.target.value          
        })   
    }


    function addProduct(e) { 
        e.preventDefault()
        if(id==undefined){
            axios.post('http://localhost:8000/api/addProduct',productInfo)
            .then(res=>{
                console.log(res);
                if(res.data.error){
                    setFormErrors(res.data.error.errors)
                    console.log("form Error",formErrors);
                }
                setProductInfo({});
                props.setRefresh(!props.refresh);
            })
            .then(()=>{
                e.target.reset();
            })
            .catch(err=>{console.log(err)})
        }
        else{
            axios.put(`http://localhost:8000/api/Products/${id}`,productInfo)
            .then(res=>{
                console.log(res); 
                setProductInfo({});
                e.target.reset();      
                history.push('/');
            
            })
            .catch(err=>{console.log(err)})
        }
    }

    return (
        <div className=" container d-grid justify-content-center">
            {id?
            <h1>Edit Product Form</h1>
            :<h1>New Product Form</h1>
        }
            <form onSubmit={addProduct} id='theForm' className="Container d-grid gap-2">
                <div className="row">
                    <label className="col-5" htmlFor="">
                        Product Name:
                    </label>
                    <input className="col" type="text" name="title" id="" value={productInfo.title} onChange={(e)=>{updateProductInfo(e)}} />
                    <div className="text-center">{formErrors.price?.message}</div>
                </div>
                <div className="row">
                    <label className="col-5" htmlFor="">
                        Price:
                    </label>
                    <input className="col" type="number" step="any" name="price" id="" value={productInfo.price} onChange={updateProductInfo} />
                </div>
                <div className="row">
                    <label className="col-5" htmlFor="">
                        Description:
                    </label>
                    <input className="col" type="text" name="description" id="" value={productInfo.description} onChange={updateProductInfo} />
                </div>
                <div className="row justify-content-center mt-4">
                    
                    <button type="submit" className="btn btn-primary col-auto ">
                        {id?"Update Product":"Add Product"}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default NewProductForm;
