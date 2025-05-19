import {Dialog, Transition} from '@headlessui/react';
import React, { useState, useEffect} from 'react';
import InputField from '../input/input';

const ProductModal: React.FC<any> = ({isOpen, onClose, onSubmit, initialData = null}) => {
    const [form, setForm] = useState({
        name: '',
        sku: '',
        stock: '',
        price: '',
        image: null,
    });

    useEffect(() => {
        if (initialData) {
            setForm({
                name: initialData.name || '',
                sku: initialData.sku || '',
                stock: initialData.stock || '',
                price: initialData.price || '',
                image: null,
            });
        }
    }, [initialData]);

    const handleChange = (e: any) => {
        const {name, value, files} = e.target;
        if (name === 'image') {
            setForm((prev) => ({...prev, image: files[0]}));
        } else {
            setForm((prev) => ({...prev, [name]: value}));
        }
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();
        onSubmit(form, initialData === null);
    };
    return (
        <Transition appear show={isOpen}>
            <Dialog as="div" className="relative z-50" onClose={onClose}>
                <Transition.Child
                    enter="ease-out duration-300" leave="ease-in duration-200"
                    enterFrom="opacity-0" enterTo="opacity-100"
                    leaveFrom="opacity-100" leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 backdrop-blur-sm bg-gray-700/80"/>
                </Transition.Child>

                <div className="fixed inset-0 overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4">
                        <Transition.Child
                            enter="ease-out duration-300" leave="ease-in duration-200"
                            enterFrom="opacity-0 scale-95" enterTo="opacity-100 scale-100"
                            leaveFrom="opacity-100 scale-100" leaveTo="opacity-0 scale-95"
                        >
                            <Dialog.Panel
                                className="w-full max-w-md transform rounded-2xl bg-white p-6 shadow-xl transition-all">
                                <Dialog.Title className="text-lg font-medium text-gray-900">
                                    {initialData ? 'Editar Producto' : 'Crear Producto'}
                                </Dialog.Title>

                                <form onSubmit={handleSubmit} className="mt-4 space-y-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700">Nombre</label>
                                        <InputField
                                            type="text"
                                            value={form.name}
                                            onChange={handleChange}
                                            name="name"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700">SKU</label>
                                        <InputField
                                            type="text"
                                            value={form.sku}
                                            onChange={handleChange}
                                            name="sku"
                                        />
                                    </div>

                                    <div className="flex gap-4">
                                        <div className="flex-1">
                                            <label className="block text-sm font-medium text-gray-700">Cantidad</label>
                                            <InputField
                                                type="number"
                                                value={form.stock}
                                                onChange={handleChange}
                                                name="stock"
                                            />
                                        </div>

                                        <div className="flex-1">
                                            <label className="block text-sm font-medium text-gray-700">Precio</label>
                                            <InputField
                                                type="number"
                                                value={form.price}
                                                onChange={handleChange}
                                                name="price"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700">Imagen de
                                            referencia</label>
                                        <input
                                            type="file"
                                            name="image"
                                            accept="image/*"
                                            onChange={handleChange}
                                            className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:rounded file:border-0 file:bg-sky-700 file:py-2 file:px-4 file:text-white hover:file:bg-sky-800"
                                        />
                                    </div>

                                    <div className="mt-6 flex justify-end gap-2">
                                        <button
                                            type="button"
                                            onClick={onClose}
                                            className="px-4 py-2 text-sm text-gray-700 bg-gray-200 rounded hover:bg-gray-300"
                                        >
                                            Cancelar
                                        </button>
                                        <button
                                            type="submit"
                                            className="px-4 py-2 text-sm text-white bg-sky-700 rounded hover:bg-sky-800"
                                        >
                                            {initialData ? 'Actualizar' : 'Crear'}
                                        </button>
                                    </div>
                                </form>

                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    );
};

export default ProductModal;