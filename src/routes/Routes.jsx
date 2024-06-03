import {
    createBrowserRouter,
} from "react-router-dom";
import MainLoyout from "../layouts/MainLoyout";
import Home from "../home/Home/Home";
import Register from "../home/Login/Register";
import Login from "../home/Login/Login";
import ProductDetails from "../home/Home/ProductDetails";
import DashboardLayout from "../layouts/DashboardLayout";
import DashboardHome from "../dashboard/DashboardHome";
import AddProduct from "../dashboard/AddProduct";
import AllProducts from "../dashboard/AllProducts";
import EditProduct from "../dashboard/EditProduct";
import Shop from "../home/Home/Shop";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLoyout></MainLoyout>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5000/mangos')
            },
            {
                path: "shop",
                element: <Shop></Shop>,
                loader: () => fetch('http://localhost:5000/mangos')
            },
            {
                path: "product/:id",
                element: <ProductDetails></ProductDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/mangos/${params.id}`)
            },
            {
                path: "login",
                element: <Login></Login>
            },
            {
                path: "register",
                element: <Register></Register>
            }
        ]
    },
    {
        path: "dashboard",
        element: <DashboardLayout></DashboardLayout>,
        children: [
            {
                index: true,
                element: <DashboardHome></DashboardHome>
            },
            {
                path: "allproducts",
                element: <AllProducts></AllProducts>
            },
            {
                path: "edit/:id",
                element: <EditProduct></EditProduct>,
                loader: ({ params }) => fetch(`http://localhost:5000/mangos/${params.id}`)

            },
            {
                path: "addproduct",
                element: <AddProduct></AddProduct>
            }
        ]
    }
]);
