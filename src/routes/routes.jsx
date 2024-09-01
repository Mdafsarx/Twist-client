import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Products from "../Pages/Products/Products";
import Contact from "../Pages/Contact/Contact";
import Login from "../Auth/Login";
import Register from "../Auth/Register";
import Cart from "../Pages/MyCart/Cart";

export const route = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        errorElement: <div>Error..........</div>,
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
                element: <Cart />
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