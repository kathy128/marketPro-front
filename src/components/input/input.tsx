import React, {useState} from 'react';
import {FaEye, FaEyeSlash} from 'react-icons/fa';

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
                    className={`${iconStart?"pl-10":""} w-full rounded-lg border focus:border px-4 py-2 hover:border-sky-700 focus:outline-none focus:ring focus:ring-sky-500/50 focus:border-sky-500 transition-all duration-200 ${className}`}
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