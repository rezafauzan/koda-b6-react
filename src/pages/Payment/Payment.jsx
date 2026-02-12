import { CgCloseO } from "react-icons/cg";
import Input from "/src/components/Input.jsx";
import profile_icon from "/src/assets/img/Profile.svg"
import mail_icon from "/src/assets/img/mail.svg"
import location_icon from "/src/assets/img/Location.svg"
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import ProductContext from "../../components/context/ProductContext";
import CartContext from "../../components/context/CartContext";
import { useForm } from "react-hook-form";

const Payment = () => {
    const { cartData } = useContext(CartContext)
    const [products, setProducts] = useState(null)
    const [deliveryFee, setDeliveryFee] = useState(0)
    const productsData = useContext(ProductContext)
    const { register, handleSubmit } = useForm({
        defaultValues: {
            delivery: "dineIn"
        }
    })
    let total = 0
    useEffect(
        () => {
            setProducts(productsData)
        }, [productsData]
    )
    function toPayment(data) {
        window.scrollTo({ top: 0, behavior: "smooth" })
        if (data.delivery === "dineIn") {
            setDeliveryFee(0)
        }
        else if (data.delivery === "doorDelivery") {
            setDeliveryFee(10000)
        }
        else {
            setDeliveryFee(5000)
        }
    }
    return (
        <section>
            <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="flex flex-col gap-4 col-span-1 md:col-span-2">
                    <div className="flex flex-col col-span-1 md:col-span-2 lg:flex-row gap-4 p-4">
                        <h1 className="text-4xl font-bold">Payment Details</h1>
                    </div>
                    <div className="flex flex-col lg:flex-row gap-4 p-4 flex-1 ">
                        <div className="flex flex-col lg:flex-row gap-4 p-4 flex-1">
                            <div className="flex-1 flex flex-col gap-4 w-full">
                                <div className="flex gap-4 items-center justify-between h-10">
                                    <h2 className="text-xl font-bold">Your Order</h2>
                                    <Link to="/product" className="cursor-pointer bg-(--color-primary) p-2 w-40 rounded flex justify-center items-center">+ add menu</Link>
                                </div>
                                <div className="flex flex-col gap-4 items-center h-128 p-4 overflow-y-auto">
                                    <div className="flex flex-col gap-4 p-4">
                                        {
                                            (
                                                products != null ?
                                                    cartData != null
                                                        ?
                                                        cartData.map(
                                                            item => {
                                                                const product = products.find(product => product.id === parseInt(item.productId))
                                                                total = cartData.reduce(
                                                                    (total, item) => total + parseInt(item.productPrice * item.quantity), 0
                                                                )
                                                                if (product != null) {
                                                                    return (
                                                                        <div className="h-90 lg:h-52 w-full lg:w-full flex flex-col md:flex-row rounded overflow-hidden bg-gray-100 px-4 relative">
                                                                            <div className="overflow-hidden flex-2 flex flex-col justify-center items-center gap-4 h-90 lg:h-full">
                                                                                <img src={product.images[0]} alt={product.name} className="w-full h-full object-contain" />
                                                                            </div>
                                                                            <div className="h-fit flex flex-col gap-4 left-4 right-4 bottom-0 p-4 rounded flex-3">
                                                                                {(product.discount > 0.0 ? <div className="w-fit h-4 p-4 text-white bg-red-700 top-4 left-4 flex flex-col justify-center items-center rounded-full"><span>Flash Sale</span></div> : "")}
                                                                                <h3 className="text-xl font-bold">{product.name}</h3>
                                                                                <span className="text-black/70">{`${item.quantity}pcs ${product.name} ${item.size} ${item.hotice}`}</span>
                                                                                {(product.discount > 0.0 ? <span className="text-xl bold text-(--color-primary)"><span className="text-red-700 line-through text-xs">{`Rp.${product.price},-`}</span> Rp.{product.price - (product.price * product.discount)},-</span> : <span className="text-xl bold text-(--color-primary)">Rp.{product.price},-</span>)}
                                                                                <button className="absolute flex justify-center items-center top-0 right-4 md:top-[50%] md:translate-y-[-50%] md:right-4 md:bottom-[50%] h-10 w-10 cursor-pointer"><CgCloseO className="h-10 w-10 text-red-700" /></button>
                                                                            </div>
                                                                        </div>
                                                                    )
                                                                }
                                                            }
                                                        )
                                                        :
                                                        <span className="text-black">Loading...</span>
                                                    :
                                                    <span className="text-black">Loading...</span>
                                            )
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col lg:flex-row gap-4 p-4 flex-1">
                            <div className="flex-1 flex flex-col gap-4 w-full">
                                <div className="flex gap-4 items-center h-10">
                                    <h2 className="text-xl font-bold">Total</h2>
                                </div>
                                <div className="flex flex-col p-4 bg-gray-100 rounded">
                                    <div className="flex-1 flex flex-col gap-4">
                                        <div className="flex justify-between items-center">
                                            <span>Order</span>
                                            <span>{"Rp." + total.toLocaleString("id-ID") + ",-"}</span>
                                        </div>
                                        <div className="flex justify-between items-center">
                                            <span>Delivery</span>
                                            <span>{"Rp." + (deliveryFee).toLocaleString("id-ID") + ",-"}</span>
                                        </div>
                                        <div className="flex justify-between items-center">
                                            <span>Tax <sup>ppn 10%</sup></span>
                                            <span>{"Rp." + (total * 10 / 100).toLocaleString("id-ID") + ",-"}</span>
                                        </div>
                                        <hr />
                                        <div className="flex justify-between items-center">
                                            <span>Sub Total</span>
                                            <span>{"Rp." + (total + (total * 10 / 100) + deliveryFee).toLocaleString("id-ID") + ",-"}</span>
                                        </div>
                                        <button type="submit" className="cursor-pointer flex justify-center items-center h-10 bg-(--color-primary) rounded">Checkout</button>
                                        <div className="flex flex-col gap-4">
                                            <span>We Accept</span>
                                            <div className="flex gap-4">
                                                <div className="flex-1"><img src="https://placehold.co/100x40" alt="payment_method1" /></div>
                                                <div className="flex-1"><img src="https://placehold.co/100x40" alt="payment_method1" /></div>
                                                <div className="flex-1"><img src="https://placehold.co/100x40" alt="payment_method1" /></div>
                                                <div className="flex-1"><img src="https://placehold.co/100x40" alt="payment_method1" /></div>
                                                <div className="flex-1"><img src="https://placehold.co/100x40" alt="payment_method1" /></div>
                                                <div className="flex-1"><img src="https://placehold.co/100x40" alt="payment_method1" /></div>
                                            </div>
                                            <span className="text-black/70">*Get Discount if you pay with Bank Central Asia</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-4 col-span-1">
                    <div className="flex flex-col col-span-1 md:col-span-2 lg:flex-row gap-4 p-4">
                        <h2 className="text-xl font-bold">Payment Info & Delivery</h2>
                    </div>
                    <form className="flex flex-col gap-4 p-4 flex-1" onSubmit={handleSubmit(toPayment)}>
                        <Input type="email" {...register("email")} labelName="Email" icon={mail_icon} placeholder="Enter email address" />
                        <Input type="text" {...register("fullname")} labelName="Fullname" icon={profile_icon} placeholder="Enter your fullname" />
                        <Input type="email" {...register("address")} labelName="Address" icon={location_icon} placeholder="Enter your address" />
                        <span className="text-lg font-bold">Choose Size</span>
                        <div className="flex gap-4 justify-center items-center">
                            <label htmlFor="dineIn" className="group flex-1 flex justify-center items-center">
                                <input type="radio" {...register("delivery")} id="dineIn" value={"dineIn"} className="hidden" required/>
                                <div className="w-full group-has-[input:checked]:bg-(--color-primary) group-has-[input:checked]:text-white  flex flex-col p-4 justify-center items-center border border-black/40 rounded flex-1 hover:border-(--color-primary-active) cursor-pointer ">
                                    <span className="text-[8px] lg:text-lg">Dine In</span>
                                </div>
                            </label>
                            <label htmlFor="doorDelivery" className="group flex-1 flex justify-center items-center">
                                <input type="radio" {...register("delivery")} id="doorDelivery" value={"doorDelivery"} className="hidden" required/>
                                <div className="w-full group-has-[input:checked]:bg-(--color-primary) group-has-[input:checked]:text-white  flex flex-col p-4 justify-center items-center border border-black/40 rounded flex-1 hover:border-(--color-primary-active) cursor-pointer ">
                                    <span className="text-[8px] lg:text-lg">Door Delivery</span>
                                </div>
                            </label>
                            <label htmlFor="pickUp" className="group flex-1 flex justify-center items-center">
                                <input type="radio" {...register("delivery")} id="pickUp" value={"pickUp"} className="hidden" required/>
                                <div className="w-full group-has-[input:checked]:bg-(--color-primary) group-has-[input:checked]:text-white  flex flex-col p-4 justify-center items-center border border-black/40 rounded flex-1 hover:border-(--color-primary-active) cursor-pointer ">
                                    <span className="text-[8px] lg:text-lg">Pick Up</span>
                                </div>
                            </label>
                        </div>
                        <button className="bg-(--color-primary) hover:bg-(--color-primary-active) hover:text-white text-black p-4 rounded cursor-pointer">Submit</button>
                    </form>
                </div>
            </div>
        </section>
    )
}
export default Payment