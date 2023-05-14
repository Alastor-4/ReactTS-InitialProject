import { createContext } from 'react';
import { useProduct } from '../hooks/useProducts';
import { ProductContextProps, ProductCardProps } from '../interfaces/interfaces';

export const ProductContext = createContext({} as ProductContextProps);

const { Provider } = ProductContext;
export const ProductCard = ({ children, product }: ProductCardProps) => {

    const { counter, calcValue } = useProduct();

    return (
        <Provider value={{ counter, calcValue, product }}>

            <div className="bg-white rounded-2xl text-black pb-2 mt-2 ml-2 w-64">
                {children}
            </div>
        </Provider>
    );
};