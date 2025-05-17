import React from 'react';
import ProductCard from '../../components/productCard';
import InputField from '../../components/input/input';
import {FaHashtag, FaPerbyte, FaPlus, FaSearch} from 'react-icons/fa';
import ButtonWithIcon from '../../components/button';
import ProductModal from '../../components/modal/productModal';
import {addToCart} from '../../store/slices/cartSlice';
import {useDispatch} from 'react-redux';
import type {AppDispatch} from '../../store/configStore';

const {useState, useEffect} = React;

const ProductPage = () => {
    let iconStyles = {color: "#A2A9B4", fontSize: "1rem"};
    const dispatch = useDispatch<AppDispatch>();
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [priceRange, setPriceRange] = useState([0, 1000]);
    const [sortOption, setSortOption] = useState('select');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentProduct, setCurrentProduct] = useState< | null>(null);
    const [searchTerm, setSearchTerm] = useState({
        name: '',
        quantity: '',
        sku: '',
    });
    const roleType = ''
    useEffect(() => {
        const fetchProducts = async () => {
            setLoading(true);
            await new Promise(resolve => setTimeout(resolve, 800));
            const mockProducts = [
                {
                    id: 1,
                    sku: '4',
                    name: 'Smartphone X',
                    price: 599.99,
                    category: 'electronics',
                    rating: 4.5,
                    image: 'https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/d6202f062d4659943ebf353d99e4c219.jpg',
                    featured: true,
                    stock: 15
                },
                {
                    id: 2,
                    sku: '5',
                    name: 'Laptop Pro',
                    price: 1299.99,
                    category: 'electronics',
                    rating: 4.8,
                    image: 'https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/d6202f062d4659943ebf353d99e4c219.jpg',
                    featured: true,
                    stock: 8
                },
                {
                    id: 3,
                    sku: '3',
                    name: 'Camiseta Básica',
                    price: 19.99,
                    category: 'clothing',
                    rating: 4.2,
                    image: 'https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/d6202f062d4659943ebf353d99e4c219.jpg',
                    featured: false,
                    stock: 42
                },
                {
                    id: 4,
                    sku: '7',
                    name: 'Libro de Cocina',
                    price: 24.99,
                    category: 'books',
                    rating: 4.7,
                    image: 'https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/d6202f062d4659943ebf353d99e4c219.jpg',
                    featured: true,
                    stock: 23
                },
                {
                    id: 5,
                    sku: '8',
                    name: 'Sofá Moderno',
                    price: 799.99,
                    category: 'home',
                    rating: 4.3,
                    image: 'https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/d6202f062d4659943ebf353d99e4c219.jpg',
                    featured: false,
                    stock: 5
                },
                {
                    id: 6,
                    sku: '9',
                    name: 'Zapatillas Running',
                    price: 89.99,
                    category: 'sports',
                    rating: 4.6,
                    image: 'https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/d6202f062d4659943ebf353d99e4c219.jpg',
                    featured: true,
                    stock: 17
                },
                {
                    id: 7,
                    sku: '2',
                    name: 'Auriculares Inalámbricos',
                    price: 149.99,
                    category: 'electronics',
                    rating: 4.4,
                    image: 'https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/d6202f062d4659943ebf353d99e4c219.jpg',
                    featured: false,
                    stock: 31
                },
                {
                    id: 8,
                    sku: '1',
                    name: 'Juego de Sartenes',
                    price: 69.99,
                    category: 'home',
                    rating: 4.1,
                    image: 'https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/d6202f062d4659943ebf353d99e4c219.jpg',
                    featured: false,
                    stock: 12
                },
            ];
            setProducts(mockProducts);
            setFilteredProducts(mockProducts);
            setLoading(false);
        };

        fetchProducts();
    }, []);

    useEffect(() => {
        let result = [...products];
        result = result.filter(product =>
            product.price >= priceRange[0] && product.price <= priceRange[1]
        );
        if (searchTerm) {
            if (searchTerm.name) {
                result = result.filter(product =>
                    product.name.toLowerCase().includes(searchTerm.name.toLowerCase())
                );
            } else if (searchTerm.sku) {
                result = result.filter(product =>
                    product.sku.includes(searchTerm.sku.toLowerCase()));
            } else {
                result = result.filter(product =>
                    product.stock.toString().includes(searchTerm.quantity));
            }
        }
        switch (sortOption) {
            case 'price-asc':
                result.sort((a, b) => a.price - b.price);
                break;
            case 'price-desc':
                result.sort((a, b) => b.price - a.price);
                break;
            case 'rating':
                result.sort((a, b) => b.rating - a.rating);
                break;
            case 'featured':
                result.sort((a, b) => (b.featured === a.featured) ? 0 : b.featured ? -1 : 1);
                break;
            default:
                break;
        }

        setFilteredProducts(result);
    }, [products, priceRange, searchTerm, sortOption]);

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setSearchTerm({
            ...searchTerm,
            [name]: value,
        });
    };

    const handlePriceChange = (e, index) => {
        const newPriceRange = [...priceRange];
        newPriceRange[index] = Number(e.target.value);
        setPriceRange(newPriceRange);
    };

    const handleSubmit = (data) => {
        console.log('Producto enviado:', data);
    };

    const handleButtonCard = (data) => {
        if(roleType === 'seller'){
            setCurrentProduct(data);
            setIsModalOpen(true)
        }else{
            handleAddToCart(data)
        }
        console.log('dataCArd: ', data);
    }

    const handleAddToCart = (product) => {
        dispatch(addToCart(product));
    };
    return (
        <div className="mx-auto px-10 py-8 h-full gap-8">
            <div className="relative py-1">
                <h1 className="text-3xl font-bold text-sky-700">Nuestros Productos</h1>
                <div className='absolute right-0 top-0' onClick={() => setIsModalOpen(true)}>
                    <ButtonWithIcon
                        icon={<FaPlus style={{ color: 'white', fontSize: "1rem" }} />}
                        text="Nuevo"
                    />
                </div>
            </div>
            <div className="flex max-lg:flex-col gap-12 h-full">
                <div className="lg:min-w-[30%] bg-white rounded-lg shadow-md p-6 h-fit">
                    <div className="flex flex-col flex-start gap-2 mb-2">
                        <div className="flex justify-between">
                            <label htmlFor="sort" className="font-semibold text-lg text-sky-700 mb-1">Filtrar
                                por:</label>
                            <label htmlFor="sort" className="font-medium text-base text-rose-800 mb-1 underline cursor-pointer" onClick={() => {
                                setPriceRange([0, 1000]);
                                setSortOption('select');
                                setSearchTerm({name: '', sku: '', quantity: ''});
                            }}>Limpiar
                                filtros</label>
                        </div>
                        <label htmlFor="sort" className="text-gray-600">Nombre</label>
                        <div className="relative flex-1">
                            <InputField
                                iconStart={<FaSearch style={iconStyles}/>}
                                placeholder="Buscar producto"
                                type="text"
                                onChange={handleInputChange}
                                value={searchTerm.name}
                                name="name"
                            ></InputField>
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="sort" className="text-gray-600">Orden:</label>
                            <select
                                id="sort"
                                className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-500/50"
                                value={sortOption}
                                onChange={(e) => setSortOption(e.target.value)}>
                                <option value="select">Seleccionar...</option>
                                <option value="price-asc">Precio: Menor a Mayor</option>
                                <option value="price-desc">Precio: Mayor a Menor</option>
                                <option value="rating">Mejor Valorados</option>
                            </select>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <div>
                            <h3 className="text-gray-600">Sku</h3>
                            <div className="flex flex-wrap gap-2">
                                <InputField
                                    iconStart={<FaHashtag style={iconStyles}/>}
                                    placeholder="SKU"
                                    type="text"
                                    onChange={handleInputChange}
                                    value={searchTerm.sku}
                                    name="sku"
                                ></InputField>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-gray-600">Cantidad</h3>
                            <div className="flex flex-wrap gap-2">
                                <InputField
                                    iconStart={<FaPerbyte style={iconStyles}/>}
                                    placeholder="Cantidad"
                                    type="number"
                                    onChange={handleInputChange}
                                    value={searchTerm.quantity}
                                    name="quantity"
                                ></InputField>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-gray-600">Rango de Precio</h3>
                            <div className="flex items-center gap-2">
                                <input
                                    type="range"
                                    min="0"
                                    max="1000"
                                    step="10"
                                    value={priceRange[0]}
                                    onChange={(e) => handlePriceChange(e, 0)}
                                    className="w-full"
                                />
                                <input
                                    type="range"
                                    min="0"
                                    max="1000"
                                    step="10"
                                    value={priceRange[1]}
                                    onChange={(e) => handlePriceChange(e, 1)}
                                    className="w-full"
                                />
                            </div>
                            <div className="flex justify-between mt-2 text-sm text-gray-600">
                                <span>${priceRange[0]}</span>
                                <span>${priceRange[1]}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-center w-full gap-4">
                    {loading ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 w-full gap-6">
                            {[...Array(8)].map((_, index) => (
                                <div key={index}
                                     className="bg-white rounded-lg shadow-md overflow-hidden skeleton-loader">
                                    <div className="h-48 bg-gray-200"></div>
                                    <div className="p-4">
                                        <div className="h-6 bg-gray-200 rounded mb-2"></div>
                                        <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                                        <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <>
                            <div className="flex justify-between items-center">
                                <p className="text-gray-600">
                                    Mostrando <span className="font-semibold">{filteredProducts.length}</span> de <span
                                    className="font-semibold">{products.length}</span> productos
                                </p>
                            </div>

                            {filteredProducts.length === 0 ? (
                                <div className="text-center py-12">
                                    <i className="fas fa-search text-5xl text-gray-300 mb-4"></i>
                                    <h3 className="text-xl font-medium text-gray-700">No se encontraron productos</h3>
                                    <p className="text-gray-500 mt-2">Intenta ajustar tus filtros de búsqueda</p>
                                    <button
                                        onClick={() => {
                                            setPriceRange([0, 1000]);
                                            setSortOption('select');
                                            setSearchTerm({name: '', sku: '', quantity: ''});
                                        }}
                                        className="mt-4 px-4 py-2 bg-sky-700 text-white rounded-lg hover:bg-sky-800 transition"
                                    >
                                        Restablecer filtros
                                    </button>
                                </div>
                            ) : (
                                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
                                    {filteredProducts.map(product => (
                                        <ProductCard key={product.id} product={product} onButtonClick={handleButtonCard}/>
                                    ))}
                                </div>
                            )}
                        </>
                    )}
                </div>
            </div>
            <ProductModal
                isOpen={isModalOpen}
                initialData={currentProduct}
                onClose={() => setIsModalOpen(false)}
                onSubmit={handleSubmit}
            />
        </div>
    );
};

export default ProductPage;