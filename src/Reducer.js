export const initialState = {
    basket: [],
    user: null,
    products: [],
    allProducts: []
};

// Selector
export const getBasketTotal = (basket) => {
    return basket?.reduce((amount, item) => (item.quantity ? item.quantity * item.price : item.price) + amount, 0);
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TO_BASKET':
            let foundIndex = state.basket.findIndex((product) => product.id === action.item.id)
            if (foundIndex === -1) {
                return {
                    ...state,
                    basket: [...state.basket, action.item],
                };
            }
            else {
                let stateBasket = JSON.parse(JSON.stringify(state.basket));
                let quantity = stateBasket[foundIndex].quantity;
                if (quantity) {
                    quantity += 1;
                }
                else {
                    quantity = 2;
                }
                stateBasket[foundIndex].quantity = quantity;
                return {
                    ...state,
                    basket: [...stateBasket]
                }
            }
        case 'REMOVE_FROM_BASKET':
            const index = state.basket.findIndex(
                (basketItem) => basketItem.id === action.id
            );
            let stateBasket = JSON.parse(JSON.stringify(state.basket));

            if (index >= 0) {
                let quantity = stateBasket[index].quantity;
                if (quantity && quantity > 1) {
                    stateBasket[index].quantity = quantity - 1 === 1 ? null : quantity - 1;
                }
                else {
                    stateBasket.splice(index, 1);
                }
            }
            else {
                console.warn("Can't remove Product (id: " + action.id + ") as its not in the Basket")
            }
            return {
                ...state,
                basket: stateBasket
            }
        case 'SET_PRODUCTS':
            return {
                ...state,
                products: action.products,
            };
        case 'SET_ALL_PRODUCTS':
            return {
                ...state,
                allProducts: action.products,
            };
        case 'SET_USER':
            return {
                ...state,
                user:action.user
            }
        case 'EMPTY_BASKET':
            return {
                ...state,
                basket: []
            }

        default:
            return state;
    }
};

export default reducer;