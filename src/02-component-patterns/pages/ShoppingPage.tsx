import { ProductButtons, ProductCard, ProductImage, ProductTitle } from "../components";

const product = {
    id: "1",
    title: "Coffee Mug - Card",
    img: './coffee-mug.png'
}

export const ShoppingPage = () => {
    return (
        <div>
            <h1 className="my-4">ShoppingPage</h1>
            <hr />
            <div className="flex">
                <ProductCard product={product} className="bg-gray-800">
                    <ProductCard.Image className="rounded-3xl p-3" />
                    <ProductCard.Title className="text-white font-bold" />
                    <ProductCard.Buttons className="text-white" />
                </ProductCard>

                <ProductCard product={product} className="bg-gray-800" style={{ backgroundColor: "gray" }}>
                    <ProductImage className="rounded-3xl p-3" style={{ boxShadow: "10px 10px 10px rgba(0,0,0,0.2)" }} />
                    <ProductTitle className="text-white font-bold" />
                    <ProductButtons className="text-white" />
                </ProductCard>

            </div>
        </div >
    );
};
