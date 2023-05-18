import { useContext, CSSProperties } from 'react';
import { ProductContext } from "./ProductCard"

export interface Props {
    className?: string,
    style?: CSSProperties,
}

export const ProductButtons = ({ className, style }: Props): JSX.Element => {
    const { counter, calcValue } = useContext(ProductContext)
    return (
        <div className={`m-3 flex flex-row ${className}`} style={style}>
            <button className="cursor-pointer bg-transparent border-[1px] border-solid hover:bg-gray-200 hover:text-gray-900 border-black rounded-l-md text-xl w-[30px]" onClick={() => calcValue(-1)}>-</button>
            <div className="border-t-[1px] border-b-[1px] text-base text-center border-solid border-black pt-[5px] h-9 w-[30px]">{counter}
            </div>
            <button className="cursor-pointer bg-transparent border-[1px] border-solid hover:bg-gray-200 hover:text-gray-900 border-black rounded-r-md text-xl w-[30px]" onClick={() => calcValue(1)}>+</button>
        </div>)
}