import { Link, Outlet, NavLink } from "react-router-dom";
import {navLinkStyle} from './Nested'

function Products() {
    return (
        <div>
            <h1>Product Page</h1>
            <nav>
                {/* <Link to="/productslist/car"> Cars </Link> | {" "}
                <Link to="/productslist/bike"> Bikes </Link> */}

                <NavLink to="/productslist/car" style={navLinkStyle} > Cars </NavLink> | {" "}
                <NavLink to="/productslist/bike" style={navLinkStyle} > Bikes </NavLink>
            </nav>
            <Outlet />
        </div>
    );
}

function CarProducts() {
    return (
        <div>
                <h2>Cars</h2>
                <ul>
                    <li>TATA</li>
                    <li>BMW</li>
                    <li>Ford</li>
                    <li>Audi</li>
                    <li>Volvo</li>
                </ul>
        </div>
    )
}
function BikeProducts() {
    return (
        <div>
                <h2>Bikes</h2>
                <ul>
                    <li>YAMAHA</li>
                    <li>Suzuki</li>
                    <li>Honda</li>
                    <li>Hero</li>
                    <li>Harley</li>
                </ul>
        </div>
    )
}

// export { CarProducts, BikeProducts };
// export default Products;

export { Products, CarProducts, BikeProducts };    //Named Export