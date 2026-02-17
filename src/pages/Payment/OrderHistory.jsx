import { BsFillChatLeftTextFill } from "react-icons/bs";
import Input from "/src/components/Input.jsx";
import { Link } from "react-router-dom";
import useLocalStorage from "../../hooks/useLocalStorage"
import { useContext, useRef, useState } from "react";
import ProductContext from "../../components/context/ProductContext"
import { useForm } from "react-hook-form";
import moment from "moment";

const Payment = () => {
    const [histories, setHistories] = useLocalStorage("history-order")
    const [historiesOrder, setHistoriesOrder] = useState(histories)
    const productsData = useContext(ProductContext)
    const { register, handleSubmit } = useForm(
        {
            defaultValues: {
                status: "0"
            }
        }
    )
    const formFilter = useRef()

    function filterHistoryOrder({ status, date }) {
        setHistoriesOrder(histories)
        let filteredHistories = null
        if (status > -1) {
            filteredHistories = histories.filter(history => history.status === parseInt(status))
        }
        if (date.length > 0) {
            filteredHistories = filteredHistories.filter(history => moment(history.orderDate).format("DD MMMM YYYY").trim() === moment(date.replaceAll("-", " "), "YYYY-MM-DD").format("DD MMMM YYYY").trim())
        }
        if (filteredHistories != null) {
            setHistoriesOrder(filteredHistories)
        }
    }

    return (
        <section>
            <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="flex flex-col gap-4 col-span-1 md:col-span-2">
                    <div className="flex flex-col col-span-1 md:col-span-2 lg:flex-row gap-4 p-4">
                        <h1 className="text-4xl font-bold">History Order</h1>
                    </div>
                    <div className="flex flex-col lg:flex-row gap-4 p-4 flex-1 ">
                        <div className="flex flex-col lg:flex-row gap-4 p-4 flex-2">
                            <div className="flex-1 flex flex-col gap-4 w-full">
                                <div className="flex flex-col gap-4">
                                    <form ref={formFilter} className="flex flex-col md:flex-row gap-4 justify-between items-center" onSubmit={handleSubmit(filterHistoryOrder)} onChange={() => { formFilter.current.requestSubmit() }}>
                                        <div className="flex flex-3 gap-4 justify-center items-center bg-gray-100 rounded">
                                            <label htmlFor="onProgress" className="group flex-1 flex justify-center items-center">
                                                <input type="radio" {...register("status")} id="onProgress" value={0} className="hidden" />
                                                <div className="w-full group-has-[input:checked]:bg-gray-400 group-has-[input:checked]:text-white flex flex-col p-4 justify-center items-center border border-black/40 rounded flex-1 hover:border-gray-400 hover:bg-gray-400 hover:text-white cursor-pointer">
                                                    <span>On Progress</span>
                                                </div>
                                            </label>
                                            <label htmlFor="sendingGoods" className="group flex-1 flex justify-center items-center">
                                                <input type="radio" {...register("status")} id="sendingGoods" value={1} className="hidden" />
                                                <div className="w-full group-has-[input:checked]:bg-gray-400 group-has-[input:checked]:text-white flex flex-col p-4 justify-center items-center border border-black/40 rounded flex-1 hover:border-gray-400 hover:bg-gray-400 hover:text-white cursor-pointer">
                                                    <span>Sending Goods</span>
                                                </div>
                                            </label>
                                            <label htmlFor="finishOrder" className="group flex-1 flex justify-center items-center">
                                                <input type="radio" {...register("status")} id="finishOrder" value={2} className="hidden" />
                                                <div className="w-full group-has-[input:checked]:bg-gray-400 group-has-[input:checked]:text-white flex flex-col p-4 justify-center items-center border border-black/40 rounded flex-1 hover:border-gray-400 hover:bg-gray-400 hover:text-white cursor-pointer">
                                                    <span>Finish Order</span>
                                                </div>
                                            </label>
                                        </div>
                                        <div className="flex flex-1 gap-4 justify-center items-center">
                                            <Input type="date" {...register("date")} labelName="orderByDate" label={false} className="w-full" />
                                        </div>
                                    </form>
                                </div>
                                <div className="flex flex-col w-full gap-4 items-center h-128 p-4 overflow-y-auto">
                                    <div className="flex-1 w-full flex flex-col gap-4">
                                        {
                                            (
                                                productsData != null
                                                    ?
                                                    historiesOrder.length > 0
                                                        ?
                                                        historiesOrder.map(
                                                            history => {
                                                                return (
                                                                    <div key={"history-item-"+history.id} className="w-full h-fit md:h-45 flex flex-col md:flex-row justify-center md:justify-start items-center md:items-start text-center md:text-start rounded overflow-hidden bg-gray-100 p-4">
                                                                        <div className="overflow-hidden flex-1 h-full">
                                                                            <img src={productsData[parseInt(history.cart[0].productId)].images[0]} alt={productsData[parseInt(history.cart[0].productId)].name} className="h-full" />
                                                                        </div>
                                                                        <div className="h-fit flex flex-col md:flex-row gap-4 p-4 rounded flex-3">
                                                                            <div className="flex flex-col gap-4 text-[14px]">
                                                                                <h4>No. Order</h4>
                                                                                <span className="font-bold">#{history.id}</span>
                                                                                <Link to={"/payment/order/" + history.id} className="text-(--color-primary) underline">Views Order Detail</Link>
                                                                            </div>
                                                                            <div className="flex flex-col gap-4 text-[14px]">
                                                                                <h4>Date</h4>
                                                                                <span className="font-bold">{history.orderDate}</span>
                                                                            </div>
                                                                            <div className="flex flex-col gap-4 text-[14px]">
                                                                                <h4>Total</h4>
                                                                                <span className="font-bold">{"Rp." + history.total + ",-"}</span>
                                                                            </div>
                                                                            <div className="flex flex-col gap-4 text-[14px]">
                                                                                <h4>Status</h4>
                                                                                {
                                                                                    (
                                                                                        history.status === 0
                                                                                            ?
                                                                                            <span className="w-48 md:w-40 flex justify-center items-center font-bold bg-amber-400 text-amber-700 px-4 rounded-full">On Progress</span>
                                                                                            :
                                                                                            history.status === 1
                                                                                                ?
                                                                                                <span className="w-48 md:w-40 flex justify-center items-center font-bold bg-blue-400 text-blue-700 px-4 rounded-full">On Delivery</span>
                                                                                                :
                                                                                                history.status === 2
                                                                                                    ?
                                                                                                    <span className="w-48 md:w-40 flex justify-center items-center font-bold bg-green-400 text-green-700 px-4 rounded-full">Done</span>
                                                                                                    :
                                                                                                    ""
                                                                                    )
                                                                                }
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                )
                                                            }
                                                        )
                                                        :
                                                        <span className="text-black p-4 bg-gray-400 rounded w-full text-center">Belum ada pesanan!</span>
                                                    :
                                                    "Loading..."
                                            )
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col lg:flex-row gap-4 p-4 flex-1">
                            <div className="flex-1 flex flex-col gap-4 w-full">
                                <div className="flex flex-col p-4 bg-gray-100 rounded">
                                    <div className="flex-1 flex flex-col gap-4">
                                        <div className="flex flex-col gap-4">
                                            <div className="bg-black rounded-full w-10 h-10 flex justify-center items-center">
                                                <BsFillChatLeftTextFill className="text-(--color-primary) w-4 h-4" />
                                            </div>
                                            <h2 className="text-xl font-bold">Send Us Message</h2>
                                            <p>if your unable to find answer or find your product quickly please describe your problem and tell us. we will give you solution</p>
                                            <button type="button" className="flex justify-center items-center h-10 bg-(--color-primary) rounded">Send Message</button>
                                        </div>
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
export default Payment