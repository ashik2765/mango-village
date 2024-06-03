import { Outlet } from "react-router-dom";
import Navbar from "../home/Navbar/Navbar";
import Footer from "../home/Footer/Footer";


export default function MainLoyout() {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    )
}
