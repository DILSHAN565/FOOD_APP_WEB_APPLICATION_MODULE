
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComp from './components/NavbarComp';



import { BrowserRouter as Router,Route,Link, Routes } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Product from './components/Product';
import Login from './components/buttons/Login';
import Signup from './components/buttons/Signup';
import CartBtn from './components/buttons/CartBtn';
import ProductDetail from './components/ProductDetail';




function App() {
  return (
    <div className="App">
      <NavbarComp/>



      <div>

        <Router>

        <Routes>


          <Route exact path='/' component={Home}/>
          <Route exact path='/product' component={Product}/>
          <Route exact path='/product/:id' component={ProductDetail}/>
          <Route exact path='/about' component={About}/>
          <Route exact path='/contact' component={Contact}/>

        </Routes>
        </Router>




      </div>






    </div>

    







  );
}

export default App;
