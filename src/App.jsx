import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from "./pages/Home"
import Login from './pages/Auth/Login'
import Register from './pages/Auth/Register'
import ForgotPassword from './pages/Auth/Forgot'
import ProductLayout from './pages/Product/ProductLayout'
import Product from './pages/Product/Product'
import { useEffect, useRef, useState } from 'react'
import ProductDetail from './pages/Product/ProductDetail'
import PaymentLayout from './pages/Payment/PaymentLayout'
import Payment from './pages/Payment/Payment'
import OrderHistory from './pages/Payment/OrderHistory'
import UserContext from './components/context/UserContext'
import { AiOutlineCloseCircle } from 'react-icons/ai'

const App = () => {
    const [alert, setAlert] = useState([])
    const [user, setUser] = useState({})
    
    const modal = useRef()
    function modalRemove() {
        setAlert([])
    }

    useEffect(
        () => {
            const usersLocalStorage = JSON.parse(localStorage.getItem("user")) || {}
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
        <UserContext value={{user, setUser, setAlert}}>
            {(alert[0] === "success" ? <div ref={modal} className="fixed top-0 left-0 right-0 bottom-0 bg-black/40 backdrop-blur-lg flex justify-center items-center"><div className="bg-green-400 text-green-700 w-[50%] h-[50%] flex items-center justify-center relative rounded"><button type="button" className="text-red-700 w-10 h-10 absolute -top-4 -right-4 cursor-pointer" onClick={modalRemove}><AiOutlineCloseCircle className="text-red-700 w-10 h-10" /></button><span className="text-green-700 text-xl font-bold">{alert[1]}</span></div></div> : "")}
            {(alert[0] === "fail" ? <div ref={modal} className="fixed top-0 left-0 right-0 bottom-0 bg-black/40 backdrop-blur-lg flex justify-center items-center"><div className="bg-red-400 text-red-700 w-[50%] h-[50%] flex items-center justify-center relative rounded"><button type="button" className="text-red-700 w-10 h-10 absolute -top-4 -right-4 cursor-pointer" onClick={modalRemove}><AiOutlineCloseCircle className="text-red-700 w-10 h-10" /></button><span className="text-red-700 text-xl font-bold">{alert[1]}</span></div></div> : "")}
            <RouterProvider router={router} />
        </UserContext>
    )
}

export default App