import './Login.css'
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { useState } from "react";
import { GoEye, GoEyeClosed } from "react-icons/go";
import { IoArrowBack } from "react-icons/io5";
import Input from './Input';



function Login() {

    const navigate = useNavigate();

    const [showPassword, setShowPassword] = useState(false);
    const [password, setPassword] = useState("");

    function handleLogin() {
        navigate("/dashboard");
        // alert('Login works....')
    }

    return (
        <div className='m-3' style={{ maxWidth: "450px" }}>

            <h1 className="title">
                Log In
            </h1>
            <div>
                <p className="d-flex justify-content-start text-start para-font">
                    Enter your email and password to Log In !
                </p>


                <Input type="text" placeholder="Enter Email" isImportant={true} label="Email" />

                <Input
                    type="password"
                    placeholder="Enter Password"
                    label="Password"
                    isImportant={true}
                    showPassword={showPassword}
                    setShowPassword={setShowPassword}
                />

                <div className="form-check para-font">
                    <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />

                    <label className="form-check-label" htmlFor="defaultCheck1">
                        Keep me logged In
                    </label>

                    <nav style={{ float: "inline-end" }}>
                        <NavLink to="/forgetpassword" className="link-style">
                            Forgot Password ?
                        </NavLink>
                    </nav>
                </div>
            </div>

            <div>
                <button
                    type="button"
                    onClick={handleLogin}
                    className="btn btn-primary my-btn mt-3 ms-auto me-auto" style={{ width: "-webkit-fill-available" }}>
                    Login
                </button>
            </div>
            <br />

            <div>
                <div>
                    <p className="fs-6">
                        If you do not have any account, please -{" "} &nbsp;
                        <NavLink to="/signup" className="link-style">
                            Sign Up
                        </NavLink>
                        &nbsp;here !
                    </p>
                </div>
            </div>

            <div className='para-font'>
                <label >
                    Only Pro Members Can Have Accounts -
                </label>

                <a
                    className="link-style"
                    href="https://tailadmin.com/pricing"
                >
                    &nbsp; Purchase Now !
                </a>
            </div>

            <div className='para-font mt-4 border rounded-3'>
                <p className='p-2'>Please &nbsp;
                    <NavLink to="/forgetpassword" className="link-style">
                        reset your password
                    </NavLink>
                    &nbsp; if you have previously made a purchase on our old site.
                </p>
            </div>
        </div>
    )
}

export default Login;






// ---------------------------------------------------------- 

// const [email, setEmail] = useState("");

// const handleGoBack = () => {
// navigate(-1);
// };

// <button> <IoIosArrowBack /> Go Back</button>
    
// value={email}
// onChange={(e) => setEmail(e.target.value)}

// value={password}
// onChange={(e) => setPassword(e.target.value)}

// <input
// id="email"
// type="email"
// className="form-control"
// style={{ fontSize: "14px" }}
// placeholder="Enter Email"
// />

// <input
// id='password'
// type={showPassword ? "text" : "password"}
// className="form-control"
// style={{ fontSize: "14px" }}
// placeholder="Enter Password"
// /> 

// function handleLogin() {
// if (email.trim() === "" || password.trim() === "") {
// alert("Please enter Email and Password");
// return;
// }
// navigate("/dashboard");}

//