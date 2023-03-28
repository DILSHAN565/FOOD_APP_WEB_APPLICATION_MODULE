import React, { Component } from 'react'
import { NavLink } from 'react-bootstrap'

export default class About extends Component {
  render() {
    return (
      <div>



        <div className="container py-5 my-5">

          <div className="row">
            <div className="col-md-6">
              <h1 className='text-primary fw-bold mb-4'><span className="red-text">About Us</span></h1>
              <h2 className='text-primary fw-bold mb-4 '>"Bringing the freshest and most delicious flavors to your table, one bite at a time."</h2>
              <p className='lead mb-4'>At 'Serendib', we're passionate about quality ingredients and exceptional flavors. From our carefully curated selection of locally sourced produce to our handcrafted dishes and artisanal treats, every item in our store is chosen with care and attention to detail. We believe that food should be an experience, and our goal is to make every visit to our store a memorable one.</p>
                <NavLink to="/contact" className='btn btn-outline-primary px-3'>Contact Us</NavLink>
            </div>

            <div className="col-md-6 d-flex justify-content-center">
              <img src='/assets/images/products/nutela.jpg' alt='About Us' height='400px' width='400px' />

            </div>
          </div>


        </div>
       
        
      </div>
    )
  }
}
