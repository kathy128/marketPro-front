import React from "react";
import {FaStore, FaMapMarkerAlt,
    FaPhoneAlt, FaLinkedin, FaGithub,
    FaEnvelope} from 'react-icons/fa';

const Footer = () => {
    let iconStyles = { color: "#38BDF8", fontSize: "1.5em"};
    return (
        <>
            <footer className="bg-blue-950 text-white pt-12 pb-6">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-3 gap-8 mb-8">
                        <div>
                            <div className="flex items-center space-x-2 mb-4">
                                <FaStore style={iconStyles} />
                                <span className="text-xl font-bold">MarketPro</span>
                            </div>
                            <p className="text-secondary-300 mb-4">La solución completa para la gestión de inventario de
                                tu
                                marketplace.</p>
                            <div className="flex space-x-4">
                                <a href="https://www.linkedin.com/in/katherine-hidalgo-corredor-7541331ba/" className="text-secondary-300 hover:text-white transition"><FaLinkedin style={iconStyles}/></a>
                                <a href="https://github.com/kathy128" className="text-secondary-300 hover:text-white transition"><FaGithub style={iconStyles}/></a>
                            </div>
                        </div>
                        <div>
                            <h3 className="font-semibold text-lg mb-4">Recursos</h3>
                            <ul className="space-y-2">
                                <li><a href="#"
                                       className="text-secondary-300 hover:text-white transition">Documentación</a>
                                </li>
                                <li><a href="#" className="text-secondary-300 hover:text-white transition">Guías</a>
                                </li>
                                <li><a href="#" className="text-secondary-300 hover:text-white transition">Blog</a></li>
                                <li><a href="#" className="text-secondary-300 hover:text-white transition">Webinars</a>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="font-semibold text-lg mb-4">Contacto</h3>
                            <ul className="space-y-2">
                                <li className="flex items-center gap-2">
                                    <FaMapMarkerAlt style={iconStyles}/>
                                    <span>Barranquilla, Colombia</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <FaPhoneAlt style={iconStyles}/>
                                    <span>+573205877378</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <FaEnvelope style={iconStyles}/>
                                    <span>kathyhidalgo@outlook.com</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div
                        className="pt-6 border-t border-secondary-700 flex flex-col md:flex-row justify-between items-center">
                        <p className="text-secondary-400 mb-4 md:mb-0">© 2023 MarketPro. Todos los derechos
                            reservados.</p>
                        <div className="flex space-x-6">
                            <a href="#" className="text-secondary-400 hover:text-white transition">Términos</a>
                            <a href="#" className="text-secondary-400 hover:text-white transition">Privacidad</a>
                            <a href="#" className="text-secondary-400 hover:text-white transition">Cookies</a>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}
 export default Footer;