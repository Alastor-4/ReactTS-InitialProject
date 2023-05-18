import { useContext, CSSProperties, useCallback } from 'react';
import { ProductContext } from "./ProductCard"

export interface Props {
    className?: string,
    style?: CSSProperties,
}

export const ProductButtons = ({ className, style }: Props): JSX.Element => {
    const { counter, calcValue, maxCount } = useContext(ProductContext)

    const isMaxReached = useCallback(
        () => !!maxCount && counter === maxCount,
        [counter, maxCount],
    )

    return (
        <div className={`m-3 flex flex-row ${className}`} style={style}>
            <button className="cursor-pointer bg-transparent border-[1px] border-solid border-white hover:bg-gray-200 hover:text-gray-900 rounded-l-md text-xl w-[30px]" onClick={() => calcValue(-1)}>-</button>
            <div className="border-t-[1px] border-b-[1px] text-base text-center border-solid border-white pt-[5px] h-9 w-[30px]">{counter}
            </div>
            <button className={`${(isMaxReached()) ? "border-r-gray-700 text-gray-700 border-t-gray-700 border-b-gray-700" : "border-white"} cursor-pointer bg-transparent border-[1px] border-solid hover:bg-gray-200 hover:text-gray-900 border-white rounded-r-md text-xl w-[30px]`} onClick={() => calcValue(1)}>+</button>
        </div>)
}