import React from 'react'
import { GoEye, GoEyeClosed } from "react-icons/go";


export const Input = (props) => {
    const { label, placeholder, isImportant, onClick, onChange, onSubmit, value, showPassword, setShowPassword, type, name, error } = props

    return (
        <div>
            {label && <label className='sub-heading'>{label}</label>}

            {isImportant && <span className="text-error-500">*</span>}

            <div className="input-group mb-3">
                <input
                    type={type === "password" ? (showPassword ? "text" : "password") : type}
                    name={name}
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

            {error && (
                <small className="text-danger">
                    {error}
                </small>
            )}
        </div>
    )
}
