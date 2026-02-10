import mail_icon from "/src/assets/img/mail.svg"
import brand_logo from "/src/assets/img/brand.svg"
import { useContext, useEffect, useRef, useState } from "react"
import UserContext from "/src/components/context/UserContext"
import Input from "/src/components/Input"
import { useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form"

const ForgotPassword = () => {
    const [users, setUsers] = useState([])
    const { user, setAlert } = useContext(UserContext)
    const { register, handleSubmit } = useForm()
    const navigator = useNavigate()

    function forgot({ email }) {
        const registeredUsers = users
        const emailExist = registeredUsers.filter(user => user.email === email)
        if (emailExist.length > 0) {

        }
        if (email.length > 0) {
            setAlert(['success', 'Jika email terdaftar reset password telah dikirim ke email'])
            navigator("/login")
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
            <div className="flex gap-4 w-full min-h-screen">
                <div className="hidden md:block bg-[url('../../assets/img/forgot.jpg')] bg-cover bg-center flex-1"></div>
                <div className="w-full flex flex-col justify-center items-center gap-4 p-10 flex-3 text-(--color-secondary)">
                    <form className="flex w-full flex-col justify-center gap-4 p-4 flex-3" onSubmit={handleSubmit(forgot)}>
                        <div className="brand">
                            <img src={brand_logo} alt="Coffee Shop" />
                        </div>
                        <h1 className="font-bold text-(--color-accent)">Forgot Password</h1>
                        <span>We will send new password to your email</span>
                        <Input type="email" {...register("email")} labelName="Email" icon={mail_icon} placeholder="Enter email address" required />
                        <button className="bg-(--color-primary) text-black p-4 rounded cursor-pointer">Forgot Password</button>
                    </form>
                </div>
            </div>
        </section>
    )
}
export default ForgotPassword