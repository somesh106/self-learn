import { Outlet, BrowserRouter, Routes, Route, Link, Form, NavLink, useParams } from 'react-router-dom'

// import Products from './Products'
// import {CarProducts, BikeProducts} from './Products' 
import { Products, CarProducts, BikeProducts } from "./Products";  //Named Import


export const navLinkStyle = ({ isActive }) => ({
  color: isActive ? '#007bff' : '#333',
  textDecoration: isActive ? 'none' : 'underline',
  fontWeight: isActive ? 'bold' : 'normal',
  padding: '5px 10px'
});


function Home() {
    return <h1> Homeee </h1>
}
function ProductList() {
    return <h1>Products List</h1>
}
function Contact() {
    return <h1>Contact</h1>
}

function Nested() {
    return (
        <div>
            <BrowserRouter>
                <nav style={{marginBottom:'20px'}}>
                    {/* <Link to="/"> Home </Link> | {" "}
                    <Link to="/productslist"> Products List </Link> | {" "}
                    <Link to="/contact"> Contact </Link> */}

                    <NavLink to="/" style={navLinkStyle} > Home </NavLink> | {" "}
                    <NavLink to="/productslist" style={navLinkStyle} > Product List </NavLink> | {" "}
                    <NavLink to="/contact" style={navLinkStyle} > Contact </NavLink>
                </nav>
                <Routes>
                    <Route path='/' element= { <Home></Home> } />
                    <Route path='/productslist' element= {<Products />} >
                        <Route path='car' element={ <CarProducts /> } />
                        <Route path='bike' element={ <BikeProducts /> } />
                    </Route>
                    <Route path='/contact' element= {<Contact />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default Nested;
//----------------------------------------------------

// use of URL Parameters - uesParams()


// function Info() {
//     const { firstname } = useParams();
//     return (
//         <div>
//         <br />
//         <br />
//         <p> Hello, My name is : { firstname } </p>
//         </div>
//     )
// }

// function UseParams() {
//     return (
//         <BrowserRouter>
//             <nav>
//                 <Link to="/customer/Virat"> Virat </Link> |
//                 <Link to="/customer/Rohit"> Rohit </Link> |
//                 <Link to="/customer/Vaibhav"> Viabhav </Link> |
//                 <Link to="/customer/Sachin"> Sachin </Link>
//             </nav>
//  <br />
//             <Routes>
//                 <Route path='/customer/:firstname' element= {< Info />  }>
//                 </Route>
//             </Routes>
//         </BrowserRouter>
//     )
// }

// export default UseParams;