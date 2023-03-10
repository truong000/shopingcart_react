import React from "react";
import "./Product.css";

interface ProductProps {
    title: string;
    image: string;
}

const Product: React.FC<ProductProps> = ({title, image}): JSX.Element => {
    return (
        <div className="Product">
            <div className="Product__thumbnail">
                <img className="Product__image" src={image} alt={title} />
            </div>

            <h2 className="Product__title">
            {title}
            </h2>
        </div>
    )
}

export { Product }