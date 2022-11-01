import axios from "axios";

export function requestUsers() {
  return axios.get("/user");
}

export function* postUser(body) {
  return axios.post("/user", body);
}

export function* deleteUserRequest(body) {
  return axios.delete(`/user/${body}`);
}
