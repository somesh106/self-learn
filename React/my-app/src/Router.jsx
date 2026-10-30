import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import List from './List'

function Home() {
    return <h1> Home </h1>
}
function  About() {
    return <h1>About</h1>,
    <List />
}
function Contact() {
    return <h1>Contact</h1>
}

function Router() {
    return (
        <BrowserRouter>
            <nav>
                <Link to="/"> Home </Link> | {" "}
                <Link to="/about"> About </Link> | {" "}
                <Link to="/contact"> Contact </Link>
            </nav>

            <Routes>
                <Route path="/" element= { <Home />} />
                <Route path="/about" element= { <About /> } />
                <Route path="/contact" element= { <Contact /> } />
            </Routes>
        </BrowserRouter>
    );
}
export default Router;