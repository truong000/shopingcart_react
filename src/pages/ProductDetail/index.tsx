import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom"
import { ButtonATC } from "../../components/ButtonAddToCart";
import { addToCart } from "../../redux/cartSlice";
import { getProductDetail } from "../../redux/productSlice";
import { RootState } from "../../redux/store";
// import { useState } from 'react';
import "./ProductDetail.css";





  const ProductDetail: React.FC = ({ }): JSX.Element => {
    const {id} = useParams()
    const productDetail = useSelector((state: RootState) => state.product.productDetail);
    const dispatch = useDispatch();
  
    React.useEffect(() => {
      try {
        fetch(`https://fakestoreapi.com/products/${id}`)
          .then((res) => res.json())
          .then((data) => dispatch(getProductDetail(data)));
      } catch (err) {
        dispatch({ type: "ERROR" });
      }
    }, [id]);
  
    const handleAddToCart = () => {
        dispatch(
          addToCart({
            id: productDetail.id,
            quantity: 1,
          })
        );
      };
     
    return (
      <section className="Detail">
        <div className="Product_detail_1">
          <img className="ProductDetail__image" src={productDetail.image} alt={productDetail.title} />
        </div>
        <div className="Product_detail_2">
          <h1>{productDetail.title}</h1>
          <p className="price">{productDetail.price} $</p>
          <p>{productDetail.description}</p>
          <p>
            <button onClick={handleAddToCart}>Add to Cart</button>
          </p>
        </div>
      </section>
    );
  };
  
  export { ProductDetail };