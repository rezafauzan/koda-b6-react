import { BsArrowRight, BsFillChatLeftTextFill } from "react-icons/bs";
import Input from "/src/components/Input.jsx";
import { Link } from "react-router-dom";

const Payment = () => {
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
                                <div className="flex flex-col gap-4">
                                    <div className="flex-1 flex flex-col gap-4">
                                        <div className="w-full h-fit md:h-45 flex flex-col md:flex-row justify-center md:justify-start items-center md:items-start text-center md:text-start rounded overflow-hidden bg-gray-100 p-4">
                                            <div className="overflow-hidden flex-1 h-full">
                                                <img src="https://placehold.co/1024x1024" alt="Product_Name" className="h-full" />
                                            </div>
                                            <div className="h-fit flex flex-col md:flex-row gap-4 p-4 rounded flex-3">
                                                <div className="flex flex-col gap-4">
                                                    <h4>No. Order</h4>
                                                    <span className="font-bold">{"#" + "01234-56789"}</span>
                                                    <Link to={"/order/01234-56789"} className="text-(--color-primary) underline">Views Order Detail</Link>
                                                </div>
                                                <div className="flex flex-col gap-4">
                                                    <h4>Date</h4>
                                                    <span className="font-bold">2 February 2026</span>
                                                </div>
                                                <div className="flex flex-col gap-4">
                                                    <h4>Total</h4>
                                                    <span className="font-bold">{"Rp." + 40000 + ",-"}</span>
                                                </div>
                                                <div className="flex flex-col gap-4">
                                                    <h4>Status</h4>
                                                    <span className="w-48 md:w-40 flex justify-center items-center font-bold bg-amber-400 text-amber-700 px-4 rounded-full">On Progress</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="w-full h-fit md:h-45 flex flex-col md:flex-row justify-center md:justify-start items-center md:items-start text-center md:text-start rounded overflow-hidden bg-gray-100 p-4">
                                            <div className="overflow-hidden flex-1 h-full">
                                                <img src="https://placehold.co/1024x1024" alt="Product_Name" className="h-full" />
                                            </div>
                                            <div className="h-fit flex flex-col md:flex-row gap-4 p-4 rounded flex-3">
                                                <div className="flex flex-col gap-4">
                                                    <h4>No. Order</h4>
                                                    <span className="font-bold">{"#" + "01234-56789"}</span>
                                                    <Link to={"/order/01234-56789"} className="text-(--color-primary) underline">Views Order Detail</Link>
                                                </div>
                                                <div className="flex flex-col gap-4">
                                                    <h4>Date</h4>
                                                    <span className="font-bold">2 February 2026</span>
                                                </div>
                                                <div className="flex flex-col gap-4">
                                                    <h4>Total</h4>
                                                    <span className="font-bold">{"Rp." + 40000 + ",-"}</span>
                                                </div>
                                                <div className="flex flex-col gap-4">
                                                    <h4>Status</h4>
                                                    <span className="w-48 md:w-40 flex justify-center items-center font-bold bg-amber-400 text-amber-700 px-4 rounded-full">On Progress</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="w-full h-fit md:h-45 flex flex-col md:flex-row justify-center md:justify-start items-center md:items-start text-center md:text-start rounded overflow-hidden bg-gray-100 p-4">
                                            <div className="overflow-hidden flex-1 h-full">
                                                <img src="https://placehold.co/1024x1024" alt="Product_Name" className="h-full" />
                                            </div>
                                            <div className="h-fit flex flex-col md:flex-row gap-4 p-4 rounded flex-3">
                                                <div className="flex flex-col gap-4">
                                                    <h4>No. Order</h4>
                                                    <span className="font-bold">{"#" + "01234-56789"}</span>
                                                    <Link to={"/order/01234-56789"} className="text-(--color-primary) underline">Views Order Detail</Link>
                                                </div>
                                                <div className="flex flex-col gap-4">
                                                    <h4>Date</h4>
                                                    <span className="font-bold">2 February 2026</span>
                                                </div>
                                                <div className="flex flex-col gap-4">
                                                    <h4>Total</h4>
                                                    <span className="font-bold">{"Rp." + 40000 + ",-"}</span>
                                                </div>
                                                <div className="flex flex-col gap-4">
                                                    <h4>Status</h4>
                                                    <span className="w-48 md:w-40 flex justify-center items-center font-bold bg-orange-200 text-orange-400 px-4 rounded-full">Sending Goods</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="w-full h-fit md:h-45 flex flex-col md:flex-row justify-center md:justify-start items-center md:items-start text-center md:text-start rounded overflow-hidden bg-gray-100 p-4">
                                            <div className="overflow-hidden flex-1 h-full">
                                                <img src="https://placehold.co/1024x1024" alt="Product_Name" className="h-full" />
                                            </div>
                                            <div className="h-fit flex flex-col md:flex-row gap-4 p-4 rounded flex-3">
                                                <div className="flex flex-col gap-4">
                                                    <h4>No. Order</h4>
                                                    <span className="font-bold">{"#" + "01234-56789"}</span>
                                                    <Link to={"/order/01234-56789"} className="text-(--color-primary) underline">Views Order Detail</Link>
                                                </div>
                                                <div className="flex flex-col gap-4">
                                                    <h4>Date</h4>
                                                    <span className="font-bold">2 February 2026</span>
                                                </div>
                                                <div className="flex flex-col gap-4">
                                                    <h4>Total</h4>
                                                    <span className="font-bold">{"Rp." + 40000 + ",-"}</span>
                                                </div>
                                                <div className="flex flex-col gap-4">
                                                    <h4>Status</h4>
                                                    <span className="w-48 md:w-40 flex justify-center items-center font-bold bg-green-400 text-green-700 px-4 rounded-full">Finished Order</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex justify-evenly items-center">
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