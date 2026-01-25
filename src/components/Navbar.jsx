import brand_white from "../assets/img/brand-white.svg"
import search_icon from "../assets/img/Search.svg"
import cart_icon from "../assets/img/ShoppingCart.svg"

const navbar = () => {
    return (
        <header>
            <nav className="flex items-center justify-between h-16 px-16 bg-black/40">
                <ul className="flex items-center gap-4">
                    <li className="hover:text-white"><img src={brand_white} alt="Coffee Shop" /></li>
                    <li className="hover:text-white border-b border-(--color-primary)"><a href="/">Home</a></li>
                    <li className="hover:text-white"><a href="/product">Product</a></li>
                    <li className="hover:text-white"></li>
                </ul>
                <ul className="flex items-center gap-4">
                    <li className="hover:text-white"><button className="cursor-pointer"><img src={search_icon} alt="Search_Icon" /></button></li>
                    <li className="hover:text-white"><button className="cursor-pointer"><img src={cart_icon} alt="Cart_Icon" /></button></li>
                    <li className="text-white hover:text-black"><a href="/login" className="p-4 border border-white rounded">Sign In</a></li>
                    <li className="hover:text-white"><a href="/register" className="p-4 bg-(--color-primary) border border-(--color-primary) rounded">Sign Up</a></li>
                </ul>
            </nav>
        </header>)
}
export default navbar