import { useContext, CSSProperties } from 'react';
import { ProductContext } from './ProductCard';
import noImage from '../assets/no-image.jpg'

export interface Props {
    img?: string,
    className?: string,
    style?: CSSProperties
}

export const ProductImage = ({ img = '', className, style }: Props): JSX.Element => {
    const { product } = useContext(ProductContext);
    let imageToShow: string;
    if (img) {
        imageToShow = img;
    } else if (product.img) {
        imageToShow = product.img
    } else {
        imageToShow = noImage
    }
    return <img className={`w-full ${className}`} style={style} src={imageToShow} alt="Product" />
}