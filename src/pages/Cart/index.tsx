import React from "react"
// import { NavigateFunction, useNavigate } from "react-router-dom"
import { ProductCart } from "../../components/Productcart";
import { ActionInterface, PageProps } from "../../globalTypes"
import "./Cart.css"


export interface ITotalAmount {
    subtotal: number;
    total: number;
}

export const toTalAmountInitial: ITotalAmount = {
    subtotal: 0,
    total: 0
}

const Cart: React.FC<PageProps> = ({ state, dispatch }): JSX.Element => {
    // const navigate: NavigateFunction = useNavigate();
    const { shoppingCart } = state
    const [totalAmount, setTotalAmount] = React.useState<ITotalAmount>(toTalAmountInitial)

    React.useEffect(() => {
        if (shoppingCart.length) {
            let subtotal = 0;
            let total = 0;

            shoppingCart.forEach(product => {
                subtotal += product.price * (product.quantity as number)
                total += subtotal;
            })

            setTotalAmount({
                subtotal: Math.round(subtotal),
                total: Math.round(total)
            })

            console.log("Total", total);
        }

    }, [shoppingCart])

    console.log("Cart", shoppingCart);

    return(
        <section className="Cart">
          {shoppingCart.length ? (
            <section className="Cart__content">
              <article className="Cart__products">
                {shoppingCart.map(product => (
                    <ProductCart 
                        key={product.id}
                        name={product.title}
                        price={product.price}
                        quantity={product.quantity}
                        image={product.image}
                        id={product.id}
                        dispatch={dispatch as React.Dispatch<ActionInterface>}                 
                         />
                ))}
              </article>
    
              <article className="Cart__info">
                <div className="Cart__total">
                <div className="Cart__total--total">
                    <h2>Total</h2>
                    <span>${totalAmount.total}</span>
                  </div>
                </div>
    
                {/* <ButtonATC 
                  content="Proceed to Checkout"
                  onclick={() => {
                    dispatch && dispatch({
                      type: "MOVING",
                      payload: {
                        current: "/shopping-cart",
                        history: "/checkout"
                      }
                    })
    
                    dispatch && dispatch({
                      type: "AMOUNT",
                      payload: totalAmount.total 
                    })
                    navigate("/checkout")
                  }}
                /> */}
              </article>
            </section>
          ) : (
            <span className="Cart__msg">The cart is empty</span>
          )}
        </section>
      )
}

export { Cart }