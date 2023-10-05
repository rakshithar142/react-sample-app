import { takeEvery, put } from "@redux-saga/core/effects";
import { axiosInstance } from "../../services/AxiosInstance";
import {
  GET_USER_DETAILS,
  SET_USER_DETAILS,
  GET_PASSENGER_DATA,
  SET_PASSENGER_DATA,
  UPDATE_POST,
  SET_UPDATED_POST,
} from "../constants";

function* getUserDetails() {
  try {
    const response = yield axiosInstance.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    const data = yield response.data;
    yield put({ type: SET_USER_DETAILS, payload: data });
  } catch (error) {
    console.log(error);
    yield put({ type: SET_USER_DETAILS, payload: [] });
  }
}

function* getPassenger(payload) {
  try {
    const response = yield axiosInstance.get(
      `https://api.instantwebtools.net/v1/passenger?${payload.payload}`
    );
    const data = yield response.data;
    yield put({ type: SET_PASSENGER_DATA, payload: data });
  } catch (error) {
    console.log(error);
  }
}

function* updatePost(payload) {
  try {
    const response = yield axiosInstance.post(
      "https://jsonplaceholder.typicode.com/posts",
      JSON.stringify(payload.payload)
    );
    const data = yield response.data;
    yield put({ type:SET_UPDATED_POST, payload: data });
  } catch (error) {
    console.log(error);
  }
}
export function* userSaga() {
  yield takeEvery(GET_USER_DETAILS, getUserDetails);
  yield takeEvery(GET_PASSENGER_DATA, getPassenger);
  yield takeEvery(UPDATE_POST, updatePost);
}
