import { Fragment} from "react"
import { useDispatch, useSelector } from "react-redux"
import { Product } from "../../containers/Product"
import { ActionInterface, PageProps} from "../../globalTypes"
import { RootState } from "../../redux/store"


const Home: React.FC = (): JSX.Element => {
    const products = useSelector((state: RootState) => state.product.products)
    return (
        <Fragment>
            <section className='Home'>
                <section className='Home__items'>
                    {
                        products.length ? (
                            <Fragment>
                                {products.map(product => (
                                    <Product 
                                        key={product.id}
                                        id={product.id}
                                        name={product.title}
                                        category={product.category}
                                        price={product.price}
                                        image={product.image}
                                        quantity={product.quantity}
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

