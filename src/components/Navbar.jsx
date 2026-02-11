import { BsSearch } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";
import { FiLogOut } from "react-icons/fi";
import { BsCart3 } from "react-icons/bs";
import brand_white from "../assets/img/brand-white.svg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import UserContext from "/src/components/context/UserContext"
import useLocalStorage from "/src/hooks/useLocalStorage"
import { useForm } from "react-hook-form";
import ProductContext from "/src/components/context/ProductContext"

const navbar = ({ absolute, theme }) => {
    const { user, setUser, setAlert } = useContext(UserContext)
    const products = useContext(ProductContext) || null
    const { register, handleSubmit } = useForm()
    const location = useLocation();
    const [userDropdown, setUserDropdown] = useState(false);
    const [searchbox, setSearchbox] = useState(false);
    const [cartbox, setCartbox] = useState(false);
    const [cart] = useLocalStorage("cart");
    const navigator = useNavigate()

    function toggleDropdown(setter, getter) {
        setter(!getter)
    }

    function search(keyword) {
        navigator({ pathname: "/product", state: { keyword: keyword } })
    }

    function logout() {
        window.localStorage.removeItem("user")
        setUser({})
        setAlert(["success", "Anda berhasil logout !"])
    }

    return (
        <header className="relative">
            <nav className={(absolute ? "absolute top-0 left-0 right-0 " : "") + "flex items-center justify-between h-16 p-8 md:px-16" + (theme === "dark" ? " bg-black" : " bg-black/40")}>
                <ul className="flex items-center gap-4 flex-1">
                    <li className="hover:text-white"><Link to="/"><img src={brand_white} alt="Coffee Shop" /></Link></li>
                    <li className={"hover:text-white hidden md:block" + (location.pathname === '/' ? " text-white border-b border-(--color-primary)" : " text-white/40")}><Link to="/">Home</Link></li>
                    <li className={"hover:text-white hidden md:block" + (location.pathname === '/product' ? " text-white border-b border-(--color-primary)" : " text-white/40")}><Link to="/product">Product</Link></li>
                </ul>
                <ul className="flex justify-end items-center gap-4 flex-1">
                    <li className="text-white">
                        <form onSubmit={handleSubmit(search)}>
                            <label htmlFor="search" className={"h-10 flex justify-center items-center px-2 rounded" + (searchbox ? " bg-white/40" : "")}>
                                <button type={(searchbox ? "submit" : "button")} className={"cursor-pointer" + (searchbox ? " text-black" : "")} onClick={() => { toggleDropdown(setSearchbox, searchbox) }}>
                                    <BsSearch className="text-white w-7 h-7" />
                                </button>
                                <input {...register("search")} id="search" type="text" className={"h-4 w-16 md:h-10 md:w-full outline-0 px-4" + (searchbox ? " block" : " hidden")} required />
                            </label>
                        </form>
                    </li>
                    <li className="hover:text-white relative">
                        <button className="cursor-pointer" onClick={() => { toggleDropdown(setCartbox, cartbox) }}>
                            <BsCart3 className="text-white w-7 h-7" />
                        </button>
                        <div className={"absolute bg-white w-100 h-40 -bottom-44 -right-4 flex-col items-center gap-4 p-4 rounded overflow-y-auto" + (cartbox ? " flex" : " hidden")}>
                            {
                                (
                                    products != null && cart != null
                                        ?
                                        cart.map(
                                            item => {
                                                const product = products.find(product => product.id === parseInt(item.productId))
                                                if (product != null) {
                                                    return (
                                                        <Link to={"/product/"+ product.id} className="w-full bg-gray-100 text-black hover:bg-gray-400">
                                                            <div className="flex w-full h-18 items-center gap-4 ">
                                                                <img src={product.images[0]} alt={product.name} className="h-full flex-1 object-cover" />
                                                                <span className="flex-1">{product.name}</span>
                                                                <span className="flex-1">{item.quantity}pcs</span>
                                                                <span className="flex-1">{"Rp." + (product.price * item.quantity).toLocaleString("id-ID") + ",-"}</span>
                                                            </div>
                                                        </Link>
                                                    )
                                                }
                                            }
                                        )
                                        :
                                        "Loading..."
                                )
                            }
                        </div>
                        <Link to="/payment" className="cursor-pointer">
                        </Link>
                    </li>

                    <li className="text-white hidden md:block">
                        {
                            user.role != null ?
                                <div className="flex justify-between items-center gap-4">
                                    <div className="flex justify-center items-center gap-4 text-white/40 hover:text-white cursor-pointer" onClick={() => { toggleDropdown(setUserDropdown, userDropdown) }}>
                                        <div className="rounded-full w-10 h-10 overflow-hidden">
                                            <img src={user.avatar} alt={user.fullname} />
                                        </div>
                                        <span className="hidden md:block">{(user.fullname).slice(0, 4)}</span>
                                    </div>

                                    <div className={"absolute bg-white w-40 h-40 -bottom-40 right-0 flex-col justify-center items-center gap-4 p-4 rounded" + (userDropdown ? " flex" : " hidden")}>
                                        <button className="w-full hover:text-black text-black/40 cursor-pointer" onClick={logout}>
                                            <span className="flex items-center gap-4"><FiLogOut />Logout</span>
                                        </button>
                                        <Link to="/profile" className="w-full hover:text-black text-black/40 cursor-pointer"><span className="flex items-center gap-4"><AiOutlineUser />Profile</span></Link>
                                    </div>
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
        </header >)
}
export default navbar