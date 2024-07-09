// import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home';

import {Route,BrowserRouter,Routes} from "react-router-dom"
import Footer from './Pages/Footer';
import Products from './Pages/Products';
import Services from './Pages/Services';
import ContactUs from './Pages/ContactUs';


function App() {


  return(
   <>
    <BrowserRouter>
      <Routes>
        <Route index path='/' element={<Home/>}/>
        <Route index path='/products' element={<Products/>}/>
        <Route index path='/services' element={<Services/>}/>
        <Route index path='/contact-us' element={<ContactUs/>}/>

    </Routes>
    <Footer/>
    </BrowserRouter>
   </>
  )

}




export default App;

