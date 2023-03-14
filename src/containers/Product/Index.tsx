import React from "react";
import { useNavigate } from "react-router-dom";
import "./Product.css";

interface ProductProps {
    title: string;
    image: string;

}

const Product: React.FC<ProductProps> = ({ title, image }): JSX.Element => {
    const navigate = useNavigate()
    const handleClick = () => navigate(`products/${title.trim()}`)
    return (
        <div>
            <div className="Product" onClick={handleClick}>
                <div className="Product__thumbnail">
                    <img className="Product__image" src={image} alt={title} />
                </div>

                <h2 className="Product__title">
                    {title}
                </h2>
            </div>
        </div>
    )
}

export { Product }