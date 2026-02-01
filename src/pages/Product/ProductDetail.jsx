import { useContext } from "react";
import { BsArrowRight, BsHandThumbsUp } from "react-icons/bs";
import { BsCart3 } from "react-icons/bs"
import ProductCard from "../../components/ProductCard";
import { useParams } from "react-router-dom";

const OtherProducts = () => {
    // const productData = useContext(ProductContext)
    return (
        <section>
            <div className="flex justify-between gap-4 px-10">
                <h2 className="text-4xl">Recommendation <span className="text-(--color-accent)">For You</span></h2>
            </div>
            <div className="flex flex-col lg:flex-row p-4 gap-4 w-full justify-center items-center">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center lg:justify-between gap-4 px-16 lg:px-4">
                    <ProductCard flashsale={true} discount={10/100}/>
                    <ProductCard/>
                    <ProductCard flashsale={true} discount={10/100}/>
                    <ProductCard flashsale={true} discount={10/100}/>
                    <ProductCard flashsale={true} discount={10/100}/>
                    <ProductCard/>
                    <ProductCard flashsale={true} discount={10/100}/>
                    <ProductCard flashsale={true} discount={10/100}/>
                    <ProductCard flashsale={true} discount={10/100}/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard flashsale={true} discount={10/100}/>
                    <ProductCard/>
                    <ProductCard flashsale={true} discount={10/100}/>
                    <ProductCard flashsale={true} discount={10/100}/>
                    <ProductCard/>
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
    const {productId} = useParams()
    console.log(productId)
    return (
        <>
            <section>
                <div className="flex flex-col lg:flex-row gap-4 p-4">
                    <div className="flex-1 grid grid-cols-3 gap-4">
                        <img src="https://placehold.co/1024x1024" alt="Product_Name" className="col-span-3" />
                        <img src="https://placehold.co/1024x1024" alt="Product_Name" />
                        <img src="https://placehold.co/1024x1024" alt="Product_Name" />
                        <img src="https://placehold.co/1024x1024" alt="Product_Name" />
                    </div>
                    <div className="flex-1 flex flex-col gap-4">
                        {/* {(flashsale ? <div className="w-fit h-4 p-4 text-white bg-red-700 absolute top-4 left-4 flex flex-col justify-center items-center rounded-full"><span>Flash Sale</span></div> : '')} */}
                        <div className="w-fit h-4 p-4 text-white bg-red-700 flex flex-col justify-center items-center rounded-full">
                            <span>Flash Sale</span>
                        </div>
                        <h3 className="text-xl font-bold">Hazzelnut Latte</h3>
                        <div className="flex items-center gap-4">
                            <span className="line-through text-red-700 text-xs">Rp.1000,-</span>
                            <span className="text-xl bold text-(--color-primary)">Rp.22000,-</span>
                        </div>
                        <div className="flex gap-4">
                            <img src="/src/assets/img/star.svg" alt="star_icon" />
                            <img src="/src/assets/img/star.svg" alt="star_icon" />
                            <img src="/src/assets/img/star.svg" alt="star_icon" />
                            <img src="/src/assets/img/star.svg" alt="star_icon" />
                            <span>4.0</span>
                        </div>
                        <div className="flex items-center gap-4">
                            <span>18 Review | Recommendation</span>
                            <button className="cursor-pointer">
                                <BsHandThumbsUp className="text-(--color-primary)" />
                            </button>
                        </div>
                        <p>You can explore the menu that we provide with fun and have their own taste and make your day better.</p>
                        <div className="flex items-center p-4">
                            <button className="w-18 px-4 py-2 border border-(--color-primary) hover:bg-(--color-primary-active) rounded flex justify-center items-center cursor-pointer">+</button>
                            {/* <input type="number" {...register("quantity")} value={1} id="quantity" disabled className="text-center"/> */}
                            <input type="number" id="quantity" value={9999} disabled className="text-end w-18" />
                            <button className="w-18 px-4 py-2 bg-(--color-primary) hover:bg-(--color-primary-active) rounded flex justify-center items-center cursor-pointer">-</button>
                        </div>
                        <span className="text-lg font-bold">Choose Size</span>
                        <div className="flex gap-4 justify-center items-center">
                            <label htmlFor="reguler" className="group flex-1 flex justify-center items-center">
                                <input type="radio" name="size" id="reguler" className="hidden" />
                                <div className="w-full group-has-[input:checked]:border-amber-400 flex flex-col p-4 justify-center items-center border border-black/40 rounded flex-1 hover:border-(--color-primary-active) cursor-pointer ">
                                <span>Reguler</span>
                                </div>
                            </label>
                            <label htmlFor="medium" className="group flex-1 flex justify-center items-center">
                                <input type="radio" name="size" id="medium" className="hidden" />
                                <div className="w-full group-has-[input:checked]:border-amber-400 flex flex-col p-4 justify-center items-center border border-black/40 rounded flex-1 hover:border-(--color-primary-active) cursor-pointer ">
                                <span>Medium</span>
                                </div>
                            </label>
                            <label htmlFor="large" className="group flex-1 flex justify-center items-center">
                                <input type="radio" name="size" id="large" className="hidden" />
                                <div className="w-full group-has-[input:checked]:border-amber-400 flex flex-col p-4 justify-center items-center border border-black/40 rounded flex-1 hover:border-(--color-primary-active) cursor-pointer ">
                                <span>Large</span>
                                </div>
                            </label>
                        </div>
                        <span className="text-lg font-bold">Hot/Ice</span>
                        <div className="flex gap-4 justify-center items-center">
                            <label htmlFor="hot" className="group flex-1 flex justify-center items-center">
                                <input type="radio" name="hotice" id="hot" className="hidden" />
                                <div className="w-full group-has-[input:checked]:border-amber-400 flex flex-col p-4 justify-center items-center border border-black/40 rounded flex-1 hover:border-(--color-primary-active) cursor-pointer ">
                                <span>Hot</span>
                                </div>
                            </label>
                            <label htmlFor="ice" className="group flex-1 flex justify-center items-center">
                                <input type="radio" name="hotice" id="ice" className="hidden" />
                                <div className="w-full group-has-[input:checked]:border-amber-400 flex flex-col p-4 justify-center items-center border border-black/40 rounded flex-1 hover:border-(--color-primary-active) cursor-pointer ">
                                <span>Ice</span>
                                </div>
                            </label>
                        </div>
                        <div className="flex flex-col md:flex-row gap-4">
                            <a href="/payment" className="flex-4 px-4 py-2 bg-(--color-primary) hover:bg-(--color-primary-active) rounded flex justify-center items-center cursor-pointer">Buy</a>
                            <button className="px-4 py-2 border rounded flex-1 flex justify-center items-center cursor-pointer text-(--color-primary) border-(--color-primary) hover:text-(--color-primary-active) hover:border-(--color-primary-active)">
                                <BsCart3 /> Add to cart
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            <OtherProducts />
        </>

    )
}

export default ProductDetail