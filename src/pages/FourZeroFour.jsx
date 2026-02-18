import { useEffect, useState } from "react"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import { BsArrowRight } from "react-icons/bs"
import dataFetcher from "/src/lib/dataFetcher"
import ProductCard from "../components/ProductCard"

const OtherProducts = () => {
    const [products, setProducts] = useState(null)
    useEffect(
        () => {
            dataFetcher("https://raw.githubusercontent.com/rezafauzan/koda-b6-react/refs/heads/feat/product-populating/public/assets/data/product.json").then(
                productsData => { setProducts(productsData) }
            )
        }, []
    )
    return (
        <>
            <div className="flex justify-between gap-4 px-10">
                <h2 className="text-xl md:text-4xl">Recommendation <span className="text-(--color-accent)">For You</span></h2>
            </div>
            <div className="flex flex-col lg:flex-row p-4 gap-4 w-full justify-center items-center">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center items-center lg:justify-between gap-4 px-16 lg:px-4">
                    {
                        (products != null ? (products.map((product, index) => <ProductCard key={"product-" + index} product={product} />)).slice(0, 4) : <span className="text-xl text-green-400">Loading...</span>)
                    }
                    <div className="flex col-span-1 md:col-span-2 lg:col-span-4 justify-evenly items-center w-full">
                        <span className="cursor-pointer flex justify-center items-center w-10 h-10 bg-(--color-primary) hover:bg-(--color-primary-active) rounded-full">1</span>
                        <span className="cursor-pointer flex justify-center items-center w-10 h-10 bg-slate-400 hover:bg-slate-300 rounded-full text-slate-700">2</span>
                        <span className="cursor-pointer flex justify-center items-center w-10 h-10 bg-slate-400 hover:bg-slate-300 rounded-full text-slate-700">3</span>
                        <span className="cursor-pointer flex justify-center items-center w-10 h-10 bg-slate-400 hover:bg-slate-300 rounded-full text-slate-700">4</span>
                        <span className="cursor-pointer flex justify-center items-center w-10 h-10 bg-slate-400 hover:bg-slate-300 rounded-full text-slate-700">5</span>
                        <span className="cursor-pointer flex justify-center items-center w-10 h-10 bg-slate-400 hover:bg-slate-300 rounded-full text-slate-700">6</span>
                        <span className="cursor-pointer flex justify-center items-center w-10 h-10 bg-(--color-primary) hover:bg-(--color-primary-active) rounded-full"><BsArrowRight className="text-white" /></span>
                    </div>
                </div>
            </div>
        </>
    )
}

const FourZeroFour = () => {
    return (
        <div className="container max-w-360 mx-auto flex flex-col">
            <Navbar theme={"dark"} />
            <section>
                <div className="grid grid-cols-1">
                    <div className="flex flex-col col-span-1">
                        <div className="flex flex-col col-span-1 lg:flex-row gap-4 p-4 w-full">
                            <h1 className="text-4xl font-bold">Page Not Found</h1>
                        </div>
                        <div className="flex flex-col lg:flex-row gap-4 p-4 flex-1 w-full">
                            <div className="flex justify-center gap-4 w-full">
                                <div className="flex-1 h-fit flex flex-col justify-center items-center gap-4 border border-black/10 p-4 w-full">
                                    <OtherProducts />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}
export default FourZeroFour