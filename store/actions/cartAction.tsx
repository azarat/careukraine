import { SET_CART, GET_CART, ERROR } from "../types";
import { Dispatch } from 'redux';

export const getCartData = () => async (dispatch: Dispatch) => {
  try {
    dispatch({
      type: GET_CART,
      payload: [],
    });
  } catch (error) {
    dispatch({
      type: ERROR,
      payload: "error message",
    });
  }
};

export const setCartData = (data: any) => async (dispatch: Dispatch) => {
  try {
    dispatch({
      type: SET_CART,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ERROR,
      payload: "error message",
    });
  }
};