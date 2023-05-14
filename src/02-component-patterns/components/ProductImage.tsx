import { useContext } from 'react';
import { ProductContext } from './ProductCard';
import noImage from '../assets/no-image.jpg'

export const ProductImage = ({ img = '' }): JSX.Element => {
    const { product } = useContext(ProductContext);
    let imageToShow: string;
    if (img) {
        imageToShow = img;
    } else if (product.img) {
        imageToShow = product.img
    } else {
        imageToShow = noImage
    }
    return <img className="rounded-t-2xl w-full" src={imageToShow} alt="Product" />
}