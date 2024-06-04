import React, { useContext, useState } from 'react'
import SocialLogin from './SocialLogin';
import { AuthContext } from '../../firebase/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';

export default function Login() {
    const { logIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/'

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [Error,setError]=useState();

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        logIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
                navigate(from, { replace: true })
            })
            .catch(error => {

                setError(error.message);
            })
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-semibold mb-2" htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={email}
                            onChange={handleEmailChange}
                            className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-semibold mb-2" htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={password}
                            onChange={handlePasswordChange}
                            className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500"
                            required
                        />
                    </div>
                    <div className="text-center">
                        <button
                            type="submit"
                            className="w-full bg-yellow-500 text-white py-2 px-4 rounded-full hover:bg-yellow-600 transition duration-300"
                        >
                            Login
                        </button>
                    </div>
                </form>
                <div className="mt-6 text-center text-gray-600">or login with</div>
                <SocialLogin></SocialLogin>
                <div className="mt-4 text-center">
                    <p className="text-gray-600">Don't have an account? <a href="/register" className="text-yellow-500 hover:text-yellow-600">Register</a></p>
                </div>
            </div>
        </div>
    )
}
