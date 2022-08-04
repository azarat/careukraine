import { SET_CART, GET_CART, ERROR } from "../types";

const initialState = {
    cart: [],
    loading: true,
};

const cartReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case GET_CART:
      return {
        ...state,
        loading: false,
      };

    case SET_CART:
      return {
        ...state,
        cart: action.payload,
        loading: false,
      };

    case ERROR:
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default cartReducer;
