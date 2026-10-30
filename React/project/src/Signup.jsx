import './Login.css'
import { NavLink, Routes, Route, Outlet } from 'react-router-dom';
import Input from './Input';
import { useState } from "react";

function Signup() {

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    function handleSignup() {
        alert('Sign-up Button works.')
    }

    return (


        <div className='m-3' style={{ maxWidth: "450px" }}>
            <div>
                <label className="title">
                    Sign-up Here !
                </label>
                <p className="d-flex justify-content-start text-start para-font">
                    Enter your all the detail to Sign-up !
                </p>

                <Input
                    type="text"
                    placeholder="Enter Name*"
                    // label="Name"
                    // isImportant={true}
                />

                <Input
                    type="text"
                    placeholder="Enter Surname*"
                    // label="Surname"
                    // isImportant={true}
                />

                <Input
                    type="text"
                    placeholder="Enter Mobile No.*"
                    // label="Mobile No."
                    // isImportant={true}
                />

                <Input
                    type="email"
                    placeholder="Enter Email*"
                    // label="Email"
                    // isImportant={true}
                />

                <Input
                    type="password"
                    placeholder="Enter Password*"
                    // label="Enter Password"
                    // isImportant={true}
                    showPassword={showPassword}
                    setShowPassword={setShowPassword}
                />

                <Input
                    type="password"
                    placeholder="Confirm Password*"
                    // label="Confirm Password"
                    // isImportant={true}
                    showPassword={showConfirmPassword}
                    setShowPassword={setShowConfirmPassword}
                />
            </div>

            <div>
                <button
                    type="button"
                    onClick={handleSignup}
                    className="btn btn-primary my-btn mt-3 ms-auto me-auto" style={{ width: "-webkit-fill-available" }}>
                    Signup
                </button>
            </div>
            <br />

            <div className='para-font mt-4 border rounded-3'>
                <p className='p-2'>Please &nbsp;
                    <NavLink to="/forgetpassword" className="link-style">
                        reset your password
                    </NavLink>
                    &nbsp; if you have previously made a purchase on our old site.
                </p>
            </div>
        </div>
    );
}
export default Signup;