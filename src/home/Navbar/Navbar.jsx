import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../firebase/AuthProvider'

export default function Navbar() {
    const { user, logOut } = useContext(AuthContext);
    const navOption = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/shop">Shop</Link></li>
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link>Blog</Link></li>
    </>
    const handleLogout = async () => {
        await logOut()
    };
    return (
        <div className="navbar bg-yellow-100 shadow-md">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-yellow-100 rounded-box w-52">
                        {navOption}
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-2xl text-yellow-600 font-bold">Mango Village</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navOption}
                </ul>
            </div>
            <div>

            </div>
            <div className="navbar-end">
                {user && <>
                    <div className="avatar me-5">
                        <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={user?.photoURL} />
                        </div>
                    </div>
                    <Link to="login" onClick={handleLogout} className="btn bg-yellow-500 text-white hover:bg-yellow-600 transition duration-300">
                        Logout
                    </Link>
                </>}
                {
                    !user && <Link to="login" className="btn bg-yellow-500 text-white hover:bg-yellow-600 transition duration-300">
                        Login
                    </Link>
                }

            </div>
        </div>
    )
}
