import mail_icon from "../../assets/img/mail.svg"
import password_icon from "../../assets/img/Password.svg"
import password_show_icon from "../../assets/img/EyeSlash.svg"
import brand_logo from "../../assets/img/brand.svg"
import facebook_logo from "../../assets/img/bx_bxl-facebook-circle.svg"
import google_logo from "../../assets/img/flat-color-icons_google.svg"
import Input from "../../components/Input"

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
                        <Input type="email" name="Email" icon={mail_icon} placeholder="Enter email address"/>
                        <Input type="password" name="Password" icon={password_icon} placeholder="Enter your password"/>
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