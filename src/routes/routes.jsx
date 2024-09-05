import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Products from "../Pages/Products/Products";
import Contact from "../Pages/Contact/Contact";
import Login from "../Auth/Login";
import Register from "../Auth/Register";
import Cart from "../Pages/MyCart/Cart";
import Private from "../private/Private";
import Checkout from "../Pages/MyCart/Checkout/Checkout";
import Error from "../Pages/Error/Error";

export const route = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        errorElement: <Error/>,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: '/Products',
                element: <Products />
            },
            {
                path: '/Contact',
                element: <Contact />
            },
            {
                path: '/Cart',
                element: <Private>
                    <Cart />
                         </Private>
            },
            {
                path:"/Checkout",
                element:<Private><Checkout/></Private>
            },
            {
                path: '/Login',
                element: <Login />
            },
            {
                path: '/Register',
                element: <Register />
            },
        ]
    }
])