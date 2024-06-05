import React, { useContext } from 'react'
import { AuthContext } from '../firebase/AuthProvider'
import { useLoaderData } from 'react-router-dom';

export default function EditUserInfo() {
    const data = useLoaderData();

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const phone = form.phone.value;
        const photoURL = form.imageURL.value;
        const address = form.address.value;
        const userData = { name, phone, photoURL, address, email: data?.email }
        console.log(userData);
        fetch(`http://localhost:5000/user/${data._id}`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(userData)
        })
            .then(res => res.json())
            .then(data => console.log(data))

    }
    return (
        <div className="w-full min-h-screen flex items-center justify-center bg-gray-100">
            <div className=" w-full bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-6 text-center">Edit User Info</h2>
                <form className='grid grid-cols-1 md:grid-cols-2 gap-5' onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-semibold mb-2" htmlFor="name">Name</label>
                        <input
                            type="text"
                            name="name"
                            defaultValue={data?.name}
                            className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-semibold mb-2" htmlFor="email">Email</label>
                        <input
                            type="email"
                            name="email"
                            defaultValue={data?.email}
                            disabled
                            className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-semibold mb-2" htmlFor="number">Phone</label>
                        <input
                            type="number"
                            name="phone"
                            className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-semibold mb-2" htmlFor="imageURL">Image-URL</label>
                        <input
                            type="text"
                            name="imageURL"
                            defaultValue={data?.photoURL}
                            className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500"
                            required
                        />
                    </div>
                    <div className="mb-4 col-span-full">
                        <label className="block text-gray-700 font-semibold mb-2" htmlFor="password">Address</label>
                        <input
                            type="text"
                            name="address"
                            className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500"
                            required
                        />
                    </div>
                    <div className="text-center col-span-full">
                        <button
                            type="submit"
                            className="w-full bg-yellow-500 text-white py-2 px-4 rounded-full hover:bg-yellow-600 transition duration-300"
                        >
                            Done
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}
