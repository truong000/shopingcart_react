import { useParams } from "react-router-dom"
import { PageProps, ProductInterface } from "../../globalTypes"
import "./ProductDetail.css";


const ProductDetail: React.FC<PageProps> = ({ state, dispatch }): JSX.Element => {
    const { title } = useParams()
    const { products } = state
    const product: ProductInterface = products.find(index => index.title.trim() === title?.trim()) as ProductInterface

    return (
        <section className="Detail">
            <div className="Product_detail_1">
                <img className="ProductDetail__image" src={product.image} alt='' />
            </div>
            <div className="Product_detail_2">
                <h1>{title}</h1>
                <p className="price">{product.price} $</p>
                <p>{product.description}</p>
                <p><button className="button button1">Add to Cart</button></p>
            </div>


        </section>
    )
}

export { ProductDetail }