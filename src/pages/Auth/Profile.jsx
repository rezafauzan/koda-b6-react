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
import { useNavigate } from "react-router-dom"
import http from "/src/lib/dataFetcher"
import AlertContext from "../../components/context/AlertContext"

const Profile = () => {
    const { user, setUser } = useContext(UserContext)
    const [userCredentials, setUserCredentials] = useState(null)
    const navigator = useNavigate()
    const [loading, setLoading] = useState(true)
    const { setAlert } = useContext(AlertContext)

    useEffect(() => {
        const checkAuth = async () => {
            const token = localStorage.getItem("token")

            if (!token) {
                setLoading(false)
                navigator("/")
            }
            try {
                const res = await http("/profile", null, { token })
                const data = await res.json()
                if (!data.success) {
                    throw new Error("Token invalid")
                }
                setUser(data.data)
                const resCred = await http("/user-credentials", null, { token })
                const dataCred = await resCred.json()
                if (!dataCred.success) {
                    throw new Error("Token invalid")
                }
                setUserCredentials(dataCred.data)
            } catch (err) {
                localStorage.removeItem("token")
            } finally {
                setLoading(false)
            }
        }
        checkAuth()
    }, [])

    const validator = yup.object({
        first_name: yup.string("Nama Depan tidak valid").required("Nama Depan harus diisi").min(4, "Nama Depan minimal 4 karakter"),
        last_name: yup.string("Nama Belakang tidak valid").required("Nama Belakang harus diisi").min(4, "Nama Belakang minimal 4 karakter"),
        email: yup.string("Email tidak valid").required("Email harus diisi").min(4, "Email terlalu pendek").email("Email tidak valid"),
        phone: yup.string("Nomor telepon tidak valid").required("Nomor telepon harus diisi").min(10, "Nomor telepon terlalu pendek minimal 10 digit"),
        address: yup.string("Alamat tidak valid").required("Alamat harus diisi").min(10, "Alamat terlalu pendek minimal 10 karakter"),
        password: yup.string("Password tidak valid"),
    })
    const { register, handleSubmit, formState } = useForm(
        {
            resolver: yupResolver(validator)
        }
    )

    async function editUser({ first_name = "", last_name = "", email = "", phone = "", address = "", password = "" }) {
        const token = localStorage.getItem("token")

        if (!token) {
            navigator("/")
        }
        const user =
        {
            avatar: "https://i.pravatar.cc/400?img=54",
            first_name: first_name.trim(),
            last_name: last_name.trim(),
            email: email.trim(),
            phone: phone.trim(),
            address: address.trim()
        }
        if (password) {
            user.password = password.trim()
        }

        const res = await http("/profile", JSON.stringify(user), { method: "PATCH", headers: { "Content-Type": "application/json" }, token })
        const data = await res.json()
        if (!data.success) {
            setAlert(['fail', 'Data tidak berhasil diubah token invalid silahkan login kembali!'])
            const token = localStorage.removeItem("token")
        }
        setAlert(['success', 'Data berhasil diubah !'])
    }

    if (loading && !user && !userCredentials) {
        return (<div>Loading...</div>)
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
                                    <span className="text-xl font-bold">{user?.first_name + " " + user?.last_name}</span>
                                    <span className="font-bold">{user?.email}</span>
                                    <div className="w-40 h-40 bg-black rounded-full overflow-hidden">
                                        <img src={user?.user_avatar} alt={user?.fullname} />
                                    </div>
                                    <label htmlFor="profile" className="w-full h-10 px-4 flex justify-center items-center bg-(--color-primary) text-white rounded">
                                        <span>Upload new profile picture</span>
                                        <input type="file" name="profile" id="profile" className="hidden" />
                                    </label>
                                </div>
                                <div className="flex-3 border border-black/10 p-4">
                                    <form className="flex w-full flex-col justify-center gap-4 p-4 flex-3" onSubmit={handleSubmit(editUser)}>
                                        <Input type="text" {...register("first_name")} labelName="First Name" icon={profile_icon} placeholder="Enter your first name" value={user?.first_name} />
                                        {formState.errors.first_name && (<span className="bg-red-400 p-4 rounded border border-red-700 text-red-700">{formState.errors.first_name.message}</span>)}
                                        <Input type="text" {...register("last_name")} labelName="Last Name" icon={profile_icon} placeholder="Enter your last name" value={user?.last_name} />
                                        {formState.errors.last_name && (<span className="bg-red-400 p-4 rounded border border-red-700 text-red-700">{formState.errors.last_name.message}</span>)}
                                        <Input type="email" {...register("email")} labelName="Email" icon={mail_icon} placeholder="Enter your email address" required value={userCredentials?.email} />
                                        {formState.errors.email && (<span className="bg-red-400 p-4 rounded border border-red-700 text-red-700">{formState.errors.email.message}</span>)}
                                        <Input type="text" {...register("phone")} labelName="Phone" icon={phone_icon} placeholder="Enter your phone number" required value={userCredentials?.phone} />
                                        {formState.errors.phone && (<span className="bg-red-400 p-4 rounded border border-red-700 text-red-700">{formState.errors.phone.message}</span>)}
                                        <Input type="text" {...register("address")} labelName="Address" icon={location_icon} placeholder="Enter your address" required value={user?.address} />
                                        {formState.errors.address && (<span className="bg-red-400 p-4 rounded border border-red-700 text-red-700">{formState.errors.address.message}</span>)}
                                        <Input type="password" {...register("password")} labelName="New Password" icon={password_icon} placeholder="Enter your password" autoComplete="off" />
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