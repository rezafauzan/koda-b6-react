import Navbar from "../components/Navbar"
import ProductCard from "../components/ProductCard"
const Hero = () => {
    return (
        <section>
            <div className="flex flex-col-reverse md:flex-row min-h-128 max-h-192 h-screen">
                <div class="copytext-container flex-1 flex items-center justify-center bg-[linear-gradient(168.18deg,#777C82_-114.74%,#0B0909_91.35%)]">
                    <div class="copytext w-[80%] px-6 py-10 flex flex-col gap-4 text-white">
                        <h2 className="copytext-headline text-5xl">Start Your Day with Coffee and Good Meals</h2>
                        <p className="">We provide high quality beans, good taste, and healthy meals made by love just for you.
                            Start your day with us for a bigger smile!</p>
                        <a href="product.html" class="bg-(--color-primary) p-4 rounded w-fit text-black">Get Started!</a>
                        <div class="flex w-full justify-between gap-4">
                            <div className="flex-1 flex flex-col gap-4 border-r border-r-white"><span className="text-4xl text-(--color-primary)">90+</span>Staff</div>
                            <div className="flex-1 flex flex-col gap-4 border-r border-r-white"><span className="text-4xl text-(--color-primary)">40+</span>Stores</div>
                            <div className="flex-1 flex flex-col gap-4"><span className="text-4xl text-(--color-primary)">800+</span>Customer</div>
                        </div>
                    </div>
                </div>
                <div class="hero-image flex-1 h-128 md:h-auto bg-[url('/src/assets/img/hero.jpg')] bg-cover bg-no-repeat">
                </div>
            </div>
        </section>
    )
}

const About = () => {
    return (
        <section className="mb-7">
            <div className="flex flex-col-reverse md:flex-row min-h-128 max-h-192 h-screen">
                <div class="copytext-container flex-1 flex items-center justify-center">
                    <div class="copytext w-[80%] px-6 py-10 flex flex-col gap-4">
                        <h2 className="copytext-headline text-5xl border-l-4 pl-4 border-l-(--color-primary)">We Provide <span className="text-(--color-accent)">Good Coffee</span> And <span className="text-(--color-accent)">Healthy Meals</span></h2>
                        <p className="">You can explore the menu that we provide with fun and have their own taste and make your day better.</p>
                        <ul className="list-image-[url(../img/checklist.svg)] flex flex-col gap-8">
                            <li>High quality beans</li>
                            <li>Healthy meals, you can request the ingredients</li>
                            <li>Chat with our staff to get better experience for ordering</li>
                            <li>Free member card with a minimum purchase of IDR 200.000.</li>
                        </ul>
                    </div>
                </div>
                <div class="hero-image flex-1 h-128 md:h-auto bg-[url('/src/assets/img/feature.jpg')] bg-cover bg-no-repeat">
                </div>
            </div>
        </section>
    )
}

const Home = () => {
    return (
        <div className="container max-w-360 mx-auto flex flex-col">
            <Navbar absolute={true} />
            <Hero />
            <About />
        </div>
    )
}
export default Home