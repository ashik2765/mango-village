import React, { useEffect, useState } from 'react'
import DashProCard from './DashProCard';

export default function AllProducts() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/mangos')
      .then(res => res.json())
      .then(data => setProducts(data))
  }, []);

  const hadleRemoveDeleteItem = (id) => {
    setProducts(products.filter((product) => product._id !== id))
  };
  
  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
        All Products
      </h2>
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
        {
          products.map(product => <DashProCard key={product._id} product={product} onDelete={hadleRemoveDeleteItem}></DashProCard>)
        }
      </div>
    </div>
  )
}
