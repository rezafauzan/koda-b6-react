import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"
import { Outlet } from "react-router-dom"
import dataFetcher from '/src/lib/dataFetcher'
import { useEffect, useState } from "react"
import ProductContext from "../../components/context/ProductContext"

const PaymentLayout = () => {
    const [data, setData] = useState(null)
    useEffect(
        () => {
            dataFetcher("https://raw.githubusercontent.com/rezafauzan/koda-b6-react/refs/heads/feat/product-populating/public/assets/data/product.json").then(
                products => { setData(products) }
            )
        }, []
    )
    return (
        <ProductContext value={data}>
            <div className="container max-w-360 mx-auto flex flex-col">
                <Navbar theme={"dark"} />
                <Outlet />
                <Footer />
            </div>
        </ProductContext>
    )
}

export default PaymentLayout