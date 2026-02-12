import { BsFillChatLeftTextFill } from "react-icons/bs";
import Input from "/src/components/Input.jsx";
import { Link } from "react-router-dom";
import useLocalStorage from "../../hooks/useLocalStorage"
import { useContext } from "react";
import ProductContext from "../../components/context/ProductContext"

const Payment = () => {
    const [histories, setHistories] = useLocalStorage("history-order")
    const productsData = useContext(ProductContext)
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
                                    <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
                                        <div className="flex flex-3 gap-4 justify-center items-center bg-gray-100 rounded">
                                            <label htmlFor="onProgress" className="group flex-1 flex justify-center items-center rounded">
                                                <input type="radio" labelName="order" id="onProgress" className="hidden" />
                                                <div className="w-full group-has-[input:checked]:bg-gray-400 flex flex-col p-4 justify-center items-center rounded flex-1 hover:border-(--color-primary-active) cursor-pointer ">
                                                    <span>On Progress</span>
                                                </div>
                                            </label>
                                            <label htmlFor="sendingGoods" className="group flex-1 flex justify-center items-cente roundedr">
                                                <input type="radio" labelName="order" id="sendingGoods" className="hidden" />
                                                <div className="w-full group-has-[input:checked]:bg-gray-400 flex flex-col p-4 justify-center items-center rounded flex-1 hover:border-(--color-primary-active) cursor-pointer ">
                                                    <span>Sending Goods</span>
                                                </div>
                                            </label>
                                            <label htmlFor="finishOrder" className="group flex-1 flex justify-center items-center rounded">
                                                <input type="radio" labelName="order" id="finishOrder" className="hidden" />
                                                <div className="w-full group-has-[input:checked]:bg-gray-400 flex flex-col p-4 justify-center items-center rounded flex-1 hover:border-(--color-primary-active) cursor-pointer ">
                                                    <span>Finish Order</span>
                                                </div>
                                            </label>
                                        </div>
                                        <div className="flex flex-1 gap-4 justify-center items-center">
                                            <Input type="date" labelName="orderByDate" label={false} className="w-full" />
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col w-full gap-4 items-center h-128 p-4 overflow-y-auto">
                                    <div className="flex-1 w-full flex flex-col gap-4">
                                        {
                                            (
                                                productsData != null
                                                    ?
                                                    histories != null
                                                        ?
                                                        histories.map(
                                                            history => {
                                                                return (
                                                                    <div className="w-full h-fit md:h-45 flex flex-col md:flex-row justify-center md:justify-start items-center md:items-start text-center md:text-start rounded overflow-hidden bg-gray-100 p-4">
                                                                        <div className="overflow-hidden flex-1 h-full">
                                                                            <img src={productsData[parseInt(history.cart[0].productId)].images[0]} alt={productsData[parseInt(history.cart[0].productId)].name} className="h-full" />
                                                                        </div>
                                                                        <div className="h-fit flex flex-col md:flex-row gap-4 p-4 rounded flex-3">
                                                                            <div className="flex flex-col gap-4">
                                                                                <h4>No. Order</h4>
                                                                                <span className="font-bold">#{history.id}</span>
                                                                                <Link to={"/order/" + history.id} className="text-(--color-primary) underline">Views Order Detail</Link>
                                                                            </div>
                                                                            <div className="flex flex-col gap-4">
                                                                                <h4>Date</h4>
                                                                                <span className="font-bold">{history.orderDate}</span>
                                                                            </div>
                                                                            <div className="flex flex-col gap-4">
                                                                                <h4>Total</h4>
                                                                                <span className="font-bold">{"Rp." + history.total + ",-"}</span>
                                                                            </div>
                                                                            <div className="flex flex-col gap-4">
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