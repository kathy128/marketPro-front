import type {Product} from '../types/product';

export const createProduct = async (body:any) => {
    const formData = new FormData();
    for (let key in body) {
        formData.append(key, body[key]);
    }
    const response = await fetch(
        `${import.meta.env.VITE_API_URL}/products`,
        {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${localStorage.getItem("token")}`
            },
            body: formData,
        }
    );
    if (!response.ok) {
        throw new Error("Error al crear el producto: " + response.status);
    }
    return await response.json();;
}

export const updateProduct = async (id: any, body: any) => {
    const formData = new FormData();
    for (let key in body) {
        if (key !== id && body[key] !== null) {
            formData.append(key, body[key]);
        }
    }
    const response = await fetch(
        `${import.meta.env.VITE_API_URL}/products/${id}`,
        {
            method: "PATCH",
            headers: {
                "Authorization": `Bearer ${localStorage.getItem("token")}`
            },
            body: formData,
        }
    );
    if (!response.ok) {
        throw new Error("Error al actualizar el producto: " + response.status);
    }
    return await response.json();;
}
export const removeProduct = async (id: number) => {
    const response = await fetch(
        `${import.meta.env.VITE_API_URL}/products/${id}`,
        {
            method: "DELETE",
            headers: {
                "Authorization": `Bearer ${localStorage.getItem("token")}`
            },
        }
    );
    if (!response.ok) {
        throw new Error("Error al eliminar el producto: " + response.status);
    }
    return await response.json();
}

export const getProducts = async (extraUrl: any) => {
    try {
        const response = await fetch(
            `${import.meta.env.VITE_API_URL}/products${extraUrl}`,
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );
        if (!response.ok) {
            throw new Error("Error al traer los productos: " + response.status);
        }
        const data = await response.json();
        return transformData(data);
    } catch (error) {
        console.error("Error al traer los productos:", error);
    }
}

const transformData = (products: Product[]) => {
    return products.map((product: Product) => ({
        ...product,
        price: Number(product.price),
        rating: Number(product.rating)
    }));
}