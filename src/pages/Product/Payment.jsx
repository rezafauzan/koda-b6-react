import { CgCloseO } from "react-icons/cg";
const Payment = () => {
    return (
        <section>
            <div className="flex flex-col gap-4">
                <div className="flex flex-col col-span-1 md:col-span-2 lg:flex-row gap-4 p-4">
                    <h1>Payment Details</h1>
                </div>
                <div className="flex flex-col lg:flex-row gap-4 p-4 flex-1 ">
                    <div className="flex flex-col lg:flex-row gap-4 p-4 flex-1">
                        <div className="flex-1 flex flex-col gap-4 w-full">
                            <div className="flex gap-4 items-center justify-between h-10">
                                <h2>Your Order</h2>
                                <button className="bg-(--color-primary) p-2 w-40 rounded">+ add menu</button>
                            </div>
                            <div className="flex flex-col gap-4 items-center justify-center">
                                <div className="flex-1 flex flex-col gap-4">
                                    <div className="w-full flex flex-col md:flex-row rounded overflow-hidden bg-gray-100 px-4 relative">
                                        {/* {(flashsale ? : '')} */}
                                        <div className="overflow-hidden flex-1 h-full">
                                            <img src="https://placehold.co/1024x1024" alt="Product_Name" className="h-full" />
                                        </div>
                                        <div className="h-fit flex flex-col gap-4 left-4 right-4 bottom-0 p-4 rounded flex-3">
                                            <div className="w-fit h-4 p-4 text-white bg-red-700 top-4 left-4 flex flex-col justify-center items-center rounded-full"><span>Flash Sale</span></div>
                                            <h3 className="text-xl font-bold">Hazzelnut Latte</h3>
                                            <span className="text-black/70">2pcs | Regular | Ice | Dine In</span>
                                            {/* <span className="text-xl bold text-(--color-primary)">{(flashsale ? <span className="text-red-700 line-through text-xs">Rp.22000,-</span> : "")} Rp.{22000 - (22000 * discount)},-</span> */}
                                            <span className="text-xl bold text-(--color-primary)">{(true ? <span className="text-red-700 line-through text-xs">Rp.22000,-</span> : "")} Rp.{22000 - (22000 * 10 / 100)},-</span>
                                            <button className="absolute flex justify-center items-center top-0 right-4 md:top-[50%] md:translate-y-[-50%] md:right-4 md:bottom-[50%] h-10 w-10 cursor-pointer"><CgCloseO className="h-10 w-10 text-red-700" /></button>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex-1 flex flex-col gap-4">
                                    <div className="w-full flex flex-col md:flex-row rounded overflow-hidden bg-gray-100 px-4 relative">
                                        {/* {(flashsale ? : '')} */}
                                        <div className="overflow-hidden flex-1 h-full">
                                            <img src="https://placehold.co/1024x1024" alt="Product_Name" className="h-full" />
                                        </div>
                                        <div className="h-fit flex flex-col gap-4 left-4 right-4 bottom-0 p-4 rounded flex-3">
                                            <div className="w-fit h-4 p-4 text-white bg-red-700 top-4 left-4 flex flex-col justify-center items-center rounded-full"><span>Flash Sale</span></div>
                                            <h3 className="text-xl font-bold">Hazzelnut Latte</h3>
                                            <span className="text-black/70">2pcs | Regular | Ice | Dine In</span>
                                            {/* <span className="text-xl bold text-(--color-primary)">{(flashsale ? <span className="text-red-700 line-through text-xs">Rp.22000,-</span> : "")} Rp.{22000 - (22000 * discount)},-</span> */}
                                            <span className="text-xl bold text-(--color-primary)">{(true ? <span className="text-red-700 line-through text-xs">Rp.22000,-</span> : "")} Rp.{22000 - (22000 * 10 / 100)},-</span>
                                            <button className="absolute flex justify-center items-center top-0 right-4 md:top-[50%] md:translate-y-[-50%] md:right-4 md:bottom-[50%] h-10 w-10 cursor-pointer"><CgCloseO className="h-10 w-10 text-red-700" /></button>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex-1 flex flex-col gap-4">
                                    <div className="w-full flex flex-col md:flex-row rounded overflow-hidden bg-gray-100 px-4 relative">
                                        {/* {(flashsale ? : '')} */}
                                        <div className="overflow-hidden flex-1 h-full">
                                            <img src="https://placehold.co/1024x1024" alt="Product_Name" className="h-full" />
                                        </div>
                                        <div className="h-fit flex flex-col gap-4 left-4 right-4 bottom-0 p-4 rounded flex-3">
                                            <div className="w-fit h-4 p-4 text-white bg-red-700 top-4 left-4 flex flex-col justify-center items-center rounded-full"><span>Flash Sale</span></div>
                                            <h3 className="text-xl font-bold">Hazzelnut Latte</h3>
                                            <span className="text-black/70">2pcs | Regular | Ice | Dine In</span>
                                            {/* <span className="text-xl bold text-(--color-primary)">{(flashsale ? <span className="text-red-700 line-through text-xs">Rp.22000,-</span> : "")} Rp.{22000 - (22000 * discount)},-</span> */}
                                            <span className="text-xl bold text-(--color-primary)">{(true ? <span className="text-red-700 line-through text-xs">Rp.22000,-</span> : "")} Rp.{22000 - (22000 * 10 / 100)},-</span>
                                            <button className="absolute flex justify-center items-center top-0 right-4 md:top-[50%] md:translate-y-[-50%] md:right-4 md:bottom-[50%] h-10 w-10 cursor-pointer"><CgCloseO className="h-10 w-10 text-red-700" /></button>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex-1 flex flex-col gap-4">
                                    <div className="w-full flex flex-col md:flex-row rounded overflow-hidden bg-gray-100 px-4 relative">
                                        {/* {(flashsale ? : '')} */}
                                        <div className="overflow-hidden flex-1 h-full">
                                            <img src="https://placehold.co/1024x1024" alt="Product_Name" className="h-full" />
                                        </div>
                                        <div className="h-fit flex flex-col gap-4 left-4 right-4 bottom-0 p-4 rounded flex-3">
                                            <div className="w-fit h-4 p-4 text-white bg-red-700 top-4 left-4 flex flex-col justify-center items-center rounded-full"><span>Flash Sale</span></div>
                                            <h3 className="text-xl font-bold">Hazzelnut Latte</h3>
                                            <span className="text-black/70">2pcs | Regular | Ice | Dine In</span>
                                            {/* <span className="text-xl bold text-(--color-primary)">{(flashsale ? <span className="text-red-700 line-through text-xs">Rp.22000,-</span> : "")} Rp.{22000 - (22000 * discount)},-</span> */}
                                            <span className="text-xl bold text-(--color-primary)">{(true ? <span className="text-red-700 line-through text-xs">Rp.22000,-</span> : "")} Rp.{22000 - (22000 * 10 / 100)},-</span>
                                            <button className="absolute flex justify-center items-center top-0 right-4 md:top-[50%] md:translate-y-[-50%] md:right-4 md:bottom-[50%] h-10 w-10 cursor-pointer"><CgCloseO className="h-10 w-10 text-red-700" /></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col lg:flex-row gap-4 p-4 flex-1">
                        <div className="flex-1 flex flex-col gap-4 w-full">
                            <div className="flex gap-4 items-center h-10">
                                <h2>Total</h2>
                            </div>
                            <div className="flex flex-col p-4 bg-gray-100 rounded">
                                <div className="flex-1 flex flex-col gap-4">
                                    <div className="flex justify-between items-center">
                                        <span>Order</span>
                                        <span>{"Rp." + (40000) + ",-"}</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span>Delivery</span>
                                        <span>{"Rp." + (0) + ",-"}</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span>Tax</span>
                                        <span>{"Rp." + (40000 * 10/100) + ",-"}</span>
                                    </div>
                                    <hr />
                                    <div className="flex justify-between items-center">
                                        <span>Sub Total</span>
                                        <span>{"Rp." + (40000 - (40000 * 10/100)) + ",-"}</span>
                                    </div>
                                    <button type="button" className="flex justify-center items-center h-10 bg-(--color-primary) rounded">Checkout</button>
                                    <div className="flex flex-col gap-4">
                                        <span>We Accept</span>
                                        <div className="flex gap-4">
                                            <div className="flex-1"><img src="https://placehold.co/100x40" alt="payment_method1"/></div>
                                            <div className="flex-1"><img src="https://placehold.co/100x40" alt="payment_method1"/></div>
                                            <div className="flex-1"><img src="https://placehold.co/100x40" alt="payment_method1"/></div>
                                            <div className="flex-1"><img src="https://placehold.co/100x40" alt="payment_method1"/></div>
                                            <div className="flex-1"><img src="https://placehold.co/100x40" alt="payment_method1"/></div>
                                            <div className="flex-1"><img src="https://placehold.co/100x40" alt="payment_method1"/></div>
                                        </div>
                                        <span className="text-black/70">*Get Discount if you pay with Bank Central Asia</span>
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