import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from "./pages/Home"
import Login from './pages/Auth/Login'
import Register from './pages/Auth/Register'
import Profile from './pages/Auth/Profile'
import ForgotPassword from './pages/Auth/Forgot'
import ProductLayout from './pages/Product/ProductLayout'
import Product from './pages/Product/Product'
import { useEffect, useRef, useState } from 'react'
import ProductDetail from './pages/Product/ProductDetail'
import PaymentLayout from './pages/Payment/PaymentLayout'
import Payment from './pages/Payment/Payment'
import OrderHistory from './pages/Payment/OrderHistory'
import UserContext from './components/context/UserContext'
import CartContext from './components/context/CartContext'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import AlertContext from './components/context/AlertContext'
import OrderHistoryDetail from './pages/Payment/OrderHistoryDetail'
import FourZeroFour from './pages/FourZeroFour'

const App = () => {
    const [alert, setAlert] = useState([])
    const [user, setUser] = useState(null)
    const [cart, setCart] = useState(null)

    const modal = useRef()
    function modalRemove() {
        setAlert([])
    }

    useEffect(() => {
        const fetchUser = async () => {
            const token = window.localStorage.getItem("token")
            if (!token) {
                return
            }

            const req = await http("/profile", null, { token })
            const data = await req.json()
            if(!data.success){
                window.localStorage.removeItem("token")
            }

            setUser(data.data)
            const reqCart = await http("/cart", null, { token })
            const cartData = await reqCart.json()
            if(!data.success){
                window.localStorage.removeItem("token")
            }
            
            if(cartData.data.length < 0){
                setCart(null)
            }
            
            setCart(cartData.data)
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
            path: '/profile',
            element: <Profile />
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
                },
                {
                    path: 'order/:orderId',
                    element: <OrderHistoryDetail />
                }
            ]
        },
        {
            path: '*',
            element: <FourZeroFour />,
        },
    ])
    return (
        <UserContext value={{ user, setUser }}>
            <CartContext value={{ cart, setCart }}>
                <AlertContext value={{ setAlert }}>
                    {(alert[0] === "success" ? <div ref={modal} className="fixed top-0 left-0 right-0 bottom-0 bg-black/40 backdrop-blur-lg flex justify-center items-center z-10"><div className="bg-green-400 text-green-700 w-[50%] h-[50%] flex items-center justify-center relative rounded"><button type="button" className="text-red-700 w-10 h-10 absolute -top-4 -right-4 cursor-pointer" onClick={modalRemove}><AiOutlineCloseCircle className="text-red-700 w-10 h-10" /></button><span className="text-green-700 p-4 font-bold">{alert[1]}</span></div></div> : "")}
                    {(alert[0] === "fail" ? <div ref={modal} className="fixed top-0 left-0 right-0 bottom-0 bg-black/40 backdrop-blur-lg flex justify-center items-center z-10"><div className="bg-red-400 text-red-700 w-[50%] h-[50%] flex items-center justify-center relative rounded"><button type="button" className="text-red-700 w-10 h-10 absolute -top-4 -right-4 cursor-pointer" onClick={modalRemove}><AiOutlineCloseCircle className="text-red-700 w-10 h-10" /></button><span className="text-red-700 p-4 font-bold">{alert[1]}</span></div></div> : "")}
                    <RouterProvider router={router} />
                </AlertContext>
            </CartContext>
        </UserContext>
    )
}

export default App