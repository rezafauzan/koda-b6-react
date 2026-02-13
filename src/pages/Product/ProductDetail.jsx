import { AiFillStar } from "react-icons/ai";
import { useContext, useEffect, useRef, useState } from "react";
import { BsArrowRight, BsHandThumbsUp } from "react-icons/bs";
import { BsCart3 } from "react-icons/bs"
import ProductCard from "/src/components/ProductCard";
import { useNavigate, useParams } from "react-router-dom";
import ProductContext from "/src/components/context/ProductContext";
import { useForm } from "react-hook-form";
import UserContext from "/src/components/context/UserContext"
import CartContext from "../../components/context/CartContext";
import AlertContext from "../../components/context/AlertContext";

const OtherProducts = () => {
    const products = useContext(ProductContext)
    return (
        <section>
            <div className="flex justify-between gap-4 px-10">
                <h2 className="text-xl md:text-4xl">Recommendation <span className="text-(--color-accent)">For You</span></h2>
            </div>
            <div className="flex flex-col lg:flex-row p-4 gap-4 w-full justify-center items-center">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center items-center lg:justify-between gap-4 px-16 lg:px-4">
                    {
                        (products.length > 0 ? (products.map((product, index) => <ProductCard key={"product-" + index} product={product} />)).slice(0, 8) : <span className="text-xl text-green-400">Loading...</span>)
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
        </section>
    )
}

const ProductDetail = () => {
    const { user } = useContext(UserContext)
    const { setAlert } = useContext(AlertContext)
    const products = useContext(ProductContext)
    const { cartData, setCartData } = useContext(CartContext)
    const { register, handleSubmit, setValue } = useForm(
        {
            defaultValues: {
                size: "medium",
                hotice: "ice"
            }
        }
    )
    const { productId } = useParams()
    const [quantity, setQuantity] = useState(1)
    const [galleryActiveIndex, setGalleryActiveIndex] = useState(0)
    const [product, setProduct] = useState(null)
    const navigator = useNavigate()

    useEffect(
        () => {
            const cartLocalStorage = JSON.parse(localStorage.getItem("cart")) || []
            setCartData(cartLocalStorage)
            setQuantity(1)
            setProduct(products.find(product => product.id === parseInt(productId)))
            window.scrollTo({ top: 0, behavior: "smooth" })
        },
        [products, productId]
    )

    function buy(formData) {
        const buyData = formData
        buyData.productId = productId
        buyData.productPrice = product.price
        navigator("/payment", { state: buyData })
    }

    function addToCart(formData) {
        const productCart = {
            ...formData,
            productId: productId,
            productPrice: product.price
        }
        console.log(formData)
        if (cartData != null) {
            const cart = cartData
            cart.push(productCart)
            setCartData(cart)
            window.localStorage.setItem("cart", JSON.stringify(cartData))
            setAlert(["success", `${formData.quantity}pcs ${product.name} ${formData.size} ${formData.hotice} berhasil ditambahkan ke keranjang!`])
        } else {
            const cart = []
            cart.push(productCart)
            setCartData(cart)
            window.localStorage.setItem("cart", JSON.stringify(cartData))
            setAlert(["success", `${formData.quantity}pcs ${product.name} ${formData.size} ${formData.hotice} berhasil ditambahkan ke keranjang!`])
        }
    }

    function recommend(event) {
        // event.target.inner
    }

    function more() {
        let latestQuantity

        if (quantity < product.stock) {
            latestQuantity = quantity + 1
        } else {
            latestQuantity = 1
        }

        setQuantity(latestQuantity)
        setValue("quantity", latestQuantity)
    }

    function reduce() {
        let latestQuantity

        if (quantity > 1) {
            latestQuantity = quantity - 1
        } else {
            latestQuantity = product.stock
        }

        setQuantity(latestQuantity)
        setValue("quantity", latestQuantity)
    }


    return (
        <>
            <section>
                <div className="flex flex-col lg:flex-row gap-4 p-4">
                    <div className="flex-2 grid grid-cols-3 gap-4">
                        {
                            (
                                product != null
                                    ?
                                    product.images.map(
                                        (image, index) => <img className={"w-full cursor-pointer " + (galleryActiveIndex === index ? " col-start-1 col-end-4 row-start-1 row-end-2" : "")} key={"product-image-" + index} src={image} alt={product.name} onClick={() => { setGalleryActiveIndex(index) }} />
                                    )
                                    :
                                    <img className="w-full" key={"product-image-"} src={"/404.loading"} alt={"Loading..."} />)}
                    </div>
                    <div className="flex-4 flex flex-col gap-4">
                        {(
                            product != null
                                ?
                                product.stock < 1
                                    ?
                                    <div className="w-fit h-4 p-4 text-white bg-red-700 flex flex-col justify-center items-center rounded-full">
                                        <span>Out of Stock</span>
                                    </div>
                                    :
                                    (
                                        product.discount > 0.0
                                            ?
                                            <div className="w-fit h-4 p-4 text-white bg-red-700 flex flex-col justify-center items-center rounded-full">
                                                <span>Flash Sale</span>
                                            </div>
                                            :
                                            ""
                                    )
                                :
                                <span>Loading...</span>
                        )}
                        <h3 className="text-xl font-bold">{(product != null ? product.name : "Loading...")}</h3>
                        {(
                            product != null
                                ?
                                (
                                    product.discount > 0.0
                                        ?
                                        <div className="flex items-center gap-4">
                                            <span className="line-through text-red-700 text-xs">
                                                Rp.{product.price.toLocaleString("id-ID")},-
                                            </span>
                                            <span className="text-xl bold text-(--color-primary)">
                                                {"Rp." + (product.price - (product.price * product.discount)).toLocaleString("id-ID") + ",-"}
                                            </span>
                                        </div>
                                        :
                                        <span className="text-xl bold text-(--color-primary)">
                                            {"Rp." + (product.price.toLocaleString("id-ID")) + ",-"}
                                        </span>
                                )
                                :
                                <span>Loading...</span>
                        )}
                        {(
                            product != null
                                ?
                                product.rating > 0
                                    ?
                                    <div className="w-100 flex items-center gap-4">
                                        {
                                            Array.from({ length: product.rating - 1 }).map(() => <AiFillStar className="text-(--color-primary)" />)
                                        }
                                        <AiFillStar className="text-(--color-primary)" />
                                        <span>{product.rating}.0</span>
                                    </div>
                                    :
                                    <div className="flex gap-4">
                                        <img src="/assets/img/star.svg" alt="star_icon" />
                                        <span>This product doesn't have rating yet</span>
                                    </div>
                                :
                                <span>Loading...</span>
                        )}
                        {(
                            product != null
                                ?
                                product.review > 0
                                    ?
                                    <div className="flex items-center gap-4">
                                        <span>{product.review} Review | Recommendation</span>
                                        <button className="cursor-pointer" onClick={recommend}>
                                            <BsHandThumbsUp className="text-(--color-primary)" />
                                        </button>
                                    </div>
                                    :
                                    <div className="flex gap-4">
                                        <img src="/assets/img/star.svg" alt="star_icon" />
                                        <span>This product doesn't have rating yet</span>
                                    </div>
                                :
                                <span>Loading...</span>
                        )}
                        <p>{(product != null ? product.desc : "Loading...")}</p>
                        {
                            (
                                product != null
                                    ?
                                    product.stock > 0
                                        ?
                                        user.role != null ?
                                            <form onSubmit={handleSubmit(buy)} className="flex flex-col gap-4">
                                                <div className="flex items-center p-4">
                                                    <button type="button" className="w-18 h-10 px-4 py-2 border border-(--color-primary) hover:bg-(--color-primary-active) rounded flex justify-center items-center cursor-pointer" onClick={more}>+</button>
                                                    <input {...register("quantity")} type="number" id="quantity" value={quantity} min={1} max={parseInt(product.stock)} readOnly className="text-center w-18 h-10" />
                                                    <button type="button" className="w-18 h-10 px-4 py-2 bg-(--color-primary) hover:bg-(--color-primary-active) rounded flex justify-center items-center cursor-pointer" onClick={reduce}>-</button>
                                                </div>
                                                <span className="text-lg font-bold">Choose Size</span>
                                                <div className="flex gap-4 justify-center items-center">
                                                    <label htmlFor="reguler" className="group flex-1 flex justify-center items-center">
                                                        <input type="radio" {...register("size")} id="reguler" value="reguler" className="hidden" />
                                                        <div className="w-full group-has-[input:checked]:bg-(--color-primary) group-has-[input:checked]:text-white flex flex-col p-4 justify-center items-center border border-black/40 rounded flex-1 hover:border-(--color-primary-active) hover:bg-(--color-primary) hover:text-white cursor-pointer ">
                                                            <span>Reguler</span>
                                                        </div>
                                                    </label>
                                                    <label htmlFor="medium" className="group flex-1 flex justify-center items-center">
                                                        <input type="radio" {...register("size")} id="medium" value="medium" className="hidden" />
                                                        <div className="w-full group-has-[input:checked]:bg-(--color-primary) group-has-[input:checked]:text-white flex flex-col p-4 justify-center items-center border border-black/40 rounded flex-1 hover:border-(--color-primary-active) hover:bg-(--color-primary) hover:text-white cursor-pointer ">
                                                            <span>Medium</span>
                                                        </div>
                                                    </label>
                                                    <label htmlFor="large" className="group flex-1 flex justify-center items-center">
                                                        <input type="radio" {...register("size")} id="large" value="large" className="hidden" />
                                                        <div className="w-full group-has-[input:checked]:bg-(--color-primary) group-has-[input:checked]:text-white flex flex-col p-4 justify-center items-center border border-black/40 rounded flex-1 hover:border-(--color-primary-active) hover:bg-(--color-primary) hover:text-white cursor-pointer ">
                                                            <span>Large</span>
                                                        </div>
                                                    </label>
                                                </div>
                                                <span className="text-lg font-bold">Hot/Ice</span>
                                                <div className="flex gap-4 justify-center items-center">
                                                    <label htmlFor="hot" className="group flex-1 flex justify-center items-center">
                                                        <input type="radio" {...register("hotice")} id="hot" value="hot" className="hidden" />
                                                        <div className="w-full group-has-[input:checked]:bg-(--color-primary) group-has-[input:checked]:text-white flex flex-col p-4 justify-center items-center border border-black/40 rounded flex-1 hover:border-(--color-primary-active) hover:bg-(--color-primary) hover:text-white cursor-pointer ">
                                                            <span>Hot</span>
                                                        </div>
                                                    </label>
                                                    <label htmlFor="ice" className="group flex-1 flex justify-center items-center">
                                                        <input type="radio" {...register("hotice")} id="ice" value="ice" className="hidden" />
                                                        <div className="w-full group-has-[input:checked]:bg-(--color-primary) group-has-[input:checked]:text-white flex flex-col p-4 justify-center items-center border border-black/40 rounded flex-1 hover:border-(--color-primary-active) hover:bg-(--color-primary) hover:text-white cursor-pointer ">
                                                            <span>Ice</span>
                                                        </div>
                                                    </label>
                                                </div>
                                                <div className="flex flex-col md:flex-row gap-4">
                                                    <button type="submit" className="flex-4 px-4 py-2 bg-(--color-primary) hover:bg-(--color-primary-active) rounded flex justify-center items-center cursor-pointer">Buy</button>
                                                    <button type="button" className="px-4 py-2 border rounded flex-1 flex justify-center items-center cursor-pointer text-(--color-primary) border-(--color-primary) hover:border-(--color-primary-active) hover:bg-(--color-primary) hover:text-white" onClick={handleSubmit(data => { addToCart(data) })}>
                                                        <BsCart3 /> Add to cart
                                                    </button>
                                                </div>
                                            </form>
                                            :
                                            ""
                                        :
                                        ""
                                    :
                                    <span>Loading...</span>
                            )
                        }
                    </div>
                </div>
            </section>
            <OtherProducts />
        </>

    )
}

export default ProductDetail