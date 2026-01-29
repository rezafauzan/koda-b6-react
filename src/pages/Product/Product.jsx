import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"
import { BsArrowLeft, BsArrowRight } from "react-icons/bs"

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
                <div class="coupon-card w-100 h-40 shrink-0 bg-emerald-700 px-4 rounded-xl flex justify-center items-center gap-4">
                    <div className="max-w-40 h-40">
                        <img src="/assets/img/mother-day-coupon-image.png" alt="mother_day_coupon_image" className="h-full object-contain" />
                    </div>
                    <div class="coupon-body flex flex-col gap-1 py-1">
                        <h3 className="font-bold">HAPPY MOTHER'S DAY!</h3>
                        <p>Get one of our favorite menu for free!</p>
                        <button className="text-white mt-4 text-start">Claim Coupon</button>
                    </div>
                </div>
                <div class="coupon-card w-100 h-40 shrink-0 bg-emerald-700 px-4 rounded-xl flex justify-center items-center gap-4">
                    <div className="max-w-40 h-40">
                        <img src="/assets/img/mother-day-coupon-image.png" alt="mother_day_coupon_image" className="h-full object-contain" />
                    </div>
                    <div class="coupon-body flex flex-col gap-1 py-1">
                        <h3 className="font-bold">HAPPY MOTHER'S DAY!</h3>
                        <p>Get one of our favorite menu for free!</p>
                        <button className="text-white mt-4 text-start">Claim Coupon</button>
                    </div>
                </div>
                <div class="coupon-card w-100 h-40 shrink-0 bg-emerald-700 px-4 rounded-xl flex justify-center items-center gap-4">
                    <div className="max-w-40 h-40">
                        <img src="/assets/img/mother-day-coupon-image.png" alt="mother_day_coupon_image" className="h-full object-contain" />
                    </div>
                    <div class="coupon-body flex flex-col gap-1 py-1">
                        <h3 className="font-bold">HAPPY MOTHER'S DAY!</h3>
                        <p>Get one of our favorite menu for free!</p>
                        <button className="text-white mt-4 text-start">Claim Coupon</button>
                    </div>
                </div>
                <div class="coupon-card w-100 h-40 shrink-0 bg-emerald-700 px-4 rounded-xl flex justify-center items-center gap-4">
                    <div className="max-w-40 h-40">
                        <img src="/assets/img/mother-day-coupon-image.png" alt="mother_day_coupon_image" className="h-full object-contain" />
                    </div>
                    <div class="coupon-body flex flex-col gap-1 py-1">
                        <h3 className="font-bold">HAPPY MOTHER'S DAY!</h3>
                        <p>Get one of our favorite menu for free!</p>
                        <button className="text-white mt-4 text-start">Claim Coupon</button>
                    </div>
                </div>
                <div class="coupon-card w-100 h-40 shrink-0 bg-emerald-700 px-4 rounded-xl flex justify-center items-center gap-4">
                    <div className="max-w-40 h-40">
                        <img src="/assets/img/mother-day-coupon-image.png" alt="mother_day_coupon_image" className="h-full object-contain" />
                    </div>
                    <div class="coupon-body flex flex-col gap-1 py-1">
                        <h3 className="font-bold">HAPPY MOTHER'S DAY!</h3>
                        <p>Get one of our favorite menu for free!</p>
                        <button className="text-white mt-4 text-start">Claim Coupon</button>
                    </div>
                </div>
                <div class="coupon-card w-100 h-40 shrink-0 bg-emerald-700 px-4 rounded-xl flex justify-center items-center gap-4">
                    <div className="max-w-40 h-40">
                        <img src="/assets/img/mother-day-coupon-image.png" alt="mother_day_coupon_image" className="h-full object-contain" />
                    </div>
                    <div class="coupon-body flex flex-col gap-1 py-1">
                        <h3 className="font-bold">HAPPY MOTHER'S DAY!</h3>
                        <p>Get one of our favorite menu for free!</p>
                        <button className="text-white mt-4 text-start">Claim Coupon</button>
                    </div>
                </div>
                <div class="coupon-card w-100 h-40 shrink-0 bg-yellow-700 px-4 rounded-xl flex justify-center items-center gap-4">
                    <div className="max-w-40 h-40">
                        <img src="/assets/img/father-coupon.png" alt="sunday_coupon_image" className="h-full object-contain" />
                    </div>
                    <div class="coupon-body flex flex-col gap-1 py-1">
                        <h3 className="font-bold">Get a cup of coffee for free on sunday morning</h3>
                        <p>Only at 7 to 9 AM</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

const ProductSection = () => {
    return (
        <section>
            <div className="flex flex-col justify-center gap-4">
                <h2 className="text-4xl">Today<span className="text-(--color-accent)">Promo</span></h2>
                <div className="bg-(--color-primary) h-1 w-10 rounded-full"></div>
                <p>Let's choose and have a bit taste of poeple's favorite. It might be yours too!</p>
            </div>
            <div className="flex flex-col md:flex-row p-4 gap-4 justify-center items-center">

            </div>
        </section>
    )
}

const Product = () => {
    return (
        <div className="container max-w-360 mx-auto flex flex-col">
            <Navbar theme={"dark"} />
            <Hero />
            <TodayPromo />
            <Footer />
        </div>
    )
}

export default Product