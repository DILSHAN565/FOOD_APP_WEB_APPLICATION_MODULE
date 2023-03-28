import React, { Component } from 'react'
import { NavLink } from 'react-bootstrap'

export default class Contact extends Component {
  render() {
    return (
      <div>



        
<div className="container py-5 my-5">

<div className="row">

  
<div className="col-md-6 d-flex justify-content-center">
    <img src='assets/images/slider/hello.jfif ' alt='About Us' height='300px' width='300px' />

  </div>



  <div className="col-md-6">
    <h1 className='text-primary fw-bold mb-4'>Contact Us</h1>
    <h3>Brand Name-'Serendib'</h3>
    <h3>Email-Serendibfoods@hotmail.com</h3>
    <h3>Delivery methods-Cash Payment</h3>
    <h3>Contact No:+947863596</h3>
    <p className='lead mb-4'>We would love to hear from you! At 'Serendib', we value your feedback and are committed to providing the best possible service. Whether you have a question about our products, want to place an order, or simply have a suggestion, please don't hesitate to get in touch. You can reach us by phone, email, or in person at our store location. We look forward to hearing from you and helping you satisfy your culinary cravings!</p>
      <NavLink to="/contact" className='btn btn-outline-primary px-3'>Explore</NavLink>
  </div>

</div>


</div>


       
        
      </div>
    )
  }
}
