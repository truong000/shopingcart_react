import { Fragment, useContext } from "react"
import { Product } from "../../containers/Product"
import { ctx } from "../../context"
import { StateInterface } from "../../globalTypes"



const Home: React.FC = (): JSX.Element => {
    const state = useContext(ctx) as StateInterface

    console.log(state)

    return (
        <Fragment>
            <section className='Home'>
                <section className='Home__items'>
                    {
                        state.products.length ? (
                            <Fragment>
                                {state.products.map(product => (
                                    <Product key={product.id} image={product.image}
                                        title={product.title} />
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