import { StateInterface, ActionInterface, ProductInterface, RoutesInterface, ChangeQuantityInterface } from "../globalTypes";

export const initialState = (): StateInterface => {
    return {
        products: [],
        filteredItems: [],
        shoppingCart: [],
        categories: ["All product"],
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

    switch (type) {
        case "ADD_INITIAL_ITEMS":
            (payload as ProductInterface[]).forEach((product: ProductInterface) => {
                if (!state.categories.includes(product.category)) {
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
            if (index >= 0) {
                newItem = state.products[index]
                newItem.quantity = 1
                newShoppingCart = [
                    ...state.shoppingCart,
                    newItem
                ]
            } else (
                newShoppingCart = state.shoppingCart
            )
            state.products[index].added = true;
            return {
                ...state,
                shoppingCart: newShoppingCart
            }
        case "REMOVE_PRODUCT":
            index = getIndex()
            newShoppingCart = state.shoppingCart.filter(product => product.id !== payload)
            state.products[index].added = false;
            return {
                ...state,
                shoppingCart: newShoppingCart
            }
        case "MOVING":
            state.current = (payload as RoutesInterface).current;
            state.history = (payload as RoutesInterface).history
            return {
                ...state
            }
        case "CHANGE_QUANTITY":
            index = state.shoppingCart.findIndex(
                item => item.id === (payload as ChangeQuantityInterface).id
            )
            newShoppingCart = [...state.shoppingCart]
            newShoppingCart[index].quantity = (payload as ChangeQuantityInterface).quantity

            return {
                ...state,
                shoppingCart: newShoppingCart
            }
        case "FILTER_CATEGORY":
            state.filteredItems = payload === "All items" ? state.products : state.products.filter(product => product.category === payload)
            return{ ...state, filterAt: payload as string }
        default: return state
    }
}

