import { Fragment} from "react"
import { NavigateFunction, useNavigate } from "react-router-dom"
import { Product } from "../../containers/Product"

import { PageProps} from "../../globalTypes"


export interface ITotalAmount{
    subtotal: number;
    total: number;
}

export const toTalAmountInitial: ITotalAmount = {
    subtotal: 0,
    total: 0
}

const Cart: React.FC<PageProps> = ({state, dispatch}): JSX.Element => {
    const navigate: NavigateFunction = useNavigate();
    const { shoppingCart } = state

    console.log("shopping" ,shoppingCart);

    return (
        <Fragment>
            {
                state.shoppingCart.length ? (
                    <Fragment>
                        {state.shoppingCart.map(product => (
                            <Product key={product.id} image={product.image}
                                title={product.title} />
                        ))}
                    </Fragment>
                ) : (
                    <h2>Cart is empty</h2>
                )
            }
        </Fragment >
    )
}

export { Cart }