// import React, { useState } from "react";
// import axios from "axios";



// let NewProductForm = () => {

// let [productInfo,setProductInfo]=useState({})

// let updateProductInfo = (e)=>{
//     setProductInfo( {...productInfo,               
//                     [e.target.name]:e.target.value          
//     })   
//     }


//     function addProduct(e) { 
//         e.preventDefault()
//         axios.post('http://localhost:8000/api/addProduct',productInfo)
//         .then(res=>{
//             console.log(res);
//             e.target.reset();
//         })
//     }

//     return (
//         <div className=" container d-grid justify-content-center">
//             <h1>New Product Form</h1>

//             <form onSubmit={addProduct} className="Container d-grid gap-2">
//                 <div className="row">
//                     <label className="col-5" htmlFor="">
//                         Product Name:
//                     </label>
//                     <input className="col" type="text" name="title" id="" onChange={(e)=>{updateProductInfo(e)}} />
//                 </div>
//                 <div className="row">
//                     <label className="col-5" htmlFor="">
//                         Price:
//                     </label>
//                     <input className="col" type="number" step="any" name="price" id="" onChange={updateProductInfo} />
//                 </div>
//                 <div className="row">
//                     <label className="col-5" htmlFor="">
//                         Description:
//                     </label>
//                     <input className="col" type="text" name="description" id="" onChange={updateProductInfo} />
//                 </div>
//                 <div className="row justify-content-center mt-4">
//                     <button type="submit" className="btn btn-primary col-4 ">
//                         Add Product
//                     </button>
//                 </div>
//             </form>
//         </div>
//     );
// };

// export default NewProductForm;
