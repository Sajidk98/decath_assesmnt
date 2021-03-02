import { PRODUCTS } from "../utility/costants";

const initialState = { isLoading: false, error: false, data: PRODUCTS() };

export default (state = initialState, action) => {
  return state;
};
