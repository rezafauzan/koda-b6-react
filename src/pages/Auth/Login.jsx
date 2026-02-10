import mail_icon from "/src/assets/img/mail.svg"
import password_icon from "/src/assets/img/Password.svg"
import brand_logo from "/src/assets/img/brand.svg"
import facebook_logo from "/src/assets/img/bx_bxl-facebook-circle.svg"
import google_logo from "/src/assets/img/flat-color-icons_google.svg"
import Input from "/src/components/Input"
import { useNavigate } from "react-router-dom"
import { useContext, useEffect, useRef, useState } from "react"
import { useForm } from "react-hook-form"
import { AiOutlineCloseCircle } from "react-icons/ai"
import UserContext from "/src/components/context/UserContext"

const Login = () => {
    const {user, setUser, setAlert} = useContext(UserContext)
    const [users, setUsers] = useState([])
    const { register, handleSubmit } = useForm()
    const navigator = useNavigate()

    function login({ email, password }) {
        const userFound = users.find(user => user.email === email)
        console.log(userFound)
        if (userFound) {
            if (password === userFound.password) {
                window.localStorage.setItem("user", JSON.stringify({ fullname: userFound.fullname, avatar: userFound.avatar, email: userFound.email, role: userFound.role }))
                setUser(JSON.parse(window.localStorage.getItem("user")))
                setAlert(['success', "Login berhasil !"])
                navigator("/")
            } else {
                setAlert(['fail', "Email atau password salah"])
            }
        } else {
            setAlert(['fail', "Email atau password salah"])
        }
    }

    useEffect(
        () => {
            const usersLocalStorage = JSON.parse(localStorage.getItem("users")) || []
            setUsers(usersLocalStorage)
            if (user.role != null) {
                navigator("/")
            }
        },
        [user]
    )

    return (
        <section>
            <div className="flex gap-4 w-full">
                <div className="hidden md:block bg-[url('../../assets/img/login.jpg')] bg-cover bg-center flex-1"></div>
                <div className="w-full flex flex-col justify-center items-center gap-4 p-10 flex-3 text-(--color-secondary)">
                    <form className="flex w-full flex-col justify-center gap-4 p-4 flex-3" onSubmit={handleSubmit(login)}>
                        <div className="brand">
                            <img src={brand_logo} alt="Coffee Shop" />
                        </div>
                        <h1 className="font-bold text-(--color-accent)">Login</h1>
                        <span>Fill out the form correctly</span>
                        <Input {...register("email")} type="email" labelName="Email" icon={mail_icon} placeholder="Enter email address" />
                        <Input {...register("password")} type="password" labelName="Password" icon={password_icon} placeholder="Enter your password" autoComplete="off" />
                        <a href="/forgot-password" className="text-(--color-primary) self-end">Forgot Password?</a>
                        <button className="bg-(--color-primary) text-black p-4 rounded cursor-pointer">Login</button>
                        <span className="self-center">Not have an account? <a href="/register" className="text-(--color-primary)">Register</a></span>
                        <span className="self-center">or</span>
                        <div className="flex justify-between gap-4 social-login">
                            <button className="flex items-center justify-center flex-1 gap-4 p-4 text-black bg-white rounded shadow-lg cursor-pointer"><img src={facebook_logo} alt="Facebook_Login_Icon" />Facebook</button>
                            <button className="flex items-center justify-center flex-1 gap-4 p-4 text-black bg-white rounded shadow-lg cursor-pointer"><img src={google_logo} alt="Google_Login_Icon" />Google</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}
export default Login