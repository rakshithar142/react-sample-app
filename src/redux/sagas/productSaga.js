import { takeEvery, put } from "@redux-saga/core/effects";
import axios from "axios";

import {
  GET_SINGLE_PRODUCT,
  GET_ALL_PRODUCTS,
  SET_SINGLE_PRODUCT,
  SET_ALL_PRODUCTS,
} from "../constants";

function* getSingleProduct(productId) {
    console.log('productId')
  try {
    const response = yield axios.get(`https://fakestoreapi.com/products/${productId}`);
    const data = yield response.data;
    console.log(data)
    yield put({ type: SET_SINGLE_PRODUCT, payload: data });
  } catch (error) {
    console.log(error);
    yield put({ type: SET_SINGLE_PRODUCT, payload: {} });
  }
}

export function* productSaga() {
  yield takeEvery(GET_SINGLE_PRODUCT, (action) =>
    getSingleProduct(action.payload)
  );
}
