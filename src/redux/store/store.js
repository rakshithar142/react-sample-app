import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";
import rootReducer from "../reducers";
import { userSaga } from "../sagas/userSaga";
import { productSaga } from "../sagas/productSaga";

const sagaMiddleWare = createSagaMiddleware();
const store = configureStore({
  reducer: rootReducer,
  middleware: () => [sagaMiddleWare],
});

sagaMiddleWare.run(userSaga, productSaga);
export default store;
