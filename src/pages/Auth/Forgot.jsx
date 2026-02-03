import mail_icon from "/src/assets/img/mail.svg"
import brand_logo from "/src/assets/img/brand.svg"
import { useContext, useEffect, useRef, useState } from "react"
import UserContext from "/src/components/context/UserContext"
import Input from "/src/components/Input"
import { useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form"
import { AiOutlineCloseCircle } from "react-icons/ai"

const ForgotPassword = () => {
    const [users, setUsers] = useState([])
    const [alert, setAlert] = useState([])
    const user = useContext(UserContext)
    const { register, handleSubmit } = useForm()
    const navigator = useNavigate()
    const modal = useRef()
    function modalRemove() {
        setAlert([])
        navigator("/login")
    }

    function forgot({ email }) {
        const registeredUsers = users
        const emailExist = registeredUsers.filter(user => user.email === email)
        if (emailExist.length > 0) {
            // setAlert(['success', 'Jika email terdaftar reset password telah dikirim ke email'])
        }
        if (email.length > 0) {
            setAlert(['success', 'Jika email terdaftar reset password telah dikirim ke email'])
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
                    {(alert[0] === "success" ? <div ref={modal} className="fixed top-0 left-0 right-0 bottom-0 bg-black/40 backdrop-blur-lg flex justify-center items-center"><div className="bg-green-400 text-green-700 w-[50%] h-[50%] flex items-center justify-center relative"><button type="button" className="text-red-700 w-10 h-10 absolute -top-4 -right-4 cursor-pointer" onClick={modalRemove}><AiOutlineCloseCircle className="text-red-700 w-10 h-10" /></button><span className="text-green-700 text-xl font-bold">{alert[1]}</span></div></div> : "")}
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