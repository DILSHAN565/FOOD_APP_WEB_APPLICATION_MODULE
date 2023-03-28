import React, { Component } from 'react'
import { NavLink } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import DATA from '../Data.jsx'

const Product = () => {

  const cardItem = (item) => {
    return(

      <div class="card" key={item.id} style={{width: "18rem"}}>
  <img src={item.img} class="card-img-top" alt={item.title}/>
  <div class="card-body">
    <h5 class="card-title">{item.title}</h5>
    <p className='lead'>${item.price}</p>
    
    
    <Link  class='btn btn-outline-primary' to={'/product/${item.id}'}>Buy Now</Link>
  </div>
</div>

    )
  } 


    return (
      <div>

        <div className="container py-5">

          <div className="row">

            <div className="col-12 text-center">

              <h1>Product</h1>
              <hr/>


            </div>


          </div>



        </div>



        <div className="container">

          <div className="row justify-content-center">

            {DATA.map(cardItem)}


          </div>
        </div>
        


        
      </div>
    )
  }

  export default Product