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

const OrderHistoryDetail = () => {
    const [products, setProducts] = useState(null)
    const [historyOrders, setHistoryOrders] = useLocalStorage("history-order")
    const [historyOrder, setHistoryOrder] = useState(null)
    const [cart, setCart] = useState(null)
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
                setCart(historyOrder.cart)
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
                                <div className="flex flex-col gap-4 items-center h-128 p-4 overflow-y-auto">
                                    <div className="flex flex-col gap-4 p-4 w-full">
                                        <div className="flex justify-between items-center border-b border-b-black/10">
                                            <div className="flex justify-center items-center gap-4">
                                                <AiOutlineUser />
                                                <span>Fullname</span>
                                            </div>
                                                <span className="font-bold">Fullname</span>
                                        </div>
                                        <div className="flex justify-between items-center border-b border-b-black/10">
                                            <div className="flex justify-center items-center gap-4">
                                                <GoLocation />
                                                <span>Address</span>
                                            </div>
                                                <span className="font-bold">Address</span>
                                        </div>
                                        <div className="flex justify-between items-center border-b border-b-black/10">
                                            <div className="flex justify-center items-center gap-4">
                                                <BiPhone />
                                                <span>Phone</span>
                                            </div>
                                                <span className="font-bold">Phone</span>
                                        </div>
                                        <div className="flex justify-between items-center border-b border-b-black/10">
                                            <div className="flex justify-center items-center gap-4">
                                                <BiCreditCardFront />
                                                <span>Payment Method</span>
                                            </div>
                                                <span className="font-bold">Payment Method</span>
                                        </div>
                                        <div className="flex justify-between items-center border-b border-b-black/10">
                                            <div className="flex justify-center items-center gap-4">
                                                <BsTruck />
                                                <span>Shiping</span>
                                            </div>
                                                <span className="font-bold">Shiping</span>
                                        </div>
                                        <div className="flex justify-between items-center border-b border-b-black/10">
                                            <div className="flex justify-center items-center gap-4">
                                                <GrCycle />
                                                <span>Status</span>
                                            </div>
                                                <span className="font-bold">Status</span>
                                        </div>
                                        <div className="flex justify-between items-center border-b border-b-black/10">
                                            <div className="flex justify-center items-center gap-4">
                                                <span>Total Transaction</span>
                                            </div>
                                                <span className="font-bold">Total Transaction</span>
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
                                <div className="flex flex-col p-4 bg-gray-100 rounded">
                                    <div className="flex-1 flex flex-col gap-4">

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default OrderHistoryDetail