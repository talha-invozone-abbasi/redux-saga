import axios from "axios";

export function requestUsers() {
  return axios.get("https://jsonplaceholder.typicode.com/users");
}
