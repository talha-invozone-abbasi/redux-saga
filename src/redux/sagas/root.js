import { takeLatest } from "redux-saga/effects";
import { CREATE_USER, DELETE_USER, GET_USER } from "../ducks/users";
import { deleteUser, hanldeUsers, postNewUser } from "./handlers/users";

export function* watcherSaga() {
  yield takeLatest(GET_USER, hanldeUsers);
  yield takeLatest(CREATE_USER, postNewUser);
  yield takeLatest(DELETE_USER, deleteUser);
}
