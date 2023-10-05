import { all, fork } from "redux-saga";

import { userSaga } from "./userSaga";
import { productSaga } from "./productSaga";

export default function* rootSaga() {
  yield all([fork(userSaga), fork(productSaga)]);
}
