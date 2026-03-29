import mail_icon from "/src/assets/img/mail.svg"
import brand_logo from "/src/assets/img/brand.svg"
import { useContext, useEffect, useRef, useState } from "react"
import UserContext from "/src/components/context/UserContext"
import Input from "/src/components/Input"
import { useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form"
import AlertContext from "../../components/context/AlertContext"
import http from "/src/lib/dataFetcher"

const ForgotPassword = () => {
    const [users, setUsers] = useState([])
    const { user } = useContext(UserContext)
    const { setAlert } = useContext(AlertContext)
    const { register, handleSubmit } = useForm()
    const navigator = useNavigate()

    async function requestOTP({ email }) {
        const body = {
            "email": email.trim().toLowerCase(),
        }
        console.log(email)
        const req = await http("/forgot-password/request", JSON.stringify(body), { method: "POST", headers: { "Content-Type": "application/json" } })
        const data = await req.json()

        if (data.success) {
            setAlert(['success', `Code OTP nya adalah : ${data.results.code_otp}`])
        } else {
            setAlert(['fail', data.messages])
        }
    }

    async function forgot({ remail, code_OTP, password, confirm_password }) {
        if (!remail || !code_OTP || !password || !confirm_password) {
            setAlert(['fail', 'Semua field wajib diisi'])
            return
        }

        if (password !== confirm_password) {
            setAlert(['fail', 'Password tidak sama'])
            return
        }
        const body = {
            email: remail.trim().toLowerCase(),
            code_otp: code_OTP,
            new_password: password,
            password_confirm: confirm_password
        }
        try {
            const req = await http("/forgot-password/reset", JSON.stringify(body), { method: "POST", headers: { "Content-Type": "application/json" } })
            const res = await req.json()

            if (res.success) {
                setAlert(['success', 'Password berhasil diubah'])
                navigator("/login")
            } else {
                setAlert(['fail', res.messages])
            }
        } catch (err) {
            console.error(err)
            setAlert(['fail', 'Terjadi kesalahan pada server'])
        }
    }

    useEffect(
        () => {
            const usersLocalStorage = JSON.parse(localStorage.getItem("users")) || []
            setUsers(usersLocalStorage)
            if (user != null) {
                navigator("/")
            }
        },
        [user]
    )
    return (
        <section>
            <div className="flex gap-4 w-full min-h-screen">
                <div className="hidden md:block bg-[url('../../assets/img/forgot.jpg')] bg-cover bg-center flex-1"></div>
                <div className="w-full flex flex-col justify-center items-center gap-4 p-10 flex-3 text-(--color-secondary)">
                    <div className="flex w-full flex-col justify-center gap-4 p-4 flex-3" onSubmit={handleSubmit(forgot)}>
                        <div className="brand">
                            <img src={brand_logo} alt="Coffee Shop" />
                        </div>
                        <h1 className="font-bold text-(--color-accent)">Forgot Password</h1>
                        <span>We will send new password to your email</span>
                        <form className="flex flex-col justify-center gap-4" onSubmit={handleSubmit(requestOTP)}>
                            <Input type="email" {...register("email")} labelName="Email" icon={mail_icon} placeholder="Enter email address" className="flex-4" required />
                            <div className="flex items-center gap-4">
                                <button className="bg-(--color-primary) text-black p-4 rounded cursor-pointer">Request OTP</button>
                            </div>
                        </form>
                        <form onSubmit={handleSubmit(forgot)} className="flex flex-col gap-4">
                            <Input type="email" {...register("remail")} labelName="Email" icon={mail_icon} placeholder="Enter email address" className="flex-4" required />
                            <Input type="text" {...register("code_OTP")} labelName="Code OTP" icon={mail_icon} placeholder="Enter OTP code" required />
                            <Input type="password" {...register("password")} labelName="Password" icon={mail_icon} placeholder="*******" required autoComplete="off" />
                            <Input type="password" {...register("confirm_password")} labelName="Confirm Password" icon={mail_icon} placeholder="********" required autoComplete="off"/>
                            <button className="bg-(--color-primary) text-black p-4 rounded cursor-pointer">Forgot Password</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default ForgotPassword