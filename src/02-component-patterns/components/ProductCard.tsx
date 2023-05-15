import { CSSProperties, ReactElement, createContext } from 'react';
import { useProduct } from '../hooks/useProducts';
import { Product, ProductContextProps } from '../interfaces/interfaces';

export const ProductContext = createContext({} as ProductContextProps);

const { Provider } = ProductContext;

export interface Props {
    product: Product,
    children?: ReactElement | ReactElement[],
    className?: string,
    style?: CSSProperties
}

export const ProductCard = ({ children, product, className, style }: Props) => {

    const { counter, calcValue } = useProduct();

    return (
        <Provider value={{ counter, calcValue, product }}>

            <div className={` rounded-2xl text-black pb-2 mt-2 ml-2 w-64 ${className}`} style={style}>
                {children}
            </div>
        </Provider>
    );
};