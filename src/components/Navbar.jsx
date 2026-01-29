import { BsCart3 } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";
import brand_white from "../assets/img/brand-white.svg";
import { useLocation } from "react-router-dom";

const navbar = ({ absolute, theme }) => {
    const location = useLocation();
    return (
        <header className="relative">
            <nav className={(absolute ? "absolute top-0 left-0 right-0 " : "") + "flex items-center justify-between h-16 p-8 md:px-16" + (theme === "dark" ? " bg-black" : " bg-black/40")}>
                <ul className="flex items-center gap-4">
                    <li className="hover:text-white"><img src={brand_white} alt="Coffee Shop" /></li>
                    <li className={"hover:text-white hidden md:block"+ (location.pathname === '/' ? " text-white border-b border-(--color-primary)" : " text-white/40")}><a href="/">Home</a></li>
                    <li className={"hover:text-white hidden md:block"+ (location.pathname === '/product' ? " text-white border-b border-(--color-primary)" : " text-white/40")}><a href="/product">Product</a></li>
                </ul>
                <ul className="flex items-center gap-4">
                    <li className="hover:text-white"><button className="cursor-pointer"><BiSearch className="text-white w-7 h-7"/></button></li>
                    <li className="hover:text-white"><button className="cursor-pointer"><BsCart3 className="text-white w-7 h-7"/></button></li>
                    <li className="text-white hover:text-black hidden md:block">
                        <a href="/login" className="p-4 border border-white rounded">Sign In</a>
                    </li>
                    <li className="hover:text-white hidden md:block">
                        <a href="/register" className="p-4 bg-(--color-primary) border border-(--color-primary) rounded">Sign Up</a>
                    </li>
                </ul>
            </nav>
        </header>)
}
export default navbar