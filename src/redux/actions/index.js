import {
  GET_USER_DETAILS,
  GET_SINGLE_PRODUCT,
  GET_ALL_PRODUCTS,
  GET_PASSENGER_DATA,
  UPDATE_POST,
} from "../constants";

export const getUserDetails = () => {
  return { type: GET_USER_DETAILS };
};

export const getSingleProduct = (productId) => {
  return { type: GET_SINGLE_PRODUCT, payload: productId };
};

export const getPassenger = (payload) => {
  return { type: GET_PASSENGER_DATA, payload: payload };
};

export const updatePost = (payload) => {
  return { type: UPDATE_POST, payload: payload };
};

// export const getAllProducts = () => {
//   return { type: GET_ALL_PRODUCTS };
// };
