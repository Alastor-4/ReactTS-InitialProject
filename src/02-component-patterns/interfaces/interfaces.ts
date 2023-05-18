import { Props as ButtonProps } from "../components/ProductButtons";
import { Props as ProductCardProps } from "../components/ProductCard";
import { Props as ImageProps } from "../components/ProductImage";
import { Props as TitleProps } from "../components/ProductTitle";

export interface Product {
    id: string;
    title: string;
    img?: string;
}

export interface ProductContextProps {
    counter: number;
    calcValue: (value: number) => void;
    product: Product;
}

export interface ProductCardHOCProps {
    ({ children, product }: ProductCardProps): JSX.Element,
    Title: (TitleProps: TitleProps) => JSX.Element,
    Image: (ImageProps: ImageProps) => JSX.Element,
    Buttons: (ButtonsProps: ButtonProps) => JSX.Element
}

export interface onChangeArgs {
    product: Product,
    count: number
}

export interface ProductInCart extends Product {
    count: number
}