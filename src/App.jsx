import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from "./pages/Home"
import Login from './pages/Auth/Login'
import Register from './pages/Auth/Register'
import ForgotPassword from './pages/Auth/Forgot'
import Product from './pages/Product/Product'

const App = () => {
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
            element: <Product />
        },
    ])
    return (
        < RouterProvider router = { router } />
    )
}

export default App