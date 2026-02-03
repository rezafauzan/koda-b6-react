import Navbar from "/src/components/Navbar"
import Footer from "/src/components/Footer"
import { Outlet } from "react-router-dom"
import ProductContext from '/src/components/context/ProductContext'
import dataFetcher from '/src/lib/dataFetcher'
import { useEffect, useState } from "react"

const ProductLayout = () => {
    const [data, setData] = useState([])
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

export default ProductLayout