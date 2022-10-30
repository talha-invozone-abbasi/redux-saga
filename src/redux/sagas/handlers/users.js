import { put, call } from "redux-saga/effects";
import { setUser } from "../../ducks/users";
import { requestUsers } from "../requests/users";

export function* hanldeUsers(actions) {
  try {
    const response = yield call(requestUsers);
    const { data } = response;
    yield put(setUser(data));
  } catch (e) {
    console.log(e);
  }
}
