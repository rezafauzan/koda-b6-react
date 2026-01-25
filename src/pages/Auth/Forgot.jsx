import Section from "../../components/Section"
import mail_icon from "../../assets/img/mail.svg"
import brand_logo from "../../assets/img/brand.svg"

const ForgotPassword = () => {
    return (
        <Section>
            <div className="hidden md:block bg-[url('../../assets/img/forgot.jpg')] bg-cover bg-center side-image flex-1"></div>
            <div className="container flex flex-col justify-center gap-4 p-4 flex-3 text-(--color-secondary)">
                <form className="flex flex-col justify-center gap-4 p-4 flex-3">
                    <div className="brand">
                        <img src={brand_logo} alt="Coffee Shop" />
                    </div>
                    <h1 className="font-bold text-(--color-accent)">Forgot Password</h1>
                    <span>We will send new password to your email</span>
                    <label htmlFor="email" className="font-bold text-black">Email</label>
                    <label className="flex items-center gap-4 p-4 border rounded border-black/40">
                        <img src={mail_icon} alt="Email_Icon" />
                        <input type="email" name="email" id="email" placeholder="Enter your email" className="flex-1 outline-0" />
                    </label>
                    <button className="bg-(--color-primary) text-black p-4 rounded cursor-pointer">Forgot Password</button>
                </form>
            </div>
        </Section>
    )
}
export default ForgotPassword