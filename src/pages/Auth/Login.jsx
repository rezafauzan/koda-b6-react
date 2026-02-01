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

const Login = ({ setUser }) => {
    const user = useContext(UserContext)
    const [users, setUsers] = useState([])
    const [alert, setAlert] = useState([])
    const { register, handleSubmit } = useForm()
    const modal = useRef()
    const navigator = useNavigate()

    function modalRemove() {
        setAlert([])
    }

    function login({ email, password }) {
        const userFound = users.find(user => user.email === email.trim())
        if (userFound.email != null) {
            if (password === userFound.password) {
                window.localStorage.setItem("user", JSON.stringify({ email: userFound.email, role: userFound.role }))
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
        []
    )

    return (
        <section>
            <div className="flex gap-4 w-full">
                <div className="hidden md:block bg-[url('../../assets/img/login.jpg')] bg-cover bg-center flex-1"></div>
                <div className="w-full flex flex-col justify-center items-center gap-4 p-10 flex-3 text-(--color-secondary)">
                    {(alert[0] === "success" ? <div ref={modal} className="fixed top-0 left-0 right-0 bottom-0 bg-black/40 backdrop-blur-lg flex justify-center items-center"><div className="bg-green-400 text-green-700 w-[50%] h-[50%] flex items-center justify-center relative"><button type="button" className="text-red-700 w-10 h-10 absolute -top-4 -right-4 cursor-pointer" onClick={modalRemove}><AiOutlineCloseCircle className="text-red-700 w-10 h-10" /></button><span className="text-green-700 text-xl font-bold">{alert[1]}</span></div></div> : "")}
                    {(alert[0] === "fail" ? <div ref={modal} className="fixed top-0 left-0 right-0 bottom-0 bg-black/40 backdrop-blur-lg flex justify-center items-center"><div className="bg-red-400 text-red-700 w-[50%] h-[50%] flex items-center justify-center relative"><button type="button" className="text-red-700 w-10 h-10 absolute -top-4 -right-4 cursor-pointer" onClick={modalRemove}><AiOutlineCloseCircle className="text-red-700 w-10 h-10" /></button><span className="text-red-700 text-xl font-bold">{alert[1]}</span></div></div> : "")}
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