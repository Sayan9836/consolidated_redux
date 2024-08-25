import { ADD_TO_CART,REMOVE_TO_CART } from "../constant";

const initialState={
    cardData:[]
}

export default function cardItems(initialState=[],action) {
    switch (action.type) {
        case ADD_TO_CART:
            // console.log('reducer',action);
            return [
              ...initialState,action.data
            ]
        case REMOVE_TO_CART:
            initialState.pop()
            return [...initialState]
        default:
            return initialState;
    }
}
