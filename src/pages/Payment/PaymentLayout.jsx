import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"
import { Outlet } from "react-router-dom"

const PaymentLayout = () => {
    return (
        <div className="container max-w-360 mx-auto flex flex-col">
            <Navbar theme={"dark"} />
            <Outlet />
            <Footer />
        </div>
    )
}

export default PaymentLayout