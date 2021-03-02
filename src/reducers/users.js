import type from "../actions/constant";

import { USERS } from "../utility/costants";

const initialState = { isLoading: false, error: false, data: USERS };

export default (state = initialState, action) => {
  switch (action.type) {
    case type.LOGIN:
      return {
        ...state,
        isLoading: false,
        data: [...state.data, action.payload],
      };
    default:
      return state;
  }
};
