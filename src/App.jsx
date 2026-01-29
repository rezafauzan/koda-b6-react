import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from "./pages/Home"
import Login from './pages/Auth/Login'
import Register from './pages/Auth/Register'
import ForgotPassword from './pages/Auth/Forgot'
import ProductLayout from './pages/Product/ProductLayout'
import Product from './pages/Product/Product'
import { useEffect, useState } from 'react'
import ProductContext from './components/context/ProductContext'
import dataFetcher from './lib/dataFetcher'

const App = () => {
    const [data, setData] = useState([])
    useEffect(
        () => {
            dataFetcher("https://raw.githubusercontent.com/rezafauzan/koda-b6-react/refs/heads/feat/product-detail/public/assets/data/product.json").then(
                products=>{setData(products)}
            )
        }
        , []
    )
    const router = createBrowserRouter([
        {
            path: '/',
            element: <Home />
        },
        {
            path: '/login',
            element: <Login />
        },

        {
            path: '/register',
            element: <Register />
        },
        {
            path: '/forgot-password',
            element: <ForgotPassword />
        },
        {
            path: '/product',
            element: <ProductLayout />,
            children: [
                {
                    path: '',
                    element: <Product />
                },
                {
                    path: '/product/:product-id',
                    // element: <ProductDetail />
                }
            ]
        },
    ])
    return (
        <ProductContext value={data}>
            <RouterProvider router={router} />
        </ProductContext>
    )
}

export default App