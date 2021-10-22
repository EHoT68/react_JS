import { useSelector, useDispatch } from "react-redux";


export default function Profile() {
  const count = useSelector((state) => state.counter.count);
  const profile = useSelector((state) => state.profile);
  const dispatch = useDispatch();

  return (
    <div >
      <h1>Count {count} </h1>
      <h1>profile {profile.name} </h1>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>increment</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>decrement</button>
    </div>
  );
}
