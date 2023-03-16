import { createSlice } from '@reduxjs/toolkit'

export interface ProductInterface {
    id: number;
    category: string;
    description: string;
    image: string;
    price: number;
    title: string;
    quantity: number;
}

export interface ProductsInterface {
    products: Array<ProductInterface>
    productDetail: ProductInterface
}

const initialState: ProductsInterface = {
    products: [],
    productDetail: {
        id: 0,
        category: "",
        description: "",
        image: "",
        price: 0,
        title: "",
        quantity: 0,
    }
}

export const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        getProduct: (state, action) => {
            state.products = action.payload;
        },
        getProductDetail: (state, action) => {
            state.productDetail = action.payload;
        }
    },
})

// Action creators are generated for each case reducer function
export const { getProduct, getProductDetail } = productSlice.actions

export default productSlice.reducer