import { useContext } from "react"
import { ProductContext } from "./ProductCard"

export const ProductTitle = ({ title }: { title?: string }): JSX.Element => {
    const { product } = useContext(ProductContext)
    return <span className="m-3 text-lg">{title ? title : product.title}</span>
}
