import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../firebase/AuthProvider';
import { Link } from 'react-router-dom';

export default function DashboardHome() {
  const { user } = useContext(AuthContext);
  const [userInfo, setUserInfo] = useState();

  useEffect(() => {
    fetch(`https://mangoserver.onrender.com/user/${user?.email}`)
      .then(res => res.json())
      .then(data => setUserInfo(data))
  }, [user]);
  return (
    <div className="min-h-screen w-full bg-gray-100 p-6 flex items-center justify-center">
      <div className="w-full max-w-6xl bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="bg-yellow-500 p-4">
          <h1 className="text-2xl font-semibold text-white">User Dashboard</h1>
        </div>
        <div className="flex items-center p-6">
          <img className="w-24 h-24 rounded-full object-cover mr-6" src={userInfo?.image} />
          <div>
            <h2 className="text-xl font-bold text-gray-900">{userInfo?.name}</h2>
            <p className="text-gray-600">{userInfo?.email}</p>
          </div>
        </div>
        <div className="p-6 border-t border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">User Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-4 rounded-lg shadow">
              <h4 className="text-sm font-semibold text-gray-700">Name</h4>
              <p className="text-gray-900">{userInfo?.name}</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg shadow">
              <h4 className="text-sm font-semibold text-gray-700">Email</h4>
              <p className="text-gray-900">{userInfo?.email}</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg shadow">
              <h4 className="text-sm font-semibold text-gray-700">Phone</h4>
              <p className="text-gray-900">{userInfo?.phone}</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg shadow">
              <h4 className="text-sm font-semibold text-gray-700">Address</h4>
              <p className="text-gray-900">{userInfo?.address}</p>
            </div>
          </div>
        </div>
        <div className="bg-gray-100 px-6 py-4 border-t border-gray-200 flex justify-end">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-600 transition duration-300">
            <Link to={`profile/edit/${userInfo?._id}`}>Edit Profile</Link>
          </button>
        </div>
      </div>
    </div>
  )
}
