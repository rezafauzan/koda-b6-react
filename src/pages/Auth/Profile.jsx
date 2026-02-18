import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"
import Input from "../../components/Input"
import profile_icon from "/src/assets/img/Profile.svg"
import mail_icon from "/src/assets/img/mail.svg"
import password_icon from "/src/assets/img/Password.svg"
import brand_logo from "/src/assets/img/brand.svg"
import phone_icon from "/src/assets/img/PhoneCall.svg"
import location_icon from "/src/assets/img/Location.svg"
import UserContext from "../../components/context/UserContext"
import * as yup from "yup"
import { useContext, useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"

const Profile = () => {
    const { user } = useContext(UserContext)
    const [users, setUsers] = useState([])
    useEffect(
        () => {
            const usersLocalStorage = JSON.parse(localStorage.getItem("users")) || []
            setUsers(usersLocalStorage)
            if (user.role == null) {
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
    })
    const { register, handleSubmit, formState } = useForm(
        {
            defaultValues: {
                fullname: user.fullname,
                email: user.email,
                phone: user.phone,
                address: user.address,
            },
            resolver: yupResolver(validator)
        }
    )

    function editUser({ fullname = "", email = "", phone = "", address = "", password = "" }) {
        const registeredUsers = users
        const emailExist = registeredUsers.find(user => user.email === email)
        if (emailExist.length > 0) {
            const user =
            {
                avatar: "https://i.pravatar.cc/400?img=54",
                fullname: fullname.trim(),
                email: email.trim(),
                phone: phone.trim(),
                address: address.trim(),
                password: password.trim(),
            }
            setUser(user)
            setAlert(['success', 'Data berhasil diubah !'])
        }
    }
    return (
        <div className="container max-w-360 mx-auto flex flex-col">
            <Navbar theme={"dark"} />
            <section>
                <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className="flex flex-col col-span-1 md:col-span-2">
                        <div className="flex flex-col col-span-1 md:col-span-2 lg:flex-row gap-4 p-4">
                            <h1 className="text-4xl font-bold">Profile</h1>
                        </div>
                        <div className="flex flex-col lg:flex-row gap-4 p-4 flex-1 ">
                            <div className="flex justify-center gap-4 w-full">
                                <div className="flex-1 h-fit flex flex-col justify-center items-center gap-4 border border-black/10 p-4">
                                    <span className="text-xl font-bold">{user.fullname}</span>
                                    <span className="font-bold">{user.email}</span>
                                    <div className="w-40 h-40 bg-black rounded-full overflow-hidden">
                                        <img src={user.avatar} alt={user.fullname} />
                                    </div>
                                    <label htmlFor="profile" className="w-full h-10 px-4 flex justify-center items-center bg-(--color-primary) text-white rounded">
                                        <span>Upload new profile picture</span>
                                        <input type="file" name="profile" id="profile" className="hidden" />
                                    </label>
                                </div>
                                <div className="flex-3 border border-black/10 p-4">
                                    <form className="flex w-full flex-col justify-center gap-4 p-4 flex-3" onSubmit={handleSubmit(editUser)}>
                                        <Input type="text" {...register("fullname")} labelName="Fullname" icon={profile_icon} placeholder="Enter your fullname" />
                                        {formState.errors.fullname && (<span className="bg-red-400 p-4 rounded border border-red-700 text-red-700">{formState.errors.fullname.message}</span>)}
                                        <Input type="email" {...register("email")} labelName="Email" icon={mail_icon} placeholder="Enter your email address" required />
                                        {formState.errors.email && (<span className="bg-red-400 p-4 rounded border border-red-700 text-red-700">{formState.errors.email.message}</span>)}
                                        <Input type="text" {...register("phone")} labelName="Phone" icon={phone_icon} placeholder="Enter your phone number" required />
                                        {formState.errors.phone && (<span className="bg-red-400 p-4 rounded border border-red-700 text-red-700">{formState.errors.phone.message}</span>)}
                                        <Input type="text" {...register("address")} labelName="Address" icon={location_icon} placeholder="Enter your address" required />
                                        {formState.errors.address && (<span className="bg-red-400 p-4 rounded border border-red-700 text-red-700">{formState.errors.address.message}</span>)}
                                        <Input type="password" {...register("password")} labelName="New Password" icon={password_icon} placeholder="Enter your password" required autoComplete="off" />
                                        {formState.errors.password && (<span className="bg-red-400 p-4 rounded border border-red-700 text-red-700">{formState.errors.password.message}</span>)}
                                        <button className="bg-(--color-primary) text-white p-4 rounded cursor-pointer">Edit</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default Profile