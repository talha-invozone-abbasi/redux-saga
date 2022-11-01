import { put, call } from "redux-saga/effects";
import { createUser, setUser } from "../../ducks/users";
import { postUser, requestUsers, deleteUserRequest } from "../requests/users";

export function* hanldeUsers(actions) {
  try {
    const response = yield call(requestUsers);
    const { data } = response;
    yield put(setUser(data));
  } catch (e) {
    console.log(e);
  }
}

export function* postNewUser(actions) {
  console.log(actions);
  try {
    const response = yield call(postUser, actions?.sinlgeUser);
    const { data } = response;
    return data;
  } catch (e) {
    console.log(e);
  }
}
export function* deleteUser(actions) {
  console.log(actions);
  try {
    const response = yield call(deleteUserRequest, actions?.id);
    const { data } = response;
    return data;
  } catch (e) {
    console.log(e);
  }
}
