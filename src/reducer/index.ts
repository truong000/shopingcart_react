import { StateInterface, ActionInterface} from "../globalTypes";

export const initialState: StateInterface = {
    products:[]
}

export const reducerFn = (state: StateInterface, action: ActionInterface): StateInterface => {
    const { type, payload } = action

    switch(type) {
        case "ADD_PRODUCTS": 
            return {
                ...state,
                products: payload as any
            }
        default: return state    
    }
}

