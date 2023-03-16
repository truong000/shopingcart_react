import React from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { ButtonATC } from "../../components/ButtonAddToCart";
import { ActionInterface } from "../../globalTypes";
import "./Product.css";


interface ProductProps {
    id: number;
    name: string,
    category: string;
    image: string;
    price: number;
    rate: number;
    quantity: number;
    dispatch: React.Dispatch<ActionInterface>;
    added?: boolean
}

const Product: React.FC<ProductProps> = ({
    id,
    name,
    category,
    image,
    price,
    rate,
    quantity,
    dispatch,
    added
}): JSX.Element => {
    const navigate: NavigateFunction = useNavigate()
    const handleClick = () => {
        dispatch({
            type: "MOVING",
            payload: { current: `/products/${name}`, history: window.location.pathname }
        })
        setTimeout(() => {
            window.scrollTo(0, 0)
        }, 0);
        navigate(`/products/${name}`)
    }
    return (

        <div className="Product">
            <div className="Product__thumbnail" onClick={handleClick}>
                <img className="Product__image" src={image} alt={name} />
            </div>

            <div className="Product__body">
                <h2 className="Product__title" onClick={handleClick}>
                    {name}
                </h2>
                <span>${price}</span>
                <span className="Product__category">{category}</span>
            </div>

            <div className="Product__footer">
                <div className="Rating">
                    <img className="Product__star" src="/assets/star.jpg" alt="" />
                </div>
                <ButtonATC
                    ProductId={id}
                    dispatch={dispatch}
                    added={added}
                />
            </div>
        </div>

    )
}

export { Product }