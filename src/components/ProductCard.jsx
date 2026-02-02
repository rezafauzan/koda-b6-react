import { BsCart3 } from "react-icons/bs";
import { Link } from "react-router-dom";

const ProductCard = ({ product = {}, showRating = false }) => {
    const {id, name, desc, images, price, discount, rating, review, stock} = product
    return (
        <div className="h-160 md:h-120 min-w-fit w-40 md:min-w-75 md:w-full flex flex-col rounded overflow-hidden relative">
            {(discount > 0.0 ? <div className="w-fit h-4 p-4 text-white bg-red-700 absolute top-4 left-4 flex flex-col justify-center items-center rounded-full"><span>Flash Sale</span></div> : stock < 1 ? <div className="w-fit h-4 p-4 text-white bg-red-700 absolute top-4 left-4 flex flex-col justify-center items-center rounded-full"><span>Out of Stock</span></div> : "")}
            <div className="h-80 overflow-hidden">
                <img src={images[0]} alt="Product_Name" className="w-full object-contain" />
            </div>
            <div className="h-fit flex flex-col gap-4 left-4 right-4 absolute bottom-0 p-4 bg-white shadow-lg rounded">
                <h3 className="text-xl font-bold">{name}</h3>
                <p>{desc}</p>
                <span className="text-xl bold text-(--color-primary)">
                    {(discount > 0.0 ? <span className="text-red-700 line-through text-xs">Rp.{price},-</span> : "")}
                    {(discount > 0.0 ? `Rp.${price- (price * discount)},-` : `Rp.${price},-`)}
                </span>
                <div className="flex flex-col md:flex-row gap-4">
                    <Link to={`/product/${id}`} className="flex-4 px-4 py-2 bg-(--color-primary) hover:bg-(--color-primary-active) rounded flex justify-center items-center cursor-pointer">Buy</Link>
                    <button className="px-4 py-2 border border-(--color-primary) rounded flex-1 flex justify-center items-center cursor-pointer">
                        <BsCart3 />
                    </button>
                </div>
            </div>
        </div>
    )
}
export default ProductCard