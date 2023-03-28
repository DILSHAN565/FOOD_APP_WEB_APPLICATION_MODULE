import React, { Component } from 'react'
import {Navbar,Nav,NavDropdown,Form,FormControl,Button} from 'react-bootstrap'
import { BrowserRouter as Router,Route,Link, Routes } from 'react-router-dom'
import { NavLink } from 'react-router-dom'

import About from './About'
import Contact from './Contact'
import Home from './Home'
import Product from './Product'
import Login from './buttons/Login'
import Signup from './buttons/Signup'
import CartBtn from './buttons/CartBtn'
import ProductDetail from './ProductDetail'



export default class NavbarComp extends Component {
  render() {
    return (

        <Router>



      <div>
       

       <Navbar expand="lg">
   
        <Navbar.Brand href="#home">Serendib</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to={"/home"}>Home</Nav.Link>
            <Nav.Link as={Link} to={"/about"}>About</Nav.Link>
            <Nav.Link as={Link} to={"/contact"}>Contact</Nav.Link>
            <Nav.Link as={Link} to={"/product"}>Product</Nav.Link>

            <Login/>
            <Signup/>
            <CartBtn/>
           
            
          </Nav>
        </Navbar.Collapse>
    
    </Navbar>
        
      </div>


      <div>

        <Routes>
            <Route exact path='/' element={<Home/>}></Route>
            <Route exact path='/about' element={<About/>}></Route>
            <Route exact path='/contact' element={<Contact/>}></Route>
            <Route exact path='/product' element={<Product/>}></Route>

            <Route exact path="/product/:id" element={<ProductDetail />} />


            <Route exact path='/login' element={<Login/>}></Route>
            <Route exact  path='/signup' element={<Signup/>}></Route>
            <Route exact path='/cartBtn' element={<CartBtn/>}></Route>

            



           





        </Routes>



      </div>

      </Router>
    )
  }
}
