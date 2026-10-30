import './Login.css'
import Input from './Input';

function ForgetPassword() {

    function handleForgetPassword() {
        alert('Forget Password Button works.');
    }

    return (
        <div style={{ maxWidth: "450px" }}>
            <h1 className="title">Forgot Your Password?</h1>

            <p className="text-start para-font">
                Enter the email address linked to your account, and we'll send you a link to reset your password.
            </p>

            <Input
                type="email"
                label="Email"
                placeholder="Enter Email"
                isImportant={true}
            />

            <Input
                type="text"
                label="Mobile"
                placeholder="Enter Mobile"
                isImportant={true}
            />

            <button
                type="button"
                onClick={handleForgetPassword}
                className="btn btn-primary my-btn mt-3"
                style={{ width: "-webkit-fill-available" }}
            >
                Reset Password
            </button>
        </div>
    )
}
export default ForgetPassword;