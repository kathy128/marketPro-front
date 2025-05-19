import {jwtDecode} from 'jwt-decode';

export const getTokenData = () => {
    const token = localStorage.getItem("token");
    if (!token) return null;

    try {
        const decoded = jwtDecode(token);
        const currentTime = Date.now() / 1000;
        if (decoded.exp < currentTime) {
            localStorage.removeItem("token");
            return null;
        }
        console.log('decoded', decoded)
        return {
            token,
           /* user: {
                id: decoded.,
                email: decoded.email,
                role: decoded.role,
            },*/
        };
    } catch (error) {
        console.error("Error decodificando el token:", error);
        localStorage.removeItem("token");
        return null;
    }
};
export const login = async (formData) => {
    const response = await fetch(
        `${import.meta.env.VITE_API_URL}/auth/login`,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        }
    );
    if (!response.ok) {
        throw new Error("Error en el login. Status: " + response.status);
    }
    const data = await response.json();
    return data;
}