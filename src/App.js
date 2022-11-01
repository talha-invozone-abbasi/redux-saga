import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
  createUser,
  CREATE_USER,
  deleteUser,
  getUser,
} from "./redux/ducks/users";

function App() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state?.users);
  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);
  const [input, setInput] = useState({
    name: "",
    email: "",
    title: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e?.target;
    setInput({ ...input, [name]: value });
  };

  const handleSubmit = (e) => {
    e?.preventDefault();
    dispatch({ type: CREATE_USER, sinlgeUser: input });
  };

  const delteClick = (e) => {
    dispatch(deleteUser(e?._id));
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>name</label>
        <input onChange={handleChange} value={input?.name} name="name" />
        <label>password</label>
        <input
          onChange={handleChange}
          value={input?.password}
          name="password"
          type="password"
        />
        <label>Email</label>
        <input onChange={handleChange} value={input?.email} name="email" />
        <label>Role</label>
        <input onChange={handleChange} value={input?.title} name="title" />
        <button type="submit">submit</button>
      </form>
      {state?.users?.map((e, i) => (
        <h1 key={i} onClick={(el) => delteClick(e)}>
          {e?.name}
        </h1>
      ))}
    </>
  );
}

export default App;
