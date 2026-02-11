import { AiFillStar } from "react-icons/ai";
import { BiSend } from "react-icons/bi";
import { GoFlame } from "react-icons/go";
import { AiOutlineUser } from "react-icons/ai";
import { BsChatDots } from "react-icons/bs";
import { BsArrowRight } from "react-icons/bs";
import { BsArrowLeft } from "react-icons/bs";
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import ProductCard from "../components/ProductCard"
import { MdOutlineGirl } from "react-icons/md";
import { useContext, useEffect, useRef, useState } from "react";
import ProductContext from "../components/context/ProductContext";
import dataFetcher from "/src/lib/dataFetcher.jsx"
import { Link } from "react-router-dom";

const Hero = () => {
    return (
        <section>
            <div className="flex flex-col-reverse md:flex-row h-512 md:h-screen md:max-h-192">
                <div className="copytext-container flex-1 flex items-center justify-center bg-[linear-gradient(168.18deg,#777C82_-114.74%,#0B0909_91.35%)]">
                    <div className="copytext w-[80%] px-6 py-10 flex flex-col gap-4 text-white">
                        <h2 className="copytext-headline text-5xl">Start Your Day with Coffee and Good Meals</h2>
                        <p className="">We provide high quality beans, good taste, and healthy meals made by love just for you.
                            Start your day with us for a bigger smile!</p>
                        <Link to="/product" className="bg-(--color-primary) p-4 rounded w-fit text-black">Get Started!</Link>
                        <div className="flex flex-col md:flex-row w-full justify-between gap-4">
                            <div className="flex-1 flex flex-col gap-4 border-r border-r-white"><span className="text-4xl text-(--color-primary)">90+</span>Staff</div>
                            <div className="flex-1 flex flex-col gap-4 border-r border-r-white"><span className="text-4xl text-(--color-primary)">40+</span>Stores</div>
                            <div className="flex-1 flex flex-col gap-4"><span className="text-4xl text-(--color-primary)">800+</span>Customer</div>
                        </div>
                    </div>
                </div>
                <div className="hero-image flex-1 h-128 md:h-auto bg-[url('/src/assets/img/hero.jpg')] bg-cover bg-center bg-no-repeat">
                </div>
            </div>
        </section>
    )
}

const About = () => {
    return (
        <section className="mb-7">
            <div className="flex flex-col-reverse md:flex-row h-512 md:h-screen md:max-h-192">
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
                <div className="hero-image flex-1 h-128 md:h-auto bg-[url('/src/assets/img/feature.jpg')] bg-cover bg-center bg-no-repeat">
                </div>
            </div>
        </section>
    )
}

const Product = () => {
    const products = useContext(ProductContext) || []
    return (
        <section>
            <div className="flex flex-col justify-center items-center gap-4">
                <h2 className="text-4xl">Here is People's <span className="text-(--color-accent)">Favorite</span></h2>
                <div className="bg-(--color-primary) h-1 w-10 rounded-full"></div>
                <p>Let's choose and have a bit taste of poeple's favorite. It might be yours too!</p>
            </div>
            <div className="flex flex-col xl:flex-row p-4 lg:p-16 gap-4 justify-center items-center">
                {
                    (
                        products.length > 0 ?
                            products.slice(0, 4).map(
                                (product, index) =>
                                    <ProductCard key={"product-" + index} product={product} flashsale={true} />
                            )
                            :
                            <span className="text-xl text-green-400">Loading...</span>
                    )
                }
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
                <div className="h-76 md:h-128 w-full bg-[url(/src/assets/img/Global.svg)] bg-no-repeat bg-contain lg:bg-cover">
                </div>
            </div>
        </section>
    )
}

const Testimoni = () => {
    const testimoni = [
        {
            "name": "Rizky Ananda",
            "proffesion": "Software Developer",
            "picture": "pexels-djordje-petrovic-590080-2102416.jpg",
            "review": "Tempatnya nyaman buat kerja lama, Wi-Fi stabil dan colokan banyak. Kopinya juga enak.",
            "rating": 5
        },
        {
            "name": "Ayu Lestari",
            "proffesion": "Mahasiswa",
            "picture": "pexels-m-rifki-kurniawan-633404448-19403094.jpg",
            "review": "Suka suasananya yang tenang, cocok buat ngerjain tugas. Harganya masih masuk akal.",
            "rating": 4
        },
        {
            "name": "Andi Pratama",
            "proffesion": "Freelancer",
            "picture": "pexels-punttim-52608.jpg",
            "review": "Kopi enak dan konsisten rasanya, cuma kadang agak rame di jam sibuk.",
            "rating": 4
        },
        {
            "name": "Siti Nurhaliza",
            "proffesion": "Content Creator",
            "picture": "pexels-firman-fatthul-154779494-27906780.jpg",
            "review": "Interior bagus buat foto dan bikin konten. Pelayanannya ramah.",
            "rating": 5
        },
        {
            "name": "Budi Santoso",
            "proffesion": "Karyawan Swasta",
            "picture": "pexels-jimmy-nilsson-masth-193596566-13474086.jpg",
            "review": "Kopinya oke, tapi menurut saya porsinya bisa ditambah sedikit.",
            "rating": 2
        }
    ]

    const [activeTestimoniIndex, setActiveTestimoniIndex] = useState(0)
    const activeTestimoni = testimoni[activeTestimoniIndex]

    function nextTestimoni() {
        if (activeTestimoniIndex < testimoni.length - 1) {
            const index = activeTestimoniIndex + 1
            setActiveTestimoniIndex(index)
        } else {
            const index = 0
            setActiveTestimoniIndex(index)
        }
    }

    function prevTestimoni() {
        if (activeTestimoniIndex > 0) {
            const index = activeTestimoniIndex - 1
            setActiveTestimoniIndex(index)
        } else {
            const index = testimoni.length - 1
            setActiveTestimoniIndex(index)
        }
    }

    const nextButton = useRef()
    useEffect(
        () => {
            setInterval(
                () => {
                    nextButton.current.click()
                }, 4000
            )
        }
        , []
    )

    return (
        <section>
            <div className="md:min-h-fit md:h-screen md:max-h-128 md:px-16 md:py-16 p-10 flex flex-col md:flex-row gap-10 bg-[linear-gradient(168.18deg,#777C82_-114.74%,#0B0909_91.35%)]">
                <div className="flex-1 overflow-hidden flex flex-col justify-center">
                    <img src={"/assets/img/" + activeTestimoni.picture} alt={activeTestimoni.name} className="object-fit" />
                </div>
                <div className="flex-1 flex flex-col justify-center gap-8 md:gap-4 text-white md:min-h-fit md:h-screen md:max-h-128">
                    <span>Testimonial</span>
                    <span className="font-bold text-4xl border-l-4 border-l-(--color-primary) pl-4">{activeTestimoni.name}</span>
                    <span className="text-(--color-primary)">{activeTestimoni.proffesion}</span>
                    <q className="h-28">{activeTestimoni.review}</q>
                    <div className="flex items-center md:gap-4 gap-10">
                        <div className="lg:w-[40%] flex justify-evenly items-center gap-4">
                            {
                                Array.from({ length: activeTestimoni.rating }).map((rating, index) => <AiFillStar key={"star-" + index} className="text-(--color-primary)" />)
                            }
                        </div>
                        <span>{activeTestimoni.rating}.0</span>
                    </div>
                    <div className="flex justify-between md:justify-start gap-4 mb-4">
                        <button className="rounded-full w-10 h-10 bg-white flex justify-center items-center cursor-pointer" onClick={prevTestimoni}><BsArrowLeft className="text-black" /></button>
                        <button ref={nextButton} className="rounded-full w-10 h-10 bg-(--color-primary) flex justify-center items-center cursor-pointer" onClick={nextTestimoni}><BsArrowRight className="text-black" /></button>
                    </div>
                    <div className="flex gap-1 justify-evenly">
                        <span className={"w-8 h-1 rounded-full" + (activeTestimoniIndex === 0 ? " bg-(--color-primary)" : " bg-white/40")}></span>
                        <span className={"w-8 h-1 rounded-full" + (activeTestimoniIndex === 1 ? " bg-(--color-primary)" : " bg-white/40")}></span>
                        <span className={"w-8 h-1 rounded-full" + (activeTestimoniIndex === 2 ? " bg-(--color-primary)" : " bg-white/40")}></span>
                        <span className={"w-8 h-1 rounded-full" + (activeTestimoniIndex === 3 ? " bg-(--color-primary)" : " bg-white/40")}></span>
                    </div>
                </div>
            </div>
        </section>
    )
}

const FloatingChat = () => {
    const chatbox = useRef()
    function chatboxToggler() {
        chatbox.current.classList.toggle('hidden')
    }
    return (
        <div className="w-70  md:w-100 flex flex-col justify-center gap-2 fixed bottom-4 right-4">
            <div ref={chatbox} className=" bg-white rounded-b border-t-10 border-t-(--color-primary) rounded-xl hidden">
                <div className="flex items-center gap-4 border-b border-b-black/10 p-4">
                    <div className="rounded-full w-10 h-10 bg-sky-400 flex justify-center items-center">
                        <AiOutlineUser />
                    </div>
                    <div className="flex flex-col justify-center">
                        <span className="font-bold">Lorem, ipsum.</span>
                        <span className="text-sm text-(--color-primary)">Lorem, ipsum.</span>
                    </div>
                </div>
                <div className="flex flex-col h-70 md:h-80 overflow-y-auto">
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
                            <img src="/assets/img/kiss-cut-stickers-4x4-default-63863ac6746cb_1200x.webp" alt="Koda-Easter-Egg1" className="w-40 h-40" />
                        </span>
                    </div>
                    <div className="flex items-center gap-4 p-2">
                        <div className="rounded-full w-10 h-10 bg-sky-400 flex justify-center items-center"><MdOutlineGirl /></div>
                        <span className="flex justify-center text-sm bg-slate-100 px-2 py-2">
                            <img src="/assets/img/wojak-nss-magazine-3.jpg" alt="Koda-Easter-Egg2" className="w-40 h-40" />
                        </span>
                    </div>
                    <div className="flex flex-row-reverse justify-self-end items-center gap-4 p-2">
                        <div className="rounded-full w-10 h-10 bg-sky-400 flex justify-center items-center"><AiOutlineUser /></div>
                        <span className="flex justify-center text-sm bg-slate-100 px-2 py-2 rounded-full">Sanss</span>
                    </div>
                    <div className="flex flex-row-reverse justify-self-end items-center gap-4 p-2">
                        <div className="rounded-full w-10 h-10 bg-sky-400 flex justify-center items-center"><AiOutlineUser /></div>
                        <span className="flex justify-center text-sm bg-slate-100 px-2 py-2">
                            <img src="/assets/img/st,small,845x845-pad,1000x1000,f8f8f8.u2.jpg" alt="Koda-Easter-Egg3" className="w-40 h-40" />
                        </span>
                    </div>
                    <div className="flex flex-row-reverse justify-self-end items-center gap-4 p-2">
                        <div className="rounded-full w-10 h-10 bg-sky-400 flex justify-center items-center"><AiOutlineUser /></div>
                        <span className="flex justify-center text-sm bg-slate-100 px-2 py-2">
                            <img src="/assets/img/pngimg.com - wojak_PNG109612.png" alt="Koda-Easter-Egg4" className="w-40 h-40" />
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
                            <img src="/assets/img/dd3ba633eb5fe0708f057771047d0774.jpg" alt="Koda-Easter-Egg" className="w-40 h-40" />
                        </span>
                    </div>
                    <div className="flex items-center gap-4 p-2">
                        <div className="rounded-full w-10 h-10 bg-sky-400 flex justify-center items-center"><MdOutlineGirl /></div>
                        <span className="flex justify-center text-sm bg-slate-100 px-2 py-2">
                            <img src="/assets/img/mygirl.jpg" alt="Koda-Easter-Egg6" className="w-40 h-40" />
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
            <button className="cursor-pointer flex justify-center items-center bg-(--color-primary) w-16 h-16 rounded-full self-end" onClick={chatboxToggler}><BsChatDots className="w-7 h-7" /></button>
        </div>
    )
}

const Home = () => {
    const [data, setData] = useState([])
    useEffect(
        () => {
            dataFetcher("https://raw.githubusercontent.com/rezafauzan/koda-b6-react/refs/heads/feat/product-populating/public/assets/data/product.json").then(
                products => { setData(products) }
            )
        }, []
    )
    return (
        <div className="container max-w-360 mx-auto flex flex-col">
            <Navbar absolute={true} />
            <Hero />
            <About />
            <ProductContext value={data}>
                <Product />
            </ProductContext>
            <Map />
            <Testimoni />
            <Footer />
            <FloatingChat />
        </div>
    )
}
export default Home