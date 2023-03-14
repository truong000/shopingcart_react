import { Fragment} from "react"
import { Product } from "../../containers/Product"
import { PageProps} from "../../globalTypes"


const Home: React.FC<PageProps> = ({state, dispatch, ctx}): JSX.Element => {

    return (
        <Fragment>
            <section className='Home'>
                <section className='Home__items'>
                    {
                        state.filteredItems.length ? (
                            <Fragment>
                                {state.filteredItems.map(product => (
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