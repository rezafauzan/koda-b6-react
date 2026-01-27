import brand_white from "../assets/img/brand-white.svg"
import search_icon from "../assets/img/Search.svg"
import cart_icon from "../assets/img/ShoppingCart.svg"

/**
 * @param {"dark"?} props.theme 
 * @returns {JSX}
 */
const navbar = ({theme,absolute}) => {
    return (
        <header className="relative">
            <nav className={(absolute?"absolute ":"") + "flex  w-full items-center justify-between h-16 px-16 bg-black/40"}>
                <ul className="flex items-center gap-4">
                    <li className="hover:text-white"><img src={brand_white} alt="Coffee Shop" /></li>
                    <li className="hover:text-white text-white border-b border-(--color-primary) hidden md:block"><a href="/">Home</a></li>
                    <li className="hover:text-white hidden md:block"><a href="/product">Product</a></li>
                    <li className="hover:text-white hidden md:block"></li>
                </ul>
                <ul className="flex items-center gap-4">
                    <li className="hover:text-white"><button className="cursor-pointer"><img src={search_icon} alt="Search_Icon" /></button></li>
                    <li className="hover:text-white"><button className="cursor-pointer"><img src={cart_icon} alt="Cart_Icon" /></button></li>
                    <li className="text-white hover:text-black hidden md:block"><a href="/login" className="p-4 border border-white rounded">Sign In</a></li>
                    <li className="hover:text-white hidden md:block"><a href="/register" className="p-4 bg-(--color-primary) border border-(--color-primary) rounded">Sign Up</a></li>
                </ul>
            </nav>
        </header>)
}
export default navbar