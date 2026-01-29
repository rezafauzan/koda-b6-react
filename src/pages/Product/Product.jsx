import { useContext } from "react"
import ProductCard from "../../components/ProductCard"
import { BsArrowLeft, BsArrowRight } from "react-icons/bs"
import ProductContext from "../../components/context/ProductContext"

const Hero = () => {
    return (
        <section>
            <div className="flex flex-col-reverse md:flex-row h-70 relative bg-[url('/src/assets/img/product-hero.png')] bg-cover bg-no-repeat">
                <div className="copytext-container absolute flex-1 flex items-center justify-center top-4 left-4 right-4 bottom-4">
                    <div className="copytext w-[80%] px-6 py-10 flex flex-col gap-4 text-white">
                        <h2 className="copytext-headline text-5xl">We Provide Good Coffee and Healthy Meals</h2>
                    </div>
                </div>
            </div>
        </section>
    )
}

const TodayPromo = () => {
    return (
        <section>
            <div className="flex justify-between gap-4 p-10">
                <h2 className="text-4xl">Today<span className="text-(--color-accent)">Promo</span></h2>
                <div className="carousel-navigator flex gap-4">
                    <button className="rounded-full w-10 h-10 bg-slate-300 flex justify-center items-center cursor-pointer"><BsArrowLeft className="text-black" /></button>
                    <button className="rounded-full w-10 h-10 bg-(--color-primary) flex justify-center items-center cursor-pointer"><BsArrowRight className="text-black" /></button>
                </div>
            </div>
            <div className="flex p-4 gap-4 items-center overflow-x-auto">
                <div className="coupon-card w-100 h-40 shrink-0 bg-emerald-700 px-4 rounded-xl flex justify-center items-center gap-4">
                    <div className="max-w-40 h-40">
                        <img src="/assets/img/mother-day-coupon-image.png" alt="mother_day_coupon_image" className="h-full object-contain" />
                    </div>
                    <div className="coupon-body flex flex-col gap-1 py-1">
                        <h3 className="font-bold">HAPPY MOTHER'S DAY!</h3>
                        <p>Get one of our favorite menu for free!</p>
                        <button className="text-white mt-4 text-start">Claim Coupon</button>
                    </div>
                </div>
                <div className="coupon-card w-100 h-40 shrink-0 bg-emerald-700 px-4 rounded-xl flex justify-center items-center gap-4">
                    <div className="max-w-40 h-40">
                        <img src="/assets/img/mother-day-coupon-image.png" alt="mother_day_coupon_image" className="h-full object-contain" />
                    </div>
                    <div className="coupon-body flex flex-col gap-1 py-1">
                        <h3 className="font-bold">HAPPY MOTHER'S DAY!</h3>
                        <p>Get one of our favorite menu for free!</p>
                        <button className="text-white mt-4 text-start">Claim Coupon</button>
                    </div>
                </div>
                <div className="coupon-card w-100 h-40 shrink-0 bg-emerald-700 px-4 rounded-xl flex justify-center items-center gap-4">
                    <div className="max-w-40 h-40">
                        <img src="/assets/img/mother-day-coupon-image.png" alt="mother_day_coupon_image" className="h-full object-contain" />
                    </div>
                    <div className="coupon-body flex flex-col gap-1 py-1">
                        <h3 className="font-bold">HAPPY MOTHER'S DAY!</h3>
                        <p>Get one of our favorite menu for free!</p>
                        <button className="text-white mt-4 text-start">Claim Coupon</button>
                    </div>
                </div>
                <div className="coupon-card w-100 h-40 shrink-0 bg-emerald-700 px-4 rounded-xl flex justify-center items-center gap-4">
                    <div className="max-w-40 h-40">
                        <img src="/assets/img/mother-day-coupon-image.png" alt="mother_day_coupon_image" className="h-full object-contain" />
                    </div>
                    <div className="coupon-body flex flex-col gap-1 py-1">
                        <h3 className="font-bold">HAPPY MOTHER'S DAY!</h3>
                        <p>Get one of our favorite menu for free!</p>
                        <button className="text-white mt-4 text-start">Claim Coupon</button>
                    </div>
                </div>
                <div className="coupon-card w-100 h-40 shrink-0 bg-emerald-700 px-4 rounded-xl flex justify-center items-center gap-4">
                    <div className="max-w-40 h-40">
                        <img src="/assets/img/mother-day-coupon-image.png" alt="mother_day_coupon_image" className="h-full object-contain" />
                    </div>
                    <div className="coupon-body flex flex-col gap-1 py-1">
                        <h3 className="font-bold">HAPPY MOTHER'S DAY!</h3>
                        <p>Get one of our favorite menu for free!</p>
                        <button className="text-white mt-4 text-start">Claim Coupon</button>
                    </div>
                </div>
                <div className="coupon-card w-100 h-40 shrink-0 bg-emerald-700 px-4 rounded-xl flex justify-center items-center gap-4">
                    <div className="max-w-40 h-40">
                        <img src="/assets/img/mother-day-coupon-image.png" alt="mother_day_coupon_image" className="h-full object-contain" />
                    </div>
                    <div className="coupon-body flex flex-col gap-1 py-1">
                        <h3 className="font-bold">HAPPY MOTHER'S DAY!</h3>
                        <p>Get one of our favorite menu for free!</p>
                        <button className="text-white mt-4 text-start">Claim Coupon</button>
                    </div>
                </div>
                <div className="coupon-card w-100 h-40 shrink-0 bg-yellow-700 px-4 rounded-xl flex justify-center items-center gap-4">
                    <div className="max-w-40 h-40">
                        <img src="/assets/img/father-coupon.png" alt="sunday_coupon_image" className="h-full object-contain" />
                    </div>
                    <div className="coupon-body flex flex-col gap-1 py-1">
                        <h3 className="font-bold">Get a cup of coffee for free on sunday morning</h3>
                        <p>Only at 7 to 9 AM</p>
                    </div>
                </div>
            </div>
            <div className="flex gap-1 p-10">
                <span className="rounded-full w-10 h-4 bg-(--color-primary)"></span>
                <span className="rounded-full w-4 h-4 bg-slate-400"></span>
                <span className="rounded-full w-4 h-4 bg-slate-400"></span>
                <span className="rounded-full w-4 h-4 bg-slate-400"></span>
                <span className="rounded-full w-4 h-4 bg-slate-400"></span>
                <span className="rounded-full w-4 h-4 bg-slate-400"></span>
                <span className="rounded-full w-4 h-4 bg-slate-400"></span>
            </div>
        </section>
    )
}

const ProductSection = () => {
    const productData = useContext(ProductContext)
    return (
        <section>
            <div className="flex justify-between gap-4 px-10">
                <h2 className="text-4xl">Our<span className="text-(--color-accent)">Product</span></h2>
            </div>
            <div className="flex flex-col lg:flex-row p-4 gap-4">
                <aside className="flex-4 h-fit flex flex-col items-center gap-4 bg-[#0B0909] text-white p-4 rounded lg:sticky lg:top-1">
                    <form className="flex flex-col w-full gap-4">
                        <div className="flex justify-between items-center">
                            <h3 className="text-xl">Filter</h3>
                            <button type="reset" className="text-xl">Reset Filter</button>
                        </div>

                        <label className="flex flex-col gap-4">
                            <span className="text-lg font-bold">Search</span>
                            <input type="text" name="search" placeholder="Search your product !" className="bg-white text-black p-4 rounded" />
                        </label>

                        <div id="category-filter">
                            <span className="text-lg font-bold">Category</span>
                            <div className="flex items-center gap-4">
                                <input type="checkbox" name="category" id="favorite-product" className="w-4 h-4 accent-(--color-primary)" />
                                <label className="text-white/70" htmlFor="favorite-product">Favorite Product</label>
                            </div>
                            <div className="flex items-center gap-4">
                                <input type="checkbox" name="category" id="coffee" className="w-4 h-4 accent-(--color-primary)" />
                                <label className="text-white/70" htmlFor="coffee">Coffee</label>
                            </div>
                            <div className="flex items-center gap-4">
                                <input type="checkbox" name="category" id="non-coffee" className="w-4 h-4 accent-(--color-primary)" />
                                <label className="text-white/70" htmlFor="non-coffee">Non Coffee</label>
                            </div>
                            <div className="flex items-center gap-4">
                                <input type="checkbox" name="category" id="foods" className="w-4 h-4 accent-(--color-primary)" />
                                <label className="text-white/70" htmlFor="foods">Foods</label>
                            </div>
                            <div className="flex items-center gap-4">
                                <input type="checkbox" name="category" id="add-on" className="w-4 h-4 accent-(--color-primary)" />
                                <label className="text-white/70" htmlFor="add-on">Add On</label>
                            </div>
                        </div>

                        <div id="sort-by-filter">
                            <span className="text-lg font-bold">Sort By</span>
                            <div className="flex items-center gap-4">
                                <input type="checkbox" name="sort-by" id="buy-one-get-one" className="w-4 h-4 accent-(--color-primary)" />
                                <label className="text-white/70" htmlFor="buy-one-get-one">Buy 1 get 1</label>
                            </div>
                            <div className="flex items-center gap-4">
                                <input type="checkbox" name="sort-by" id="flash-sale" className="w-4 h-4 accent-(--color-primary)" />
                                <label className="text-white/70" htmlFor="flash-sale">Flash Sale</label>
                            </div>
                            <div className="flex items-center gap-4">
                                <input type="checkbox" name="sort-by" id="birthday-package" className="w-4 h-4 accent-(--color-primary)" />
                                <label className="text-white/70" htmlFor="birthday-package">Birthday Package</label>
                            </div>
                            <div className="flex items-center gap-4">
                                <input type="checkbox" name="category" id="cheap" className="w-4 h-4 accent-(--color-primary)" />
                                <label className="text-white/70" htmlFor="cheap">Cheap</label>
                            </div>
                        </div>

                        <div id="range-price" className="flex flex-col justify-center gap-4 w-full h-10">
                            <label className="text-white/70 text-lg font-bold" htmlFor="price-range">Price Range</label>
                            <div className="relative w-full">
                                <input type="range" name="price-range" id="price-range-min" min="0" max="100000" step="1000" value="0" className="absolute accent-(--color-primary)" />
                                <input type="range" name="price-range" id="price-range-max" min="0" max="100000" step="1000" value="100000" className="absolute accent-(--color-primary)" />
                            </div>
                        </div>

                        <button type="submit" className="w-full h-10 bg-(--color-primary) rounded mt-4">Apply Filter</button>
                    </form>
                </aside>
                <div className="flex-7 grid grid-cols-1 lg:grid-cols-2 justify-center lg:justify-between gap-4 lg:px-40">
                    <ProductCard flashsale={true} />
                    <ProductCard flashsale={true} />
                    <ProductCard flashsale={true} />
                    <ProductCard flashsale={true} />
                    <ProductCard flashsale={true} />
                    <ProductCard flashsale={true} />
                    <ProductCard flashsale={true} />
                    <ProductCard flashsale={true} />
                    <ProductCard flashsale={true} />
                    <ProductCard flashsale={true} />
                    <ProductCard flashsale={true} />
                    <ProductCard flashsale={true} />
                    <ProductCard flashsale={true} />
                    <ProductCard flashsale={true} />
                    <ProductCard flashsale={true} />
                    <ProductCard flashsale={true} />
                    <div className="flex col-span-1 lg:col-span-2 justify-evenly items-center">
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
const Product = () => {
    return (
        <>
            <Hero />
            <TodayPromo />
            <ProductSection />
        </>
    )
}
export default Product