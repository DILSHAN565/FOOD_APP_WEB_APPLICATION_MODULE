import React from 'react'
import { useParams } from 'react-router-dom'
import DATA from '../Data'

import { useState } from 'react'
import CartBtn from './buttons/CartBtn'

const ProductDetail = () => {

    const [cartBtn, setCartBtn] = useState("Add to Cart")

    const proid = useParams();
    const proDetail = DATA.filter(x=>x.id == proid.id)
    const product = proDetail[0];
    console.log(product);

    const handleCart = (product) => {

        if(cartBtn === "Add to Cart") {

            setCartBtn("Remove from Cart")

        }
         else{
            setCartBtn("Add to Cart")
         }
    }

    


  return (
   <>




<div>

<div className="container">

    <div className="row">

        <div className="col-md-6">

            <img src={product.img} alt={product.title}/>
        </div>

        <div className="col-md-6">
            <h1>{product.title}</h1>
            <hr/>
            <h2>{product.price}</h2>
            <p>
                {product.desc}
            </p>
            <button onClick={()=>handleCart(product)} className='btn btn-outline-primary'>{cartBtn}</button>
        </div>




    </div>
</div>



</div>





   


   
   </>
  )
}

export default ProductDetail