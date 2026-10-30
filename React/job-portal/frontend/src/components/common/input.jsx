import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Input = ({
    label,
    type = "text",
    placeholder,
    value = "",
    onChange,
    name,
    required = false,
}) => {

    const [showPassword, setShowPassword] = useState(false);

    const inputType =
        type === "password"
            ? (showPassword ? "text" : "password")
            : type;

    return (
        <div className="mb-3">

            {label && (
                <label className="form-label fw-medium">
                    {label}
                    {required && (
                        <span className="text-danger"> *</span>
                    )}
                </label>
            )}

            <div className="position-relative">

                <input
                    type={inputType}
                    name={name}
                    value={value}
                    onChange={onChange || (() => { })}
                    placeholder={placeholder}
                    className={`form-control ${type === "password" ? "pe-5" : ""
                        }`}
                />

                {type === "password" && (
                    <button
                        type="button"
                        className="btn position-absolute end-0 top-50 translate-middle-y border-0"
                        onClick={() => setShowPassword(!showPassword)}
                    >
                        {showPassword ? (
                            <FaEyeSlash size={18} />
                        ) : (
                            <FaEye size={18} />
                        )}
                    </button>
                )}

            </div>

        </div>
    );
};

export default Input;