import { useState } from "react";
import { Link } from "react-router-dom";

const ForgotPassword = () => {

    const [email, setEmail] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const trimmedEmail = email.trim();

        if (!trimmedEmail) {
            setError("Email is Required");
            return;
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
            setError("Please enter a valid email");
            return;
        }

        setError("");
        setLoading(true);
        setSuccess("Reset link sent successfully!");
        setEmail("");
        // console.log("Reset Email : ", trimmedEmail);

        setTimeout(() => {
            setLoading(false);
        }, 1000);
    }

    return (
        <div className="d-flex justify-content-center align-items-center min-vh-100 bg-light">
            <div className="bg-white p-4 rounded-4 shadow-sm" style={{ maxWidth: "420px", width: "100%" }}>

                <h2 className="fw-semibold mb-2">
                    Forgot Password?
                </h2>

                <p className="text-secondary mb-4">
                    Enter your email to reset your password.
                </p>
                <form onSubmit={handleSubmit}>
                    <input
                        type="email"
                        className="form-control"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value);
                            setError("");
                            setSuccess("");
                        }}
                    />

                    {error && (
                        <div className="text-danger small mt-2">
                            {error}
                        </div>
                    )}
                    {success && (
                        <div className="alert alert-success py-2 mt-2">
                            {success}
                        </div>
                    )}

                    <button type="submit" disabled={loading} className="btn btn-primary w-100 mt-3">
                        {loading ? "Sending..." : "Send Reset Link"}
                    </button>
                </form>

                <div className="text-center mt-3">
                    <Link to="/login" className="text-decoration-none">
                        Back to Login
                    </Link>
                </div>

            </div>
        </div>
    );
};

export default ForgotPassword;