import mail_icon from "../../assets/img/mail.svg"
import brand_logo from "../../assets/img/brand.svg"

const ForgotPassword = () => {
    return (
        <section>
            <div className="flex gap-4 w-full min-h-screen">
                <div className="hidden md:block bg-[url('../../assets/img/forgot.jpg')] bg-cover bg-center flex-1"></div>
                <div className="w-full flex flex-col justify-center items-center gap-4 p-10 flex-3 text-(--color-secondary)">
                    <form className="flex w-full flex-col justify-center gap-4 p-4 flex-3">
                        <div className="brand">
                            <img src={brand_logo} alt="Coffee Shop" />
                        </div>
                        <h1 className="font-bold text-(--color-accent)">Forgot Password</h1>
                        <span>We will send new password to your email</span>
                        <Input type="email" name="Email" icon={mail_icon} placeholder="Enter email address" />
                        <button className="bg-(--color-primary) text-black p-4 rounded cursor-pointer">Forgot Password</button>
                    </form>
                </div>
            </div>
        </section>
    )
}
export default ForgotPassword