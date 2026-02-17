import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"
import UserContext from "../../components/context/UserContext"
import { useContext } from "react"

const PaymentLayout = () => {
    const { user } = useContext(UserContext)
    return (
        <div className="container max-w-360 mx-auto flex flex-col">
            <Navbar theme={"dark"} />
            <section>
                <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className="flex flex-col gap-4 col-span-1 md:col-span-2">
                        <div className="flex flex-col col-span-1 md:col-span-2 lg:flex-row gap-4 p-4">
                            <h1 className="text-4xl font-bold">Profile</h1>
                        </div>
                        <div className="flex flex-col lg:flex-row gap-4 p-4 flex-1 ">
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default PaymentLayout