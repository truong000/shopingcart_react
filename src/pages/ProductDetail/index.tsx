import { useContext } from "react"
import { useParams } from "react-router-dom"
import { ctx } from "../../context"
import { ProductInterface } from "../../globalTypes"
import "./ProductDetail.css";




const ProductDetail: React.FC = (): JSX.Element => {
    const state = useContext(ctx)
    const { title } = useParams()
    const product: ProductInterface = state?.products.find(
        product => product.title.trim() === title?.trim()
    ) as ProductInterface

    console.log(title);
    console.log(product);

    return (
        <section className="card">

            <img className="ProductDetail__image" src={product.image} alt='' />


            <h1>{title}</h1>
            <p className="price">{product.price}</p>
            <p>{product.description}</p>
            <p><button>Add to Cart</button></p>

        </section>
    )
}

export { ProductDetail }