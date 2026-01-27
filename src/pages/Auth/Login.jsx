import mail_icon from "../../assets/img/mail.svg"
import password_icon from "../../assets/img/Password.svg"
import password_show_icon from "../../assets/img/EyeSlash.svg"
import brand_logo from "../../assets/img/brand.svg"
import facebook_logo from "../../assets/img/bx_bxl-facebook-circle.svg"
import google_logo from "../../assets/img/flat-color-icons_google.svg"

const Login = () => {
    return (
        <section>
            <div className="flex gap-4 w-full">
                <div className="hidden md:block bg-[url('../../assets/img/login.jpg')] bg-cover bg-center flex-1"></div>
                <div className="w-full flex flex-col justify-center items-center gap-4 p-10 flex-3 text-(--color-secondary)">
                    <form className="flex w-full flex-col justify-center gap-4 p-4 flex-3">
                        <div className="brand">
                            <img src={brand_logo} alt="Coffee Shop" />
                        </div>
                        <h1 className="font-bold text-(--color-accent)">Login</h1>
                        <span>Fill out the form correctly</span>
                        <label htmlFor="email" className="font-bold text-black">Email</label>
                        <label className="flex items-center gap-4 p-4 border rounded border-black/40">
                            <img src={mail_icon} alt="Email_Icon" />
                            <input type="email" name="email" id="email" placeholder="Enter your email" className="flex-1 outline-0" />
                        </label>
                        <label htmlFor="email" className="font-bold text-black">Password</label>
                        <label className="flex items-center gap-4 p-4 border rounded border-black/40">
                            <img src={password_icon} alt="Password_Icon" />
                            <input type="password" name="password" id="password" placeholder="Enter your password" className="flex-1 outline-0" />
                            <button type="button"><img src={password_show_icon} alt="Password_Icon" className="self-end h-4 cursor-pointer " /></button>
                        </label>
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