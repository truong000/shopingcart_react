import { useParams } from "react-router-dom"
import { ButtonATC } from "../../components/ButtonAddToCart";
import { PageProps, ProductInterface } from "../../globalTypes";
import "./ProductDetail.css";


const ProductDetail: React.FC<PageProps> = ({ state, dispatch }): JSX.Element => {
    const { title } = useParams()
    const { products } = state
    const product: ProductInterface = products.find((index) => index.title.trim() === title?.trim()) as ProductInterface

    return (
        <div>
            <section className="Detail">
                <div className="Product_detail_1">
                    <img className="ProductDetail__image" src={product.image} alt='' />
                </div>
                <div className="Product_detail_2">
                    <h1>{title}</h1>
                    <p className="price">{product.price} $</p>
                    <p>{product.description}</p>
                    {/* <p>
                    <label>Quantiy: {product.quantity}
                        <button onClick={decrease} className="button button1">-</button>
                        <button onClick={increment} className="button button1">+</button>
                    </label>
                </p> */}
                    <p>
                        <ButtonATC
                            ProductId={product.id}
                            dispatch={dispatch}
                            added={product.added}
                        />
                    </p>
                </div>
            </section>
        </div>

    )
}

export { ProductDetail }

