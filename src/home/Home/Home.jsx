import React from 'react'
import Banner from './Banner'
import AllProduct from './AllProduct'
import Featured from './Featured'
import Review from './Review'
import { useLoaderData } from 'react-router-dom'

export default function Home() {
    const products = useLoaderData();
    return (
        <div>
            <Banner></Banner>
            <AllProduct products={products}></AllProduct>
            <Featured></Featured>
            <Review></Review>
        </div>
    )
}
