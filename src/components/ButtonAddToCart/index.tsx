import { ActionInterface } from "../../globalTypes";
import "./ButtonAddToCart.css";

interface ButtonAddToCartProps{
    ProductId?: number;
    Quantity?: number;
    dispatch?: React.Dispatch<ActionInterface>;
    added?: boolean;
    content?: string;
    onclick?: Function
}

export const ButtonATC: React.FC<ButtonAddToCartProps> = ({
    ProductId,
    dispatch,
    added,
    content,
    onclick
  }): JSX.Element => {
    const handleClick = () => {
      if(onclick) onclick()
  
      const action: string = added ? "REMOVE_PRODUCT" : "ADD_TO_CART";
      dispatch && dispatch({ type: action, payload: ProductId })
      console.log("Added:", added, "productId:",ProductId);
    }
  

    return(
      <button className={`ButtonATC ${added && "added"}`} onClick={handleClick}>
        {
          content ? content
          :
          added ? `Remove` : `Add to cart`
        }
      </button>
    )
  }