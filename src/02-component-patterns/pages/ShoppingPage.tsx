import { ProductButtons, ProductCard, ProductImage, ProductTitle } from "../components";
import { useShoppingCart } from "../hooks/useShoppingCart";


export const ShoppingPage = () => {
    const { products, shoppingCart, onProductCountChange } = useShoppingCart();

    return (
        <div>
            <h1 className="my-4">ShoppingPage</h1>
            <hr />
            <div className="flex">
                {
                    products.map(product => (
                        <ProductCard product={product} key={product.id} className="bg-gray-800" onChange={onProductCountChange} value={shoppingCart[product.id]?.count || 0}>
                            <ProductImage className="rounded-3xl p-3" style={{ boxShadow: "10px 10px 10px rgba(0,0,0,0.2)" }} />
                            <ProductTitle className="text-white font-bold" />
                            <ProductButtons className="text-white" />
                        </ProductCard>
                    ))
                }
                <div className="fixed right-[10px] top-0">
                    {
                        Object.entries(shoppingCart).map(([key, product]) => (
                            <ProductCard product={product} key={key} className="bg-gray-800 w-28" value={product.count} onChange={onProductCountChange}>
                                <ProductImage className="rounded-3xl p-3" style={{ boxShadow: "10px 10px 10px rgba(0,0,0,0.2)" }} />
                                <ProductButtons className="text-white" />
                            </ProductCard>
                        ))
                    }
                </div>
            </div>
        </div >
    );
};
