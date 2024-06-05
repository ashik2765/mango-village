import React from 'react'
import toast from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';

export default function EditProduct() {

    const data = useLoaderData();
    const { _id } = data;

    const handleSubmit = async (e) => {
        const token = localStorage.getItem('token')
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const price = form.price.value;
        const description = form.description.value;
        const image = form.image.value;

        const data = { name, price, description, image }
        await fetch(`https://mangoserver.onrender.com/mangos/${_id}`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json",
                authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(data),
        })
            .then(res => res.json())
            .then(() => {
                toast.success('Product Updated')
            })
    }
    return (
        <div className="w-full mx-auto bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-6 text-center">Add New Product</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-gray-700 font-semibold mb-2">Product Name</label>
                    <input
                        type="text"
                        name="name"
                        defaultValue={data?.name}
                        className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 font-semibold mb-2" htmlFor="price">Price</label>
                    <input
                        type="number"
                        name="price"
                        defaultValue={data?.price}
                        className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 font-semibold mb-2" htmlFor="description">Description</label>
                    <textarea
                        name="description"
                        defaultValue={data?.description}
                        className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500"
                        rows="4"
                        required
                    ></textarea>
                </div>
                <div className=" flex flex-row gap-5 justify-center items-center mb-4">
                    <div className='w-1/2'>
                        <label className="block text-gray-700 font-semibold mb-2" htmlFor="image">Image URL</label>
                        <input
                            type="text"
                            name="image"
                            defaultValue={data?.image}
                            className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500"
                            required
                        />
                    </div>
                    <div className='w-1/2'>
                        <img className='rounded-lg w-48' src={data.image} alt="mango-image" />
                    </div>
                </div>
                <div className="text-center">
                    <button
                        type="submit"
                        className="bg-yellow-500 text-white py-2 px-4 rounded-full hover:bg-yellow-600 transition duration-300"
                    >
                        Edit Product
                    </button>
                </div>
            </form>
        </div>
    )
}
