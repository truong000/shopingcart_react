import React from "react";

export interface ChangeQuantityInterface {
    id: number;
    quantity: number
}

export interface RatingInterface {
    rate: number;
    count: number;
}

export interface ProductInterface {
    id: number;
    category: string;
    description: string;
    image: string;
    price: number;
    rating: RatingInterface;
    title: string;
    quantity?: number;
    added?: boolean
}

export interface StateInterface {
    products: Array<ProductInterface>,
    filteredItems: Array<ProductInterface>,
    shoppingCart: Array<ProductInterface>,
    searching: string,
    categories: Array<string>,
    current: string,
    history: string,
    isSearching: boolean,
    filterAt: string,
    totalAmount: number,
    error: boolean,
    loading: boolean
}

export interface ActionInterface {
    type: string;
    payload?: 
        | ProductInterface[]
        | string
        | number
        | ChangeQuantityInterface

}


export interface PageProps {
    state: StateInterface;
    dispatch?: React.Dispatch<ActionInterface>
    ctx?: React.Context<StateInterface>
}