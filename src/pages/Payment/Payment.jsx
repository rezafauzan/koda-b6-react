import { CgCloseO } from "react-icons/cg";
import Input from "/src/components/Input.jsx";
import profile_icon from "/src/assets/img/Profile.svg"
import mail_icon from "/src/assets/img/mail.svg"
import phone_icon from "/src/assets/img/PhoneCall.svg"
import location_icon from "/src/assets/img/Location.svg"
import { Link, useNavigate } from "react-router-dom";
import { useContext, useEffect, useRef, useState } from "react";
import ProductContext from "../../components/context/ProductContext";
import CartContext from "../../components/context/CartContext";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup"
import moment from "moment";
import useLocalStorage from "../../hooks/useLocalStorage"
import UserContext from "../../components/context/UserContext"
import AlertContext from "../../components/context/AlertContext";
import http from "../../lib/dataFetcher";

const Payment = () => {
    const { cart } = useContext(CartContext)
    const { user } = useContext(UserContext)
    const { alert, setAlert } = useContext(AlertContext)
    const [products, setProducts] = useState([])
    const [deliveryFee, setDeliveryFee] = useState(0)
    const [historyOrder, setHistoryOrder] = useLocalStorage("history-order")
    const [paymentData, setPaymentData] = useState(null)
    const productsData = useContext(ProductContext)
    const paymentDetailForm = useRef()
    const navigator = useNavigate()
    const validator = yup.object({
        fullname: yup.string("Nama tidak valid").required("Nama harus diisi").min(4, "Nama minimal 4 karakter"),
        phone: yup.string("Nomor telepon tidak valid").required("Nomor telepon harus diisi").min(10, "Nomor telepon terlalu pendek"),
        email: yup.string("Email tidak valid").required("Email harus diisi").min(4, "Email terlalu pendek").email("Email tidak valid"),
        address: yup.string("Alamat tidak valid").required("Alamat harus diisi").min(10, "Alamat terlalu pendek minimal 10 karakter"),
        delivery: yup.string("Delivery option tidak valid").required("Delivery option harus dipilih")
    })
    const { register, handleSubmit, formState } = useForm({
        resolver: yupResolver(validator)
    })
    let total = 0
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
            cartData.data.forEach(async (cartItem) => {
                const reqProduct = await http(`/products/${cartItem.product_id}`, null, { token })
                const productData = await reqProduct.json()
                setProducts(products.push(productData.data))
                console.log(products)
            })
        }

        fetchUser()
    }, [])

    function pay() {
        let data = historyOrder || []
        if (!paymentData) {
            paymentDetailForm.current?.scrollIntoView({ behavior: "smooth" })
            setAlert(["fail", "Submit payment detail terlebih dahulu"])
        } else {
            const order = {
                id: (data.length === 0 ? 0 : data.length + 1),
                cart: cart,
                total,
                orderDate: moment().format("DD MMMM YYYY"),
                status: 0,
                orderDetail: paymentData
            }
            data.push(order)
            setHistoryOrder(data)
            setCart(null)
            window.localStorage.removeItem("cart")
            navigator("/payment/order-history")
        }

    }

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
        setPaymentData(data)
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
                                    <div className="flex flex-col gap-4 p-4 w-full">
                                        {
                                            (
                                                products != null
                                                    ?
                                                    cart != null
                                                        ?
                                                        cart.map(
                                                            (item, index) => {
                                                                if(products != null){
                                                                    console.log(products)
                                                                    const product = products.find(()=>product.id == item.product_id)
                                                                }
                                                                return (
                                                                    <Link key={"cart-item-" + index} to={"/product/" + item.product_id} className="w-full bg-gray-100 text-black hover:bg-gray-400">
                                                                        <div className="flex flex-col lg:flex-row w-full lg:h-18 items-center gap-4 p-2">
                                                                            <img src={'https://images.pexels.com/photos/14463785/pexels-photo-14463785.jpeg'} alt={item.product_id} className="w-10" />
                                                                            <div className="flex flex-col gap-4">
                                                                                <span className="flex-1 text-xs">Id Product : {item.product_id}</span>
                                                                                <div className="flex gap-4">
                                                                                    <span className="flex-1 text-xs">{item.quantity}pcs</span>
                                                                                    <span className="flex-1 text-xs">{item.size}</span>
                                                                                    <span className="flex-1 text-xs">{item.hotice}</span>
                                                                                    {/* <span className="flex-1 text-xs">{"Rp." + (item.price * item.quantity).toLocaleString("id-ID") + ",-"}</span> */}
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </Link>
                                                                )
                                                            }
                                                        )
                                                        :
                                                        <span className="text-black p-4 bg-gray-400 rounded w-full text-center">Keranjang masih kosong !</span>
                                                    :
                                                    <span className="text-black p-4 bg-gray-400 rounded w-full text-center">Loading...</span>
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
                                        {
                                            (
                                                cart != null
                                                    ?
                                                    <button className="cursor-pointer flex justify-center items-center h-10 bg-(--color-primary) rounded" onClick={pay}>Checkout</button>
                                                    :
                                                    ""
                                            )
                                        }
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
                    <div className="flex flex-col col-span-1 lg:col-span-2 lg:flex-row gap-4 p-4">
                        <h2 className="text-xl font-bold">Payment Info & Delivery</h2>
                    </div>
                    <form ref={paymentDetailForm} className="flex flex-col gap-4 p-4 flex-1" onSubmit={handleSubmit(toPayment)}>
                        <Input type="text" {...register("fullname")} labelName="Fullname" icon={profile_icon} placeholder="Enter your fullname" />
                        {formState.errors.fullname && (<span className="bg-red-400 p-4 rounded border border-red-700 text-red-700">{formState.errors.fullname.message}</span>)}
                        <Input type="text" {...register("phone")} labelName="Phone" icon={phone_icon} placeholder="Enter phone number" />
                        {formState.errors.phone && (<span className="bg-red-400 p-4 rounded border border-red-700 text-red-700">{formState.errors.phone.message}</span>)}
                        <Input type="email" {...register("email")} labelName="Email" icon={mail_icon} placeholder="Enter email address" />
                        {formState.errors.email && (<span className="bg-red-400 p-4 rounded border border-red-700 text-red-700">{formState.errors.email.message}</span>)}
                        <Input type="text" {...register("address")} labelName="Address" icon={location_icon} placeholder="Enter your address" />
                        {formState.errors.address && (<span className="bg-red-400 p-4 rounded border border-red-700 text-red-700">{formState.errors.address.message}</span>)}
                        <span className="text-lg font-bold">Choose Size</span>
                        <div className="flex gap-4 justify-center items-center">
                            <label htmlFor="dineIn" className="group flex-1 flex justify-center items-center">
                                <input type="radio" {...register("delivery")} id="dineIn" value={"dineIn"} className="hidden" required />
                                <div className="w-full group-has-[input:checked]:bg-(--color-primary) group-has-[input:checked]:text-white  flex flex-col p-4 justify-center items-center border border-black/40 rounded flex-1 hover:border-(--color-primary-active) cursor-pointer ">
                                    <span className="text-[8px] lg:text-lg">Dine In</span>
                                </div>
                            </label>
                            <label htmlFor="doorDelivery" className="group flex-1 flex justify-center items-center">
                                <input type="radio" {...register("delivery")} id="doorDelivery" value={"doorDelivery"} className="hidden" required />
                                <div className="w-full group-has-[input:checked]:bg-(--color-primary) group-has-[input:checked]:text-white  flex flex-col p-4 justify-center items-center border border-black/40 rounded flex-1 hover:border-(--color-primary-active) cursor-pointer ">
                                    <span className="text-[8px] lg:text-lg">Door Delivery</span>
                                </div>
                            </label>
                            <label htmlFor="pickUp" className="group flex-1 flex justify-center items-center">
                                <input type="radio" {...register("delivery")} id="pickUp" value={"pickUp"} className="hidden" required />
                                <div className="w-full group-has-[input:checked]:bg-(--color-primary) group-has-[input:checked]:text-white  flex flex-col p-4 justify-center items-center border border-black/40 rounded flex-1 hover:border-(--color-primary-active) cursor-pointer ">
                                    <span className="text-[8px] lg:text-lg">Pick Up</span>
                                </div>
                            </label>
                        </div>
                        {formState.errors.delivery && (<span className="bg-red-400 p-4 rounded border border-red-700 text-red-700">{formState.errors.delivery.message}</span>)}
                        {
                            (
                                cart != null
                                    ?
                                    <button className="bg-(--color-primary) hover:bg-(--color-primary-active) hover:text-white text-black p-4 rounded cursor-pointer">Submit</button>
                                    :
                                    ""
                            )
                        }
                    </form>
                </div>
            </div>
        </section>
    )
}
export default Payment