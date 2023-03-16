import { Fragment} from "react"
import { Product } from "../../containers/Product"
import { ActionInterface, PageProps} from "../../globalTypes"


const Home: React.FC<PageProps> = ({state, dispatch, ctx}): JSX.Element => {

    return (
        <Fragment>
            <section className='Home'>
                <section className='Home__items'>

                    {
                        state.filteredItems.length ? (
                            <Fragment>
                                {state.filteredItems.map(product => (
                                    <Product 
                                        key={product.id}
                                        id={product.id}
                                        name={product.title}
                                        category={product.category}
                                        price={product.price}
                                        image={product.image}
                                        rate={product.rating.rate}
                                        quantity={product.quantity}
                                        added={product.added as boolean}
                                        dispatch={dispatch as React.Dispatch<ActionInterface>} 
                                    />
                                ))}
                            </Fragment>
                        ) : (
                            <h2>Loading...</h2>
                        )
                    }
                </section>
            </section>
        </Fragment >
    )
}

export { Home }