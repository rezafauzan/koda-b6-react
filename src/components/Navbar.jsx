import { BsCart3 } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";
import brand_white from "../assets/img/brand-white.svg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import UserContext from "/src/components/context/UserContext"

const navbar = ({ absolute, theme }) => {
    const user = useContext(UserContext)
    const location = useLocation();
    const navigator = useNavigate()
    function logout(){
        window.localStorage.removeItem("user")
        navigator("/login")
    }
    return (
        <header className="relative">
            <nav className={(absolute ? "absolute top-0 left-0 right-0 " : "") + "flex items-center justify-between h-16 p-8 md:px-16" + (theme === "dark" ? " bg-black" : " bg-black/40")}>
                <ul className="flex items-center gap-4">
                    <li className="hover:text-white"><Link to="/"><img src={brand_white} alt="Coffee Shop" /></Link></li>
                    <li className={"hover:text-white hidden md:block" + (location.pathname === '/' ? " text-white border-b border-(--color-primary)" : " text-white/40")}><Link to="/">Home</Link></li>
                    <li className={"hover:text-white hidden md:block" + (location.pathname === '/product' ? " text-white border-b border-(--color-primary)" : " text-white/40")}><Link to="/product">Product</Link></li>
                </ul>
                <ul className="flex items-center gap-4">
                    <li className="hover:text-white"><Link to="/product" className="cursor-pointer"><BiSearch className="text-white w-7 h-7" /></Link></li>
                    <li className="hover:text-white"><Link to="/payment" className="cursor-pointer"><BsCart3 className="text-white w-7 h-7" /></Link></li>

                    <li className="text-white hover:text-white/40 hidden md:block">
                        {
                            user.role != null ?
                                <div className="flex justify-between items-center gap-4 cursor-pointer">
                                    <button className="rounded-full w-10 h-10 overflow-hidden" onClick={logout}>
                                        <img src={user.avatar} alt={user.fullname} />
                                    </button>
                                    <span className="hidden md:block">{(user.fullname).slice(0,4)}</span>
                                </div>
                                :
                                <Link to="/login" className="p-4 border border-white rounded">Sign In</Link>
                        }
                    </li>
                    {
                        user.role != null ?
                            ""
                            :
                            <li className="hover:text-white hidden md:block">
                                <Link to="/register" className="p-4 bg-(--color-primary) border border-(--color-primary) rounded">Sign Up</Link>
                            </li>
                    }
                </ul>
            </nav>
        </header>)
}
export default navbar