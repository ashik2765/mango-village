import React, { useContext, useState } from 'react'
import SocialLogin from './SocialLogin';
import { AuthContext } from '../../firebase/AuthProvider';
import toast from 'react-hot-toast';

export default function Register() {
    const { createUser } = useContext(AuthContext);
    const [Error, setError] = useState(null);




    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirmPassword = form.confirmPassword.value;



        if (password == confirmPassword) {
            createUser(email, password)
                .then(data => {
                    if (data?.user?.email) {
                        const userInfo = {
                            email: data?.user?.email,
                            name: name
                        }
                        fetch('https://mangoserver.onrender.com/user', {
                            method: "POST",
                            headers: {
                                "content-type": "application/json"
                            },
                            body: JSON.stringify(userInfo)
                        }).then(res => res.json())
                            .then(() => {
                                toast.success("user saved in Database")
                            })
                    }

                })
                .catch(error => {
                    console.log(error.message);
                })
        }
        else {
            setError("password not matched")
        }

    };
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-semibold mb-2" htmlFor="username">Name</label>
                        <input
                            type="text"
                            name="name"
                            className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-semibold mb-2" htmlFor="email">Email</label>
                        <input
                            type="email"
                            name="email"
                            className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-semibold mb-2" htmlFor="password">Password</label>
                        <input
                            type="password"
                            name="password"
                            className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-semibold mb-2" htmlFor="confirmPassword">Confirm Password</label>
                        <input
                            type="password"
                            name="confirmPassword"
                            className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500"
                            required
                        />
                        <p>{Error}</p>
                    </div>
                    <div className="text-center">
                        <button
                            type="submit"
                            className="w-full bg-yellow-500 text-white py-2 px-4 rounded-full hover:bg-yellow-600 transition duration-300"
                        >
                            Register
                        </button>
                    </div>
                </form>
                <div className="mt-6 text-center text-gray-600">or register with</div>
                <SocialLogin></SocialLogin>
                <div className="mt-4 text-center">
                    <p className="text-gray-600">Already have an account? <a href="/login" className="text-yellow-500 hover:text-yellow-600">Login</a></p>
                </div>
            </div>
        </div>
    )
}
