import { CSSProperties, createContext } from 'react';
import { useProduct } from '../hooks/useProducts';
import { Product, ProductContextProps, onChangeArgs, InitialValues, ProductCardHandlers } from '../interfaces/interfaces';

export const ProductContext = createContext({} as ProductContextProps);

const { Provider } = ProductContext;

export interface Props {
    product: Product;
    // children?: ReactElement | ReactElement[];
    children: (args: ProductCardHandlers) => JSX.Element;
    className?: string;
    style?: CSSProperties;
    onChange?: (args: onChangeArgs) => void;
    value?: number;
    initialValues?: InitialValues
}

export const ProductCard = ({ children, product, className, style, onChange, value, initialValues }: Props) => {

    const { counter, calcValue, maxCount, isMaxCountReached, reset } = useProduct({ onChange, product, value, initialValues });


    return (
        <Provider value={{ counter, calcValue, product, maxCount }}>

            <div className={` rounded-2xl text-black pb-2 mt-2 ml-2 w-64 ${className}`} style={style}>
                {children({ count: counter, isMaxReached: isMaxCountReached, maxCount: initialValues?.maxCount, reset, calcValue, product })}
            </div>
        </Provider>
    );
};