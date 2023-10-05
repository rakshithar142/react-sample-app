import { SET_SINGLE_PRODUCT } from "../constants";

const initialState = {
  singleProduct: {},
};

export default function productsData(state = initialState, action) {
  switch (action.type) {
    case SET_SINGLE_PRODUCT:
        console.log(action.payload)
      return { ...state, singleProduct: action.payload };
    default:
      return { ...state };
  }
}
