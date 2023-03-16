import React, { useState } from "react";
import { ActionInterface } from "../../globalTypes";
import { ButtonRemoveCart } from "../ButtonRemoveCart";
import "./ProductCart.css";

interface ProductCartProps {
    id: number;
    name: string,
    image: string;
    price: number;
    quantity: number;
    dispatch: React.Dispatch<ActionInterface>;
}

export const ProductCart: React.FC<ProductCartProps> = ({
    id,
    name,
    image,
    price,
    quantity,
    dispatch
}): JSX.Element => {

    const [quantityFace, setQuantityFace] = useState(1);

    const increment = (e: any) => {
        setQuantityFace(e = quantityFace + 1)
    }
    const decrease = (e: any) => {
        if (quantityFace > 1) {
            setQuantityFace(e = quantityFace - 1)
        }
    }

    quantity = quantityFace

    const handleChangeQuantity = () => {
        dispatch({
            type: "CHANGE_QUANTITY",
            payload: { id: id, quantity: quantityFace }
        })
    }

    console.log("quantityFace", quantityFace, "quantity", quantity);

    return (
        <div className="ProductCart">
            <div className="ProductCart__thumbnail">
                <img className="ProductCart__img" src={image} alt={name} />
            </div>

            <div className="ProductCart__content">
                <div className="prodiv">
                    <h2 className="productName">{name}</h2>
                    <span className="productPrice">$:{price}</span>
                    <p className="buttonUpdate">
                        <label>Quantiy: {quantityFace}
                            <button onClick={decrease} className="button button1">-</button>
                            <button onClick={increment} className="button button1">+</button>
                        </label>
                        <button onClick={handleChangeQuantity}>Update</button>
                    </p>
                </div>
                <ButtonRemoveCart 
                    onclick={() => dispatch({ type: "REMOVE_PRODUCT", payload: id })}
                />
            </div>
        </div>
    )
}