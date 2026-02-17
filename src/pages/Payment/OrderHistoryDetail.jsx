import { GrCycle } from "react-icons/gr";
import { BsTruck } from "react-icons/bs";
import { BiCreditCardFront } from "react-icons/bi";
import { BiPhone } from "react-icons/bi";
import { GoLocation } from "react-icons/go";
import { AiOutlineUser } from "react-icons/ai";
import { Link, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import ProductContext from "../../components/context/ProductContext";
import moment from "moment";
import useLocalStorage from "../../hooks/useLocalStorage"
import { CgCloseO } from "react-icons/cg";

const OrderHistoryDetail = () => {
    const [products, setProducts] = useState(null)
    const [historyOrders, setHistoryOrders] = useLocalStorage("history-order")
    const [historyOrder, setHistoryOrder] = useState(null)
    const [cartData, setCartData] = useState(null)
    const productsData = useContext(ProductContext)
    const { orderId } = useParams()
    let total = 0
    useEffect(
        () => {
            setProducts(productsData)

            if (historyOrders != null) {
                setHistoryOrder(historyOrders.find(history => parseInt(history.id) === parseInt(orderId)))
            }
            if (historyOrder != null) {
                setCartData(historyOrder.cart)
            }
        }, [productsData]
    )

    return (
        <section>
            <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="flex flex-col gap-4 col-span-1 md:col-span-2">
                    <div className="flex flex-col col-span-1 md:col-span-2 lg:flex-row gap-4 p-4">
                        <h1 className="text-4xl font-bold">Order #{(historyOrder != null ? historyOrder.id : "Loading...")}</h1>
                        <span>{(historyOrder != null ? historyOrder.orderDate : "Loading...")}</span>
                    </div>
                    <div className="flex flex-col lg:flex-row gap-4 p-4 flex-1 ">
                        <div className="flex flex-col lg:flex-row gap-4 p-4 flex-1">
                            <div className="flex-1 flex flex-col gap-4 w-full">
                                <div className="flex gap-4 items-center justify-between h-10">
                                    <h2 className="text-xl font-bold">Order Information</h2>
                                </div>
                                <div className="flex flex-col gap-4 items-center">
                                    <div className="flex flex-col gap-4 p-4 w-full">
                                        <div className="flex justify-between items-center border-b border-b-black/10 p-4">
                                            <div className="flex items-center gap-4 flex-1">
                                                <AiOutlineUser />
                                                <span>Fullname</span>
                                            </div>
                                            <span className="font-bold text-end">{(historyOrder != null ? historyOrder.orderDetail.fullname : "Loading...")}</span>
                                        </div>
                                        <div className="flex justify-between items-center border-b border-b-black/10 p-4">
                                            <div className="flex items-center gap-4 flex-1">
                                                <GoLocation />
                                                <span>Address</span>
                                            </div>
                                            <span className="font-bold text-end">{(historyOrder != null ? historyOrder.orderDetail.address : "Loading...")}</span>
                                        </div>
                                        <div className="flex justify-between items-center border-b border-b-black/10 p-4">
                                            <div className="flex items-center gap-4 flex-1">
                                                <BiPhone />
                                                <span>Phone</span>
                                            </div>
                                            <span className="font-bold text-end">{(historyOrder != null ? historyOrder.orderDetail.phone : "Loading...")}</span>
                                        </div>
                                        <div className="flex justify-between items-center border-b border-b-black/10 p-4">
                                            <div className="flex items-center gap-4 flex-1">
                                                <BiCreditCardFront />
                                                <span>Payment Method</span>
                                            </div>
                                            <span className="font-bold text-end">{"Cash"}</span>
                                        </div>
                                        <div className="flex justify-between items-center border-b border-b-black/10 p-4">
                                            <div className="flex items-center gap-4 flex-1">
                                                <BsTruck />
                                                <span>Shiping</span>
                                            </div>
                                            <span className="font-bold text-end">{(historyOrder != null ? historyOrder.orderDetail.delivery : "Loading...")}</span>
                                        </div>
                                        <div className="flex justify-between items-center border-b border-b-black/10 p-4">
                                            <div className="flex items-center gap-4 flex-1">
                                                <GrCycle />
                                                <span>Status</span>
                                            </div>
                                            <span className="font-bold text-end">
                                                {
                                                    (
                                                        historyOrder != null
                                                            ?
                                                            (
                                                                historyOrder.status === 0
                                                                    ?
                                                                    <span class="w-48 md:w-40 flex justify-center items-center font-bold bg-amber-400 text-amber-700 px-4 rounded-full">
                                                                        On Progress
                                                                    </span>
                                                                    :
                                                                    historyOrder.status === 1
                                                                    ?
                                                                    <span class="w-48 md:w-40 flex justify-center items-center font-bold bg-orange-400 text-orange-700 px-4 rounded-full">
                                                                        On Delivery
                                                                    </span>
                                                                    :
                                                                    historyOrder.status === 2
                                                                    ?
                                                                    <span class="w-48 md:w-40 flex justify-center items-center font-bold bg-green-400 text-green-700 px-4 rounded-full">
                                                                        Done
                                                                    </span>
                                                                    :
                                                                    <span class="w-48 md:w-40 flex justify-center items-center font-bold bg-red-400 text-red-700 px-4 rounded-full">
                                                                        Rejected
                                                                    </span>
                                                            )
                                                            :
                                                            "Loading..."
                                                    )
                                                }
                                            </span>
                                        </div>
                                        <div className="flex justify-between items-center border-b border-b-black/10 p-4">
                                            <div className="flex items-center gap-4 flex-1">
                                                <span>Total Transaction</span>
                                            </div>
                                            <span className="font-bold text-end">{(historyOrder != null ? "Rp." + historyOrder.total.toLocaleString("id-ID") + ",-" : "Loading...")}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col lg:flex-row gap-4 p-4 flex-1">
                            <div className="flex-1 flex flex-col gap-4 w-full">
                                <div className="flex gap-4 items-center h-10">
                                    <h2 className="text-xl font-bold">Your Order</h2>
                                </div>
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
                                                                    </div>
                                                                </div>
                                                            )
                                                        }
                                                    }
                                                )
                                                :
                                                <span className="text-black p-4 bg-gray-400 rounded w-full h-full text-center">Keranjang masih kosong !</span>
                                            :
                                            <span className="text-black">Loading...</span>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default OrderHistoryDetail