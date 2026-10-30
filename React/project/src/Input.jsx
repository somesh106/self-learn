import { GoEye, GoEyeClosed } from "react-icons/go";

function Input(props) {
    const { label, placeholder, isImportant, onClick, onChange, value, showPassword, setShowPassword, type } = props
    return (
        <div>
            {label && <label className='sub-heading'>{label}</label>}

            {isImportant && <span className="text-error-500">*</span>}

     
            <div className="input-group mb-3">
                <input
                    type={type === "password" ? (showPassword ? "text" : "password") : type}
                    className="form-control"
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                />

                {type === "password" && (
                    <span
                        className="input-group-text"
                        style={{ cursor: "pointer" }}
                        onClick={() => setShowPassword(!showPassword)}
                    >
                        {showPassword ? <GoEyeClosed /> : <GoEye />}
                    </span>
                )}
            </div>
        </div>
    );
}

export default Input;