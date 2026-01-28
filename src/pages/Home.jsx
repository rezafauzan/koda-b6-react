import { BiSend } from "react-icons/bi";
import { GoFlame } from "react-icons/go";
import { AiOutlineUser } from "react-icons/ai";
import { BsChatDots } from "react-icons/bs";
import { BsArrowRight } from "react-icons/bs";
import { BsArrowLeft } from "react-icons/bs";
import { ImInstagram } from "react-icons/im";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import Navbar from "../components/Navbar"
import ProductCard from "../components/ProductCard"
import { MdOutlineGirl } from "react-icons/md";

const Hero = () => {
    return (
        <section>
            <div className="flex flex-col-reverse md:flex-row min-h-128 max-h-192 h-screen">
                <div className="copytext-container flex-1 flex items-center justify-center bg-[linear-gradient(168.18deg,#777C82_-114.74%,#0B0909_91.35%)]">
                    <div className="copytext w-[80%] px-6 py-10 flex flex-col gap-4 text-white">
                        <h2 className="copytext-headline text-5xl">Start Your Day with Coffee and Good Meals</h2>
                        <p className="">We provide high quality beans, good taste, and healthy meals made by love just for you.
                            Start your day with us for a bigger smile!</p>
                        <a href="product.html" className="bg-(--color-primary) p-4 rounded w-fit text-black">Get Started!</a>
                        <div className="flex w-full justify-between gap-4">
                            <div className="flex-1 flex flex-col gap-4 border-r border-r-white"><span className="text-4xl text-(--color-primary)">90+</span>Staff</div>
                            <div className="flex-1 flex flex-col gap-4 border-r border-r-white"><span className="text-4xl text-(--color-primary)">40+</span>Stores</div>
                            <div className="flex-1 flex flex-col gap-4"><span className="text-4xl text-(--color-primary)">800+</span>Customer</div>
                        </div>
                    </div>
                </div>
                <div className="hero-image flex-1 h-128 md:h-auto bg-[url('/src/assets/img/hero.jpg')] bg-cover bg-no-repeat">
                </div>
            </div>
        </section>
    )
}

const About = () => {
    return (
        <section className="mb-7">
            <div className="flex flex-col-reverse md:flex-row min-h-128 max-h-192 h-screen">
                <div className="copytext-container flex-1 flex items-center justify-center">
                    <div className="copytext w-[80%] px-6 py-10 flex flex-col gap-4">
                        <h2 className="copytext-headline text-5xl border-l-4 pl-4 border-l-(--color-primary)">We Provide <span className="text-(--color-accent)">Good Coffee</span> And <span className="text-(--color-accent)">Healthy Meals</span></h2>
                        <p className="">You can explore the menu that we provide with fun and have their own taste and make your day better.</p>
                        <ul className="list-image-[url(/src/assets/img/checklist.svg)] flex flex-col gap-8">
                            <li>High quality beans</li>
                            <li>Healthy meals, you can request the ingredients</li>
                            <li>Chat with our staff to get better experience for ordering</li>
                            <li>Free member card with a minimum purchase of IDR 200.000.</li>
                        </ul>
                    </div>
                </div>
                <div className="hero-image flex-1 h-128 md:h-auto bg-[url('/src/assets/img/feature.jpg')] bg-cover bg-no-repeat">
                </div>
            </div>
        </section>
    )
}

const Product = () => {
    return (
        <section>
            <div className="flex flex-col justify-center items-center gap-4">
                <h2 className="text-4xl">Here is People's <span className="text-(--color-accent)">Favorite</span></h2>
                <div className="bg-(--color-primary) h-1 w-10 rounded-full"></div>
                <p>Let's choose and have a bit taste of poeple's favorite. It might be yours too!</p>
            </div>
            <div className="flex flex-col md:flex-row p-4 gap-4 justify-center items-center">
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </div>
        </section>
    )
}

const Map = () => {
    return (
        <section>
            <div className="flex flex-col gap-4">
                <div className="flex flex-col justify-center items-center gap-4">
                    <h2 className="text-4xl"><span className="text-(--color-accent)">Visit Our Store</span> in the Spot on the Map Below</h2>
                    <div className="bg-(--color-primary) h-1 w-10 rounded-full"></div>
                    <p>You can explore the menu that we provide with fun and have their own taste and make your day better.</p>
                </div>
                <div className="min-h-128 w-full bg-[url(/src/assets/img/Global.svg)] bg-no-repeat bg-cover">
                </div>
            </div>
        </section>
    )
}

const Testimoni = () => {
    return (
        <section>
            <div className="h-128 px-16 flex gap-10 bg-[linear-gradient(168.18deg,#777C82_-114.74%,#0B0909_91.35%)]">
                <div className="flex-1 overflow-hidden flex flex-col justify-center">
                    <img src="/src/assets/img/testimoni1.png" alt="Tester_Name" className="object-fit" />
                </div>
                <div className="h-128 flex-1 flex flex-col justify-center gap-4 text-white">
                    <span>Testimonial</span>
                    <span className="font-bold text-4xl border-l-4 border-l-(--color-primary) pl-4">Siti Nurhaliza</span>
                    <span className="text-(--color-primary)">Software Developer</span>
                    <q id="tester-review">Kopinya oke, tapi menurut saya porsinya bisa ditambah sedikit.</q>
                    <div className="flex items-center gap-4">
                        <img src="/src/assets/img/star.svg" alt="star_icon" />
                        <img src="/src/assets/img/star.svg" alt="star_icon" />
                        <img src="/src/assets/img/star.svg" alt="star_icon" />
                        <img src="/src/assets/img/star.svg" alt="star_icon" />
                        <img src="/src/assets/img/star.svg" alt="star_icon" />
                        <span>5.0</span>
                    </div>
                    <div className="flex gap-4">
                        <button className="rounded-full w-10 h-10 bg-white flex justify-center items-center cursor-pointer"><BsArrowLeft className="text-black" /></button>
                        <button className="rounded-full w-10 h-10 bg-(--color-primary) flex justify-center items-center cursor-pointer"><BsArrowRight className="text-black" /></button>
                    </div>
                    <div id="testimoni-indicator" className="testimoni-indicator"><span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span className="active"></span>
                    </div>
                </div>
            </div>
        </section>
    )
}

const Footer = () => {
    return (
        <footer>
            <div className="flex justify-between gap-4 p-4">
                <div className="flex-1">
                    <ul className="flex flex-col justify-center gap-4 h-full">
                        <li>
                            <img src="/src/assets/img/brand.svg" alt="Brand_Icon" />
                        </li>
                        <li className="text-black/70">Coffee Shop is a store that sells some good meals, and especially coffee. We provide high
                            quality beans</li>
                        <li className="copyright text-black/70">©2020CoffeeStore</li>
                    </ul>
                </div>
                <div className="flex-1">
                    <ul className="flex flex-col gap-4">
                        <li><span className="font-bold">Product</span></li>
                        <li><a href="product.html" className="text-black/70 hover:text-black">Our Product</a></li>
                        <li><a href="#" className="text-black/70 hover:text-black">Pricing</a></li>
                        <li><a href="#" className="text-black/70 hover:text-black">Location</a></li>
                        <li><a href="#" className="text-black/70 hover:text-black">Countries</a></li>
                        <li><a href="#" className="text-black/70 hover:text-black">Blog</a></li>
                    </ul>
                </div>
                <div className="flex-1">
                    <ul className="flex flex-col gap-4">
                        <li><span className="font-bold">Engage</span></li>
                        <li><a href="#" className="text-black/70 hover:text-black">Partner</a></li>
                        <li><a href="#" className="text-black/70 hover:text-black">FAQ</a></li>
                        <li><a href="#" className="text-black/70 hover:text-black">About Us</a></li>
                        <li><a href="#" className="text-black/70 hover:text-black">Privacy Policy</a></li>
                        <li><a href="#" className="text-black/70 hover:text-black">Term Of Service</a></li>
                    </ul>
                </div>
                <div className="flex-1">
                    <ul>
                        <li><span className="font-bold">Social Media</span></li>
                        <li className="flex gap-4 items-center">
                            <a href="#" className="w-10 h-10 rounded-full bg-(--color-primary) hover:bg-(--color-primary-active) flex justify-center items-center">
                                <FaFacebookF />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-(--color-primary) hover:bg-(--color-primary-active) flex justify-center items-center">
                                <FaTwitter />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-(--color-primary) hover:bg-(--color-primary-active) flex justify-center items-center">
                                <ImInstagram />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

const FloatingChat = () => {
    return (
        <div className="w-100 flex flex-col justify-center gap-2 fixed bottom-4 right-4 border-t-10 border-t-(--color-primary) rounded-xl">
            <div className=" bg-white rounded-b">
                <div className="flex items-center gap-4 border-b border-b-black/10 p-4">
                    <div className="rounded-full w-10 h-10 bg-sky-400 flex justify-center items-center">
                        <AiOutlineUser />
                    </div>
                    <div className="flex flex-col justify-center">
                        <span className="font-bold">Lorem, ipsum.</span>
                        <span className="text-sm text-(--color-primary)">Lorem, ipsum.</span>
                    </div>
                </div>
                <div className="flex flex-col h-80 overflow-y-auto">
                    <div className="flex flex-row-reverse justify-self-end items-center gap-4 p-2">
                        <div className="rounded-full w-10 h-10 bg-sky-400 flex justify-center items-center"><AiOutlineUser /></div>
                        <span className="flex justify-center text-sm bg-slate-100 px-2 py-2 rounded-full">Halo ada yang bisa ?</span>
                    </div>
                    <div className="flex items-center gap-4 p-2">
                        <div className="rounded-full w-10 h-10 bg-sky-400 flex justify-center items-center"><MdOutlineGirl /></div>
                        <span className="flex justify-center text-sm bg-slate-100 px-2 py-2 rounded-full">bisa yuk bisaa !!</span>
                    </div>
                    <div className="flex flex-row-reverse justify-self-end items-center gap-4 p-2">
                        <div className="rounded-full w-10 h-10 bg-sky-400 flex justify-center items-center"><AiOutlineUser /></div>
                        <span className="flex justify-center text-sm bg-slate-100 px-2 py-2 rounded-full">jum'at ?</span>
                    </div>
                    <div className="flex items-center gap-4 p-2">
                        <div className="rounded-full w-10 h-10 bg-sky-400 flex justify-center items-center"><MdOutlineGirl /></div>
                        <span className="flex justify-center text-sm bg-slate-100 px-2 py-2 rounded-full">Weeklyy !!</span>
                    </div>
                    <div className="flex flex-row-reverse justify-self-end items-center gap-4 p-2">
                        <div className="rounded-full w-10 h-10 bg-sky-400 flex justify-center items-center"><AiOutlineUser /></div>
                        <span className="flex justify-center text-sm bg-slate-100 px-2 py-2 rounded-full">infokan masjid terdekatt</span>
                    </div>
                    <div className="flex items-center gap-4 p-2">
                        <div className="rounded-full w-10 h-10 bg-sky-400 flex justify-center items-center"><MdOutlineGirl /></div>
                        <span className="flex justify-center text-sm bg-slate-100 px-2 py-2 rounded-full">masya alloh brother !!</span>
                    </div>
                    <div className="flex items-center gap-4 p-2">
                        <div className="rounded-full w-10 h-10 bg-sky-400 flex justify-center items-center"><MdOutlineGirl /></div>
                        <span className="flex justify-center text-sm bg-slate-100 px-2 py-2 rounded-full">jan lupaa!!</span>
                    </div>
                    <div className="flex flex-row-reverse justify-self-end items-center gap-4 p-2">
                        <div className="rounded-full w-10 h-10 bg-sky-400 flex justify-center items-center"><AiOutlineUser /></div>
                        <span className="flex justify-center text-sm bg-slate-100 px-2 py-2 rounded-full">apaa??</span>
                    </div>
                    <div className="flex items-center gap-4 p-2">
                        <div className="rounded-full w-10 h-10 bg-sky-400 flex justify-center items-center"><MdOutlineGirl /></div>
                        <span className="flex justify-center text-sm bg-slate-100 px-2 py-2 rounded-full">Weeklyyyyyy<GoFlame className="text-blue-900" /><GoFlame className="text-blue-900" /></span>
                    </div>
                    <div className="flex items-center gap-4 p-2">
                        <div className="rounded-full w-10 h-10 bg-sky-400 flex justify-center items-center"><MdOutlineGirl /></div>
                        <span className="flex justify-center text-sm bg-slate-100 px-2 py-2 rounded-full">awokawok</span>
                    </div>
                    <div className="flex flex-row-reverse justify-self-end items-center gap-4 p-2">
                        <div className="rounded-full w-10 h-10 bg-sky-400 flex justify-center items-center"><AiOutlineUser /></div>
                        <span className="flex justify-center text-sm bg-slate-100 px-2 py-2 rounded-full">Fakk!!</span>
                    </div>
                    <div className="flex flex-row-reverse justify-self-end items-center gap-4 p-2">
                        <div className="rounded-full w-10 h-10 bg-sky-400 flex justify-center items-center"><AiOutlineUser /></div>
                        <span className="flex justify-center text-sm bg-slate-100 px-2 py-2">
                            <img src="/src/assets/img/kiss-cut-stickers-4x4-default-63863ac6746cb_1200x.webp" alt="Koda-Easter-Egg1" className="w-40 h-40" />
                        </span>
                    </div>
                    <div className="flex items-center gap-4 p-2">
                        <div className="rounded-full w-10 h-10 bg-sky-400 flex justify-center items-center"><MdOutlineGirl /></div>
                        <span className="flex justify-center text-sm bg-slate-100 px-2 py-2">
                            <img src="/src/assets/img/wojak-nss-magazine-3.jpg" alt="Koda-Easter-Egg2" className="w-40 h-40" />
                        </span>
                    </div>
                    <div className="flex flex-row-reverse justify-self-end items-center gap-4 p-2">
                        <div className="rounded-full w-10 h-10 bg-sky-400 flex justify-center items-center"><AiOutlineUser /></div>
                        <span className="flex justify-center text-sm bg-slate-100 px-2 py-2 rounded-full">Sanss</span>
                    </div>
                    <div className="flex flex-row-reverse justify-self-end items-center gap-4 p-2">
                        <div className="rounded-full w-10 h-10 bg-sky-400 flex justify-center items-center"><AiOutlineUser /></div>
                        <span className="flex justify-center text-sm bg-slate-100 px-2 py-2">
                            <img src="/src/assets/img/st,small,845x845-pad,1000x1000,f8f8f8.u2.jpg" alt="Koda-Easter-Egg3" className="w-40 h-40" />
                        </span>
                    </div>
                    <div className="flex flex-row-reverse justify-self-end items-center gap-4 p-2">
                        <div className="rounded-full w-10 h-10 bg-sky-400 flex justify-center items-center"><AiOutlineUser /></div>
                        <span className="flex justify-center text-sm bg-slate-100 px-2 py-2">
                            <img src="/src/assets/img/pngimg.com - wojak_PNG109612.png" alt="Koda-Easter-Egg4" className="w-40 h-40" />
                        </span>
                    </div>
                    <div className="flex items-center gap-4 p-2">
                        <div className="rounded-full w-10 h-10 bg-sky-400 flex justify-center items-center"><MdOutlineGirl /></div>
                        <span className="flex justify-center text-sm bg-slate-100 px-2 py-2 rounded-full">semangatt<GoFlame className="text-blue-900" /></span>
                    </div>
                    <div className="flex flex-row-reverse justify-self-end items-center gap-4 p-2">
                        <div className="rounded-full w-10 h-10 bg-sky-400 flex justify-center items-center"><AiOutlineUser /></div>
                        <span className="flex justify-center text-sm bg-slate-100 px-2 py-2 rounded-full">sipp tysm<GoFlame className="text-blue-900" /></span>
                    </div>
                    <div className="flex flex-row-reverse justify-self-end items-center gap-4 p-2">
                        <div className="rounded-full w-10 h-10 bg-sky-400 flex justify-center items-center"><AiOutlineUser /></div>
                        <span className="flex justify-center text-sm bg-slate-100 px-2 py-2">
                            <img src="src/assets/img/dd3ba633eb5fe0708f057771047d0774.jpg" alt="Koda-Easter-Egg" className="w-40 h-40" />
                        </span>
                    </div>
                    <div className="flex items-center gap-4 p-2">
                        <div className="rounded-full w-10 h-10 bg-sky-400 flex justify-center items-center"><MdOutlineGirl /></div>
                        <span className="flex justify-center text-sm bg-slate-100 px-2 py-2">
                            <img src="/src/assets/img/mygirl.jpg" alt="Koda-Easter-Egg6" className="w-40 h-40" />
                        </span>
                    </div>
                    <div className="flex items-center gap-4 p-2">
                        <div className="rounded-full w-10 h-10 bg-sky-400 flex justify-center items-center"><MdOutlineGirl /></div>
                        <span className="flex justify-center text-sm bg-slate-100 px-2 py-2 rounded-full">👉👈</span>
                    </div>
                </div>
                <div className="flex justify-center items-center p-4 h-16 gap-4">
                    <label className="flex-7 border border-black/40 rounded w-full p-1">
                        <input type="text" className="outline-none" placeholder="Masukan pesan anda" />
                    </label>
                    <button className="bg-(--color-primary) flex-1 rounded p-1 h-full flex justify-center items-center">
                        <BiSend />
                    </button>
                </div>
            </div>
            <button className="cursor-pointer flex justify-center items-center bg-(--color-primary) w-16 h-16 rounded-full self-end"><BsChatDots className="w-7 h-7" /></button>
        </div>
    )
}



const Home = () => {
    return (
        <div className="container max-w-360 mx-auto flex flex-col">
            <Navbar absolute={true} />
            <Hero />
            <About />
            <Product />
            <Map />
            <Testimoni />
            <Footer />
            <FloatingChat />
        </div>
    )
}
export default Home