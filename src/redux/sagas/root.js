import { takeLatest } from "redux-saga/effects";
import { GET_USER } from "../ducks/users";
import { hanldeUsers } from "./handlers/users";

export function* watcherSaga() {
  yield takeLatest(GET_USER, hanldeUsers);
}
