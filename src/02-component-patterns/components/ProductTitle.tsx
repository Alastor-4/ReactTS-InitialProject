import { useContext } from "react"
import { ProductContext } from "./ProductCard"

export interface Props {
    title?: string,
    className?: string
}

export const ProductTitle = ({ title, className }: Props): JSX.Element => {
    const { product } = useContext(ProductContext)
    return <span className={`m-3 text-lg ${className}`}>{title ? title : product.title}</span>
}
