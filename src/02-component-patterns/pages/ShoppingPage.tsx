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
                <ProductCard product={product}>
                    <ProductCard.Image />
                    <ProductCard.Title />
                    <ProductCard.Buttons />
                </ProductCard>

                <ProductCard product={product}>
                    <ProductImage />
                    <ProductTitle />
                    <ProductButtons />
                </ProductCard>

            </div>
        </div>
    );
};
