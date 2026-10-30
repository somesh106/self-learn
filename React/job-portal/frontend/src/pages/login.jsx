import { Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./login.css";
import Input from "../components/common/input";
import { useState } from "react";
import { loginUser } from "../store/slices/authSlice";
import { useDispatch } from "react-redux";

const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    // const auth = useSelector((state) => state.auth);         unused now
    // console.log("auth : ", auth)

    const [formData, setFormData] = useState({
        email: "",
        password: "",
        rememberMe: false
    });

    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleLoginChange = (e) => {
        const { name, value, type, checked } = e.target;

        setFormData((prev) => ({
            ...prev, [name]: type === "checkbox" ? checked : value
        }));

        setError("");
    }

    const handleLoginSubmit = (e) => {
        e.preventDefault();                             //stop the default submit behaviour of form

        if (!formData.email || !formData.password) {
            // console.log("Email and Password are required.");
            setError("Invalid Email or Password");
            return;
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            setError("Please enter a valid email");
            return;
        }
        if (formData.password.length < 6) {
            setError("Password must be at least 6 characters");
            return;
        }

        if (
            formData.email !== "admin@gmail.com" ||
            formData.password !== "12345678"
        ) {
            setError("Invalid email or password");
            return;
        }

        setLoading(true);
        setError("");

        try {
            dispatch(
                loginUser({
                    user: {
                        email: formData.email
                    },
                    token: "dummy-token",
                    rememberMe: formData.rememberMe
                })
            )
            navigate("/home", { replace: true });
            // console.log("Login Successful - Login Data : ", formData);

        } catch (error) {
            console.error("login-Failed : ", error);
            setError("Invalid Username or Password");
            setLoading(false);
        }
    };

    return (
        <div className="login-card d-flex justify-content-center align-items-center min-vh-100 bg-light">
            <div className="login-box bg-white p-4 rounded-4 shadow-sm w-100">

                <h1 className="login-title fw-semibold mb-2">
                    Welcome Back!
                </h1>

                <p className="login-subtitle text-secondary mb-4">
                    Enter your Username and Password to Log In!
                </p>

                {error && (
                    <div className="alert alert-danger py-2">
                        {error}
                    </div>
                )}
                <form onSubmit={handleLoginSubmit}>

                    <Input
                        label="Email"
                        type="text"
                        placeholder="Enter Username"
                        name="email"
                        value={formData.email}
                        onChange={handleLoginChange}
                        required
                    />

                    <Input
                        label="Password"
                        type="password"
                        placeholder="Enter Password"
                        name="password"
                        value={formData.password}
                        onChange={handleLoginChange}
                        required
                    />

                    <div className="d-flex justify-content-between align-items-center mt-2">

                        <div className="form-check">
                            <input
                                type="checkbox"
                                className="form-check-input"
                                id="remember"
                                name="rememberMe"
                                checked={formData.rememberMe}
                                onChange={handleLoginChange}
                            />

                            <label
                                className="form-check-label small"
                                htmlFor="remember"
                            >
                                Keep me logged in
                            </label>
                        </div>

                        <Link
                            to="/forgot-password"
                            className="text-decoration-none small"
                        >
                            Forgot Password?
                        </Link>

                    </div>

                    <button
                        type="submit" disabled={loading}
                        className="btn btn-primary w-100 rounded-2 mt-4 py-2 fw-medium"
                    >
                        {loading ? "Logging in..." : "Login"}
                    </button>

                    <p className="text-center text-secondary small mt-4 mb-0">
                        Don't have an account?

                        <Link
                            to="/signup"
                            className="ms-1 text-decoration-none fw-medium"
                        >
                            Sign Up
                        </Link>
                    </p>

                </form>

            </div>
        </div>
    );
};

export default Login;