import { act } from "react-dom/test-utils";
import type from "../actions/constant";

const initialState = { isLoading: false, error: false, data: [] };

export default (state = initialState, action) => {
  switch (action.type) {
    case type.ADD_TO_CART_REQUEST:
      let prevItemIndex = state.data.findIndex(
        (item) => item.pid === action.payload.pid
      );
      console.log(prevItemIndex, "innnnndex");
      if (state.data.length === 0 || prevItemIndex === -1) {
        return {
          ...state,
          data: [
            ...state.data,
            {
              id: state.data.length,
              user_id: 1,
              pid: action.payload.pid,
              quantity: 1,
            },
          ],
        };
      } else {
        let tempData = state.data;
        tempData[prevItemIndex] = {
          ...state.data[prevItemIndex],
          quantity: state.data[prevItemIndex].quantity + 1,
        };
        return {
          ...state,
          data: tempData,
        };
      }

    case type.INCREAMENT_ITEM_REQUEST:
      let index = state.data.findIndex((item) => item.id === action.payload);
      let tempData = state.data;
      tempData[index] = {
        ...state.data[index],
        quantity: state.data[index].quantity + 1,
      };
      return {
        ...state,
        data: tempData,
      };
    case type.DECREAMENT_ITEM_REQUEST:
      let indexDec = state.data.findIndex((item) => item.id === action.payload);
      let tempDataDec = state.data;
      tempDataDec[indexDec] = {
        ...state.data[indexDec],
        quantity: state.data[indexDec].quantity - 1,
      };
      return {
        ...state,
        data: tempDataDec,
      };
    case type.REMOVE_ITEM_REQUEST:
      const newData = state.data.filter((item) => item.id !== action.payload);
      return {
        ...state,
        data: newData,
      };
    case type.REMOVE_ALL_REQUEST:
      return {
        ...state,
        data: [],
      };
    case type.CHANGE_QUANTITY_REQUEST:
      let indexCh = state.data.findIndex(
        (item) => item.id === action.payload.id
      );
      let tempDataCh = state.data;
      tempDataCh[indexCh] = {
        ...state.data[indexCh],
        quantity: parseInt(action.payload.quantity),
      };
      return {
        ...state,
        data: tempDataCh,
      };
    default:
      return state;
  }
};

// var cart = [{
// id:1
//     user_id:001,
//     pid:1,
//     quantity:2
// }]
