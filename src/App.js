import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getUser } from "./redux/ducks/users";

function App() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state?.users);
  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);
  console.log(state?.users);

  return (
    <>
      {state?.users?.map((e, i) => (
        <h1 key={i}>{e?.name}</h1>
      ))}
    </>
  );
}

export default App;
