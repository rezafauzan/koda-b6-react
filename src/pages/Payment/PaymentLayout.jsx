import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"
import { Link, Outlet, useNavigate } from "react-router-dom"
import dataFetcher from '/src/lib/dataFetcher'
import { useContext, useEffect, useState } from "react"
import ProductContext from "../../components/context/ProductContext"
import CartContext from "../../components/context/CartContext"
import http from "../../lib/dataFetcher"
import UserContext from "../../components/context/UserContext"

const PaymentLayout = () => {
    const [data, setData] = useState(null)
    const { cart, setCart } = useContext(CartContext)
    const { user, setUser } = useContext(UserContext)
    const navigator = useNavigate()
    useEffect(() => {
        const fetchUser = async () => {
            const token = window.localStorage.getItem("token")
            if (!token) {
                return
            }

            const req = await http("/profile", null, { token })
            const data = await req.json()
            if (!data.success) {
                window.localStorage.removeItem("token")
            }

            const reqCart = await http("/cart", null, { token })
            const cartData = await reqCart.json()
            if (!data.success) {
                window.localStorage.removeItem("token")
                navigator("/login")
            }

            if (cartData.data.length < 0) {
                setCart(null)
            }

            setCart(cartData.data)
        }

        fetchUser()
    }, [])
    console.log(data)
    return (
        <ProductContext value={data}>
            <CartContext value={{ cart }}>
                <UserContext value={{ user, setUser }}>
                    <div className="container max-w-360 mx-auto flex flex-col">
                        <Navbar theme={"dark"} />
                        <Outlet />
                        <Footer />
                    </div>
                </UserContext>
            </CartContext>
        </ProductContext>
    )
}

export default PaymentLayout