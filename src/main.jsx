import {createRoot} from 'react-dom/client'
import "./assets/css/style.css"
import App from './App'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './pages/Auth/Login'
import Register from './pages/Auth/Register'
import ForgotPassword from './pages/Auth/Forgot'

const router = createBrowserRouter([
    {
        path: '/',
        element: ''
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
])

createRoot(document.getElementById('app')).render(
    <RouterProvider router={router} />
)