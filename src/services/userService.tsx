
export const registerUser = async (formData) => {
    try {
        const response = await fetch(
            `${import.meta.env.VITE_API_URL}/users/register`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            }
        );
        if (!response.ok) {
            throw new Error("Error al registrar usuario. Status: " + response.status);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error al registrar usuario:", error);
    }
}
export const getSellers = async () => {
    try {
        const response = await fetch(
            `${import.meta.env.VITE_API_URL}/users/sellers`,
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${localStorage.getItem("token")}`
                },
            }
        );
        if (!response.ok) {
            throw new Error("Error al obtener vendedores. Status: " + response.status);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error al obtener vendedores:", error);
    }
}