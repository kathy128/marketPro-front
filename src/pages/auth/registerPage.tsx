import {useState} from 'react';
import {FaBoxes, FaEnvelope, FaEye, FaLock, FaSignInAlt, FaUser} from 'react-icons/fa';
import InputField from '../../components/input/input';
import {toast} from "react-toastify";
import { useNavigate } from "react-router-dom";
import ButtonWithIcon from '../../components/button';
import {registerUser} from '../../services/userService';

const RegisterPage = () => {
    let iconStyles = {color: "#0284C7", fontSize: "1rem"};
    const nameRegex = /^[A-Za-z\s]+$/;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: "",
        name: "",
        password: "",
        confirmPassword: "",
        role: "buyer",
    });

    const [errors, setErrors] = useState({
        name: '',
        email: '',
        password: '',
    });

    const validateForm = () => {
        let formErrors:{name?: string, email?: string, password?: string} = {};
        if (!formData.name || !nameRegex.test(formData.name)) {
            formErrors.name = 'El nombre solo puede contener letras y espacios.';
        }
        if (!formData.email || !emailRegex.test(formData.email)) {
            formErrors.email = 'Por favor ingresa un correo electrónico válido.';
        }
        if (!formData.password || !passwordRegex.test(formData.password)) {
            formErrors.password = 'La contraseña debe tener al menos 8 caracteres, incluir mayúsculas y números.';
        }
        return formErrors;
    };

    const handleInputChange = (e: any) => {
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleRoleChange = (role: any) => {
        setFormData({
            ...formData,
            role: role,
        });
    };

    const handleSubmit = async () => {
        setErrors({
            name: '',
            email: '',
            password: '',
        });
        const formErrors = validateForm();
        if (Object.keys(formErrors).length === 0) {
            try {
                const result = await registerUser(formData);
                if (result.error) {
                    toast.error(result.message);
                    throw new Error(`${result.message} ${result}`);
                }
                toast.success(result.message);
                navigate("/login");
            } catch (e: any) {
                console.error("Ocurrió un error", e);
            }
        } else {
            setErrors(formErrors as any);
            toast.error('Por favor corrige los errores antes de enviar.');
            return;
        }
        if (formData.password !== formData.confirmPassword) {
            toast.error('Las contraseñas no coinciden')
            return;
        }
    };

    return (
        <div className="min-h-screen gradient-bg flex items-center justify-center p-8">
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
                    <h2 className="text-xl text-center font-semibold text-secondary-800 mb-6">Registrarse</h2>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <InputField
                                iconStart={<FaUser style={iconStyles}/>}
                                placeholder="tu nombre"
                                label="Nombre completo"
                                type="text"
                                value={formData.name}
                                onChange={handleInputChange}
                                name="name"
                            />
                            {errors.name && <p className="text-rose-800 text-xs font-bold">{errors.name}</p>}
                        </div>
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
                            <div className="text-xs text-secondary-500">Mínimo 8 caracteres, incluir mayúsculas y
                                números
                            </div>
                        </div>
                        <InputField
                            iconStart={<FaLock style={iconStyles}/>}
                            iconEnd={<FaEye style={iconStyles}/>}
                            placeholder="••••••••"
                            label="Confirmar contraseña"
                            type="password"
                            value={formData.confirmPassword}
                            onChange={handleInputChange}
                            name="confirmPassword"
                        />
                        <label className="block text-sm font-medium text-secondary-600 mb-1">Selecciona el rol</label>
                        <div className="flex flex-start gap-4">
                            <button
                                type="button"
                                onClick={() => handleRoleChange('buyer')}
                                className={`px-4 py-2 rounded-lg ${
                                    formData.role === 'buyer' ? 'bg-sky-700 text-white' : 'bg-gray-200 text-gray-700'
                                } transition-colors duration-200`}>
                                Comprador
                            </button>
                            <button
                                type="button"
                                onClick={() => handleRoleChange('seller')}
                                className={`px-4 py-2 rounded-lg ${
                                    formData.role === 'seller' ? 'bg-sky-700 text-white' : 'bg-gray-200 text-gray-700'
                                } transition-colors duration-200`}>
                                Vendedor
                            </button>
                        </div>
                        <div className="flex items-start">
                            <div className="flex items-center h-5">
                                <input name="terms" type="checkbox" required
                                       className="focus:ring-primary-500 h-4 w-4 text-primary-600 border-secondary-300 rounded"/>
                            </div>
                            <div className="ml-3 text-sm">
                                <label className="font-medium text-secondary-600">Acepto los <a
                                    href="https://es.wikipedia.org/wiki/T%C3%A9rminos_y_condiciones_de_uso"
                                    className="text-sky-600 hover:text-sky-500">términos y condiciones</a></label>
                            </div>
                        </div>
                        <div>
                            <ButtonWithIcon onClick={handleSubmit}
                                icon={<FaSignInAlt style={{ color: 'white', fontSize: "1rem" }} />}
                                text="Ingresar"
                                width="w-full"
                                type="button"
                            />
                        </div>

                    </form>
                    <div className="mt-6 text-center text-sm text-secondary-500">
                        ¿Ya tienes una cuenta? <a onClick={() => navigate("/login")}
                            className="font-medium cursor-pointer hover:underline text-primary-600 hover:text-primary-500">Inicia
                        sesión</a>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default RegisterPage;