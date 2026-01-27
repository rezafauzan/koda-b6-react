const ProductCard = () => {
    return (
        <div className="h-120 w-75 flex flex-col rounded overflow-hidden relative">
            <div className="h-80 overflow-hidden">
                <img src="/src/assets/img/image22.png" alt="Product_Name" className="w-full object-contain" />
            </div>
            <div className="h-fit flex flex-col gap-4 left-4 right-4 absolute bottom-0 p-4 bg-white shadow-lg rounded">
                <h3 className="text-xl font-bold">Hazzelnut Latte</h3>
                <p>You can explore the menu that we provide with fun and have their own taste and make your day better.</p>
                <span className="text-xl bold text-(--color-primary)">Rp.22000,-</span>
                <div class="flex gap-4 ">
                    <a href="detail-product.html?id=0" class="flex-4 px-4 py-2 bg-(--color-primary) hover:bg-(--color-primary-active) rounded flex justify-center items-center cursor-pointer">Buy</a>
                    <button class="px-4 py-2 border border-(--color-primary) rounded flex-1 flex justify-center items-center cursor-pointer">
                        <img src="/src/assets/img/ShoppingCart-yellow.svg" alt="cart_icon" />
                    </button>
                </div>
            </div>
        </div>
    )
}
export default ProductCard