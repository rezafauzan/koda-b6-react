import profile_icon from "/src/assets/img/Profile.svg"
import mail_icon from "/src/assets/img/mail.svg"
import password_icon from "/src/assets/img/Password.svg"
import brand_logo from "/src/assets/img/brand.svg"
import facebook_logo from "/src/assets/img/bx_bxl-facebook-circle.svg"
import google_logo from "/src/assets/img/flat-color-icons_google.svg"
import phone_icon from "/src/assets/img/PhoneCall.svg"
import location_icon from "/src/assets/img/Location.svg"
import Input from "/src/components/Input"
import { registerValidation } from "/src/lib/authLogic"
import { useForm } from "react-hook-form"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { useEffect, useState } from "react"

const Register = () => {
    const [users, setUsers] = useState([])
    useEffect(
        () => {
            const usersLocalStorage = JSON.parse(localStorage.getItem("users")) || []
            setUsers(usersLocalStorage)
        },
        []
    )
    const validator = yup.object({
        fullname: yup.string("Nama tidak valid"),
        email: yup.string("Email tidak valid").required("Email harus diisi").min(4, "Email terlalu pendek").email("Email tidak valid"),
        phone: yup.string("Nomor telepon tidak valid").required("Nomor telepon harus diisi").min(10, "Nomor telepon terlalu pendek minimal 10 digit"),
        address: yup.string("Alamat tidak valid").required("Alamat harus diisi").min(10, "Alamat terlalu pendek minimal 10 karakter"),
        password: yup.string("Password tidak valid").required("Password harus diisi").min(8, "Password minimal 8 karakter"),
        confirmPassword: yup.string("Konfirmasi Password tidak valid").required("Konfirmasi Password harus diisi"),
    })
    const { register, handleSubmit, formState } = useForm({ resolver: yupResolver(validator) })
    function submit({ fullname = "", email = "", phone = "", address = "", password = "", confirmPassword = "" }) {
        const registeredUsers = users
        registeredUsers.push(
            {
                fullname: fullname,
                email: email,
                phone: phone,
                address: address,
                password: password,
                confirmPassword: confirmPassword
            }
        )
        setUsers(registeredUsers)
    }

    return (
        <section>
            <div className="flex gap-4 w-full">
                <div className="hidden md:block bg-[url('../../assets/img/register.jpg')] bg-cover bg-center flex-1"></div>
                <div className="w-full flex flex-col justify-center items-center gap-4 p-10 flex-3 text-(--color-secondary)">
                    <form className="flex w-full flex-col justify-center gap-4 p-4 flex-3" onSubmit={handleSubmit(submit)}>
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