import { StateInterface, ActionInterface, ProductInterface} from "../globalTypes";

export const initialState = (): StateInterface => {
    return {
        products: [],
        filteredItems: [],
        shoppingCart: [],
        categories: ["All items"],
        current: "/",
        history: "",
        searching: "",
        isSearching: false,
        filterAt: "All items",
        totalAmount: 0,
        error: false,
        loading: true
    }
}

export const reducer = (state: StateInterface, action: ActionInterface): StateInterface => {
    const { type, payload } = action
    let index: number | undefined;
    let newShoppingCart: ProductInterface[];
    let newItem: ProductInterface;

    const getIndex = () => {
        return state.products.findIndex(item => item.id === payload)
    }

    switch(type) {
        case "ADD_INITIAL_ITEMS":
            (payload as ProductInterface[]).forEach((product: ProductInterface) => {
              if(!state.categories.includes(product.category)){
                state.categories.push(product.category)
              }
            })
            state.products = payload as ProductInterface[];
            state.filteredItems = state.products;
            return {
              ...state,
              loading: false
            }
        case "ADD_TO_CART":
            index = getIndex()
            if(index >= 0){
                newItem = state.products[index]
                newItem.quantity = 1
                newShoppingCart = [
                    ...state.shoppingCart,
                    newItem
                ]
            }else (
                newShoppingCart = state.shoppingCart
            )
            state.products[index].added = true;
            return {
                ...state,
                shoppingCart: newShoppingCart
            }
        default: return state    
    }
}

