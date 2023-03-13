
export interface ProductInterface {
    id: string;
    name: string;
    price: number;
    image: string;
    title: string; 
    description: string;
}

export interface StateInterface {
    products: ProductInterface[]
}

export interface ActionInterface {
    type: string;
    payload: unknown;
}