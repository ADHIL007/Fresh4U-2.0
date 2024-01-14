// Define action types as constants
const LOGIN = 'LOGIN';
const ADD_CART = 'ADD_CART';
const REMOVE_CART = 'REMOVE_CART';

// Action creator functions
export const loginAction = () => ({
    type: LOGIN
});

export const addCartAction = (id, name, price, quantity) => ({
    type: ADD_CART,
    payload: { id, name, price, quantity }
});

export const removeCartAction = (id) => ({
    type: REMOVE_CART,
    payload: { id }
});

// Initial state
const initialState = {
    loggedIn: false,
    cart: [{
        id: "",
        name: "",
        price: 0,
        quantity: 0
    }]
};

export default function reducer(state = initialState, action) {
    console.log(action);

    switch (action.type) {
        case LOGIN:
            return { ...state, loggedIn: true };

        case ADD_CART:
            return {
                ...state,
                cart: [...state.cart, action.payload]
            };

            case REMOVE_CART:
                console.log('Removing item with ID:', action.payload.id);
                return {
                    ...state,
                    cart: state.cart.filter(item => item.id !== action.payload.id)
                };


        default:
            return state;
    }
}
