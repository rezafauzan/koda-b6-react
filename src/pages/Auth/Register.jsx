import { AiOutlineCloseCircle } from "react-icons/ai";
import profile_icon from "/src/assets/img/Profile.svg"
import mail_icon from "/src/assets/img/mail.svg"
import password_icon from "/src/assets/img/Password.svg"
import brand_logo from "/src/assets/img/brand.svg"
import facebook_logo from "/src/assets/img/bx_bxl-facebook-circle.svg"
import google_logo from "/src/assets/img/flat-color-icons_google.svg"
import phone_icon from "/src/assets/img/PhoneCall.svg"
import location_icon from "/src/assets/img/Location.svg"
import Input from "/src/components/Input"
import { useForm } from "react-hook-form"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { useContext, useEffect, useRef, useState } from "react"
import UserContext from "/src/components/context/UserContext";
import { useNavigate } from "react-router-dom";

const Register = () => {
    const [users, setUsers] = useState([])
    const [alert, setAlert] = useState([])
    const modal = useRef()
    const user = useContext(UserContext)
    const navigator = useNavigate()

    function modalRemove() {
        setAlert([])
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
    const validator = yup.object({
        fullname: yup.string("Nama tidak valid").required("Nama harus diisi").min(4, "Nama minimal 4 karakter"),
        email: yup.string("Email tidak valid").required("Email harus diisi").min(4, "Email terlalu pendek").email("Email tidak valid"),
        phone: yup.string("Nomor telepon tidak valid").required("Nomor telepon harus diisi").min(10, "Nomor telepon terlalu pendek minimal 10 digit"),
        address: yup.string("Alamat tidak valid").required("Alamat harus diisi").min(10, "Alamat terlalu pendek minimal 10 karakter"),
        password: yup.string("Password tidak valid").required("Password harus diisi").min(8, "Password minimal 8 karakter"),
        confirmPassword: yup.string("Konfirmasi Password tidak valid").required("Konfirmasi Password harus diisi").oneOf([yup.ref("password")], "Konfirmasi Password tidak sama")
    })
    const { register, handleSubmit, formState } = useForm({ resolver: yupResolver(validator) })
    function signUp({ fullname = "", email = "", phone = "", address = "", password = "", confirmPassword = "" }) {
        const registeredUsers = users
        const emailExist = registeredUsers.filter(user => user.email === email)
        if (emailExist.length > 0) {
            setAlert(['fail', 'Email sudah terdaftar silahkan login'])
        } else {
            registeredUsers.push(
                {
                    avatar: "https://i.pravatar.cc/400?img=54",
                    fullname: fullname.trim(),
                    email: email.trim(),
                    phone: phone.trim(),
                    address: address.trim(),
                    password: password.trim(),
                    confirmPassword: confirmPassword.trim(),
                    role: "user"
                }
            )
            setUsers(registeredUsers)
            window.localStorage.setItem("users", JSON.stringify(users))
            setAlert(['success', 'Registrasi berhasil silahkan login'])
            navigator("/login")
        }
    }

    return (
        <section>
            <div className="flex gap-4 w-full">
                <div className="hidden md:block bg-[url('../../assets/img/register.jpg')] bg-cover bg-center flex-1"></div>
                <div className="w-full flex flex-col justify-center items-center gap-4 p-10 flex-3 text-(--color-secondary)">
                    {(alert[0] === "success" ? <div ref={modal} className="fixed top-0 left-0 right-0 bottom-0 bg-black/40 backdrop-blur-lg flex justify-center items-center"><div className="bg-green-400 text-green-700 w-[50%] h-[50%] flex items-center justify-center relative"><button type="button" className="text-red-700 w-10 h-10 absolute -top-4 -right-4 cursor-pointer" onClick={modalRemove}><AiOutlineCloseCircle className="text-red-700 w-10 h-10" /></button><span className="text-green-700 text-xl font-bold">{alert[1]}</span></div></div> : "")}
                    {(alert[0] === "fail" ? <div ref={modal} className="fixed top-0 left-0 right-0 bottom-0 bg-black/40 backdrop-blur-lg flex justify-center items-center"><div className="bg-red-400 text-red-700 w-[50%] h-[50%] flex items-center justify-center relative"><button type="button" className="text-red-700 w-10 h-10 absolute -top-4 -right-4 cursor-pointer" onClick={modalRemove}><AiOutlineCloseCircle className="text-red-700 w-10 h-10" /></button><span className="text-red-700 text-xl font-bold">{alert[1]}</span></div></div> : "")}
                    <form className="flex w-full flex-col justify-center gap-4 p-4 flex-3" onSubmit={handleSubmit(signUp)}>
                        <div className="brand">
                            <img src={brand_logo} alt="Coffee Shop" />
                        </div>
                        <h1 className="font-bold text-(--color-accent)">Register</h1>
                        <span>Fill out the form correctly</span>
                        <Input type="text" {...register("fullname")} labelName="Fullname" icon={profile_icon} placeholder="Enter your fullname" />
                        {formState.errors.fullname && (<span className="bg-red-400 p-4 rounded border border-red-700 text-red-700">{formState.errors.fullname.message}</span>)}
                        <Input type="email" {...register("email")} labelName="Email" icon={mail_icon} placeholder="Enter your email address" required />
                        {formState.errors.email && (<span className="bg-red-400 p-4 rounded border border-red-700 text-red-700">{formState.errors.email.message}</span>)}
                        <Input type="text" {...register("phone")} labelName="Phone" icon={phone_icon} placeholder="Enter your phone number" required />
                        {formState.errors.phone && (<span className="bg-red-400 p-4 rounded border border-red-700 text-red-700">{formState.errors.phone.message}</span>)}
                        <Input type="text" {...register("address")} labelName="Address" icon={location_icon} placeholder="Enter your address" required />
                        {formState.errors.address && (<span className="bg-red-400 p-4 rounded border border-red-700 text-red-700">{formState.errors.address.message}</span>)}
                        <Input type="password" {...register("password")} labelName="Password" icon={password_icon} placeholder="Enter your password" required autoComplete="off" />
                        {formState.errors.password && (<span className="bg-red-400 p-4 rounded border border-red-700 text-red-700">{formState.errors.password.message}</span>)}
                        <Input type="password" {...register("confirmPassword")} labelName="Confirm Password" icon={password_icon} placeholder="Confirm your password" required autoComplete="off" />
                        {formState.errors.confirmPassword && (<span className="bg-red-400 p-4 rounded border border-red-700 text-red-700">{formState.errors.confirmPassword.message}</span>)}
                        <button className="bg-(--color-primary) text-black p-4 rounded cursor-pointer">Register</button>
                        <span className="self-center">have an account? <a href="/login" className="text-(--color-primary)">Login</a></span>
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
export default Register