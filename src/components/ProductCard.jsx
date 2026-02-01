import { BsCart3 } from "react-icons/bs";

const ProductCard = ({ flashsale = false, discount = 10 / 100 }) => {
    return (
        <div className="h-140 md:h-120 min-w-fit w-40 md:min-w-75 md:w-full flex flex-col rounded overflow-hidden relative">
            {(flashsale ? <div className="w-fit h-4 p-4 text-white bg-red-700 absolute top-4 left-4 flex flex-col justify-center items-center rounded-full"><span>Flash Sale</span></div> : '')}
            <div className="h-80 overflow-hidden">
                <img src="/assets/img/image22.png" alt="Product_Name" className="w-full object-contain" />
            </div>
            <div className="h-fit flex flex-col gap-4 left-4 right-4 absolute bottom-0 p-4 bg-white shadow-lg rounded">
                <h3 className="text-xl font-bold">Hazzelnut Latte</h3>
                <p>You can explore the menu that we provide with fun and have their own taste and make your day better.</p>
                <span className="text-xl bold text-(--color-primary)">{(flashsale ? <span className="text-red-700 line-through text-xs">Rp.22000,-</span> : "")} Rp.{22000 - (22000 * discount)},-</span>
                <div className="flex flex-col md:flex-row gap-4">
                    <a href="/product/0" className="flex-4 px-4 py-2 bg-(--color-primary) hover:bg-(--color-primary-active) rounded flex justify-center items-center cursor-pointer">Buy</a>
                    <button className="px-4 py-2 border border-(--color-primary) rounded flex-1 flex justify-center items-center cursor-pointer">
                        <BsCart3 />
                    </button>
                </div>
            </div>
        </div>
    )
}
export default ProductCard