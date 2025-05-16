import React, {useState} from 'react';
import {FaLock, FaEye, FaEyeSlash} from 'react-icons/fa';

const InputField = ({
                        iconStart,
                        iconEnd,
                        placeholder,
                        label,
                        type = "text",
                        name,
                        value,
                        onChange,
                        className = "",
                        ...props
                    }) => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    let iconStyles = {color: "#0284C7", fontSize: "1rem"};

    const togglePasswordVisibility = () => {
        setIsPasswordVisible(prevState => !prevState);
    };

    return (
        <div className="relative w-full">
            {label && <label className="block text-sm font-medium text-secondary-600 mb-1">{label}</label>}
            <div className="relative">
                {iconStart && (
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        {iconStart}
                    </div>
                )}
                <input
                    type={type === "password" && isPasswordVisible ? "text" : type} // Handle password visibility
                    name={name}
                    id={name}
                    value={value}
                    onChange={onChange}
                    required
                    className={`pl-10 w-full rounded-lg border border-secondary-300 px-4 py-2 input-focus-effect transition-all duration-200 focus:outline-none ${className}`}
                    placeholder={placeholder}
                    {...props}
                />
                {iconEnd && (
                    <div
                        className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                        onClick={togglePasswordVisibility}
                    >
                        {isPasswordVisible ? <FaEyeSlash style={iconStyles}/> : <FaEye style={iconStyles}/>}
                    </div>
                )}
            </div>
        </div>
    );
};

export default InputField;