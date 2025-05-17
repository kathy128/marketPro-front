import React, {useState} from 'react';
import {FaBoxes, FaEnvelope, FaEye, FaLock, FaSignInAlt} from 'react-icons/fa';
import InputField from '../../components/input/input';
import {toast} from "react-toastify";
import ButtonWithIcon from '../../components/button';

const Login = () => {
    let iconStyles = {color: "#0284C7", fontSize: "1rem"};
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;

    const [formData, setFormData] = useState({
        email: "",
        name: "",
        password: "",
        confirmPassword: "",
        role: "comprador",
    });

    const [errors, setErrors] = useState({
        email: '',
        password: '',
    });

    const validateForm = () => {
        let formErrors:{email: string, password: string} = {};
        if (!formData.email || !emailRegex.test(formData.email)) {
            formErrors.email = 'Por favor ingresa un correo electrónico válido.';
        }
        if (!formData.password || !passwordRegex.test(formData.password)) {
            formErrors.password = 'La contraseña debe tener al menos 8 caracteres, incluir mayúsculas y números.';
        }
        return formErrors;
    };

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors({
            email: '',
            password: '',
        });
        const formErrors = validateForm();
        if (Object.keys(formErrors).length !== 0) {
            setErrors(formErrors);
            toast.error('Por favor corrige los errores antes de enviar.');
            return;
        }
        if (formData.password !== formData.confirmPassword) {
            toast.error('Las contraseñas no coinciden')
            return;
        }

    };

    return (
        <div className="min-h-screen gradient-bg flex items-center justify-center p-4">
            <div className="w-full max-w-md bg-white rounded-xl shadow-xl overflow-hidden">
                <div className="bg-primary-700 p-2 text-white">
                    <div className="flex items-center justify-between">
                        <div>
                            <h1 className="text-2xl font-bold text-sky-700">MaketPro</h1>
                            <p className="text-sm text-sky-700">Control de inventario para marketplace</p>
                        </div>
                        <div className="bg-white/20 p-3 rounded-lg">
                            <FaBoxes style={{...iconStyles, fontSize: "3rem"}}/>
                        </div>
                    </div>
                </div>
                <div className="p-6">
                    <h2 className="text-xl text-center font-semibold text-secondary-800 mb-6">Iniciar sesión</h2>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <InputField
                                iconStart={<FaEnvelope style={iconStyles}/>}
                                placeholder="tu@email.com"
                                label="Email"
                                type="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                name="email"
                            />
                            {errors.email && <p className="text-rose-800 text-xs font-bold">{errors.email}</p>}
                        </div>
                        <div>
                            <InputField
                                iconStart={<FaLock style={iconStyles}/>}
                                iconEnd={<FaEye style={iconStyles}/>}
                                placeholder="••••••••"
                                label="Contraseña"
                                type="password"
                                value={formData.password}
                                onChange={handleInputChange}
                                name="password"
                            />
                            {errors.password && <p className="text-rose-800 text-xs font-bold">{errors.password}</p>}
                        </div>
                        <div>
                            <ButtonWithIcon
                                icon={<FaSignInAlt style={{ color: 'white', fontSize: "1rem" }} />}
                                text="Ingresar"
                                width="w-full"
                            />
                        </div>

                    </form>
                    <div className="mt-6 text-center text-sm text-secondary-500">
                        ¿Aún no tienes una cuenta? <a href="/register"
                                                  className="font-medium text-primary-600 hover:text-primary-500">Registrate</a>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Login;