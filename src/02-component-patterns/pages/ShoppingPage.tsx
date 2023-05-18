import { ProductButtons, ProductCard, ProductImage, ProductTitle } from "../components";
import { products } from "../data/products";

const product = products[0];
export const ShoppingPage = () => {

    return (
        <div>
            <h1 className="my-4">ShoppingPage</h1>
            <hr />
            <div className="flex">
                <ProductCard product={product} key={product.id} className="bg-gray-800" initialValues={{ count: 3, maxCount: 10 }}>
                    {
                        ({ reset, count, calcValue, isMaxReached }) => (
                            <>
                                <ProductImage className="rounded-3xl p-3" style={{ boxShadow: "10px 10px 10px rgba(0,0,0,0.2)" }} />
                                <ProductTitle className="text-white font-bold" />
                                <ProductButtons className="text-white" />
                                <button className="m-3 bg-white text-black w-14 rounded-xl border-solid border-gray-700 text-lg font-bold" onClick={reset}>Reset</button>
                                <button className="mr-2 bg-white text-black w-8 rounded-xl border-solid border-gray-700 text-lg font-bold" onClick={() => calcValue(-2)}>-2</button>
                                {
                                    (!isMaxReached && <button className="bg-white text-black w-8 rounded-xl border-solid border-gray-700 text-lg font-bold" onClick={() => calcValue(2)}>+2</button>)
                                }
                                <span className="m-3 text-white text-lg" >{count}</span>
                            </>
                        )
                    }
                </ProductCard>
            </div>
        </div >
    );
};
