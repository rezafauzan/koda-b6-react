import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from "./pages/Home"
import Login from './pages/Auth/Login'
import Register from './pages/Auth/Register'
import ForgotPassword from './pages/Auth/Forgot'
import ProductLayout from './pages/Product/ProductLayout'
import Product from './pages/Product/Product'
import { useEffect, useState } from 'react'
import ProductDetail from './pages/Product/ProductDetail'
import PaymentLayout from './pages/Payment/PaymentLayout'
import Payment from './pages/Payment/Payment'
import OrderHistory from './pages/Payment/OrderHistory'
import UserContext from './components/context/UserContext'

const App = () => {
    const [user, setUser] = useState({})
    useEffect(
        () => {
            const usersLocalStorage = JSON.parse(localStorage.getItem("user")) || []
            setUser(usersLocalStorage)
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
            element: <Login setUser={setUser} />
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
                    path: ':productId',
                    element: <ProductDetail />
                },
            ]
        },
        {
            path: '/payment',
            element: <PaymentLayout />,
            children: [
                {
                    path: '',
                    element: <Payment />
                },
                {
                    path: 'order-history',
                    element: <OrderHistory />
                }
            ]
        },
    ])
    return (
        <UserContext value={user}>
                <RouterProvider router={router} />
        </UserContext>
    )
}

export default App