import { ImInstagram } from "react-icons/im";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-gray-100">
            <div className="flex flex-col justify-center items-center md:items-start md:flex-row md:justify-between gap-4 p-4">
                <div className="flex-1 w-full flex justify-center md:justify-start items-center md:items-start">
                    <ul className="flex flex-col justify-center md:justify-start items-center md:items-start gap-4 h-full w-full">
                        <li>
                            <img src="/assets/img/brand.svg" alt="Brand_Icon" />
                        </li>
                        <li className="text-black/70">Coffee Shop is a store that sells some good meals, and especially coffee. We provide high
                            quality beans</li>
                        <li className="copyright text-black/70">©2020CoffeeStore</li>
                    </ul>
                </div>
                <div className="flex-1 w-full flex justify-center md:justify-start items-center md:items-start">
                    <ul className="flex flex-col justify-center md:justify-start items-center md:items-start gap-4 h-full w-full">
                        <li><span className="font-bold">Product</span></li>
                        <li><Link to="product.html" className="text-black/70 hover:text-black">Our Product</Link></li>
                        <li><Link to="#" className="text-black/70 hover:text-black">Pricing</Link></li>
                        <li><Link to="#" className="text-black/70 hover:text-black">Location</Link></li>
                        <li><Link to="#" className="text-black/70 hover:text-black">Countries</Link></li>
                        <li><Link to="#" className="text-black/70 hover:text-black">Blog</Link></li>
                    </ul>
                </div>
                <div className="flex-1 w-full flex justify-center md:justify-start items-center md:items-start">
                    <ul className="flex flex-col justify-center md:justify-start items-center md:items-start gap-4 h-full w-full">
                        <li><span className="font-bold">Engage</span></li>
                        <li><Link to="#" className="text-black/70 hover:text-black">Partner</Link></li>
                        <li><Link to="#" className="text-black/70 hover:text-black">FAQ</Link></li>
                        <li><Link to="#" className="text-black/70 hover:text-black">About Us</Link></li>
                        <li><Link to="#" className="text-black/70 hover:text-black">Privacy Policy</Link></li>
                        <li><Link to="#" className="text-black/70 hover:text-black">Term Of Service</Link></li>
                    </ul>
                </div>
                <div className="flex-1 w-full flex justify-center md:justify-start items-center md:items-start">
                    <ul className="flex flex-col justify-center md:justify-start items-center md:items-start gap-4 h-full w-full">
                        <li><span className="font-bold">Social Media</span></li>
                        <li className="flex gap-4 items-center">
                            <Link to="#" className="w-10 h-10 rounded-full bg-(--color-primary) hover:bg-(--color-primary-active) flex justify-center items-center">
                                <FaFacebookF />
                            </Link>
                            <Link to="#" className="w-10 h-10 rounded-full bg-(--color-primary) hover:bg-(--color-primary-active) flex justify-center items-center">
                                <FaTwitter />
                            </Link>
                            <Link to="#" className="w-10 h-10 rounded-full bg-(--color-primary) hover:bg-(--color-primary-active) flex justify-center items-center">
                                <ImInstagram />
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer