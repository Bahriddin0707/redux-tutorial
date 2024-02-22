import { useState } from "react";
import { useDispatch } from "react-redux";
import { login, logout } from "../features/user";

function Login() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();

  return (
    <div className="login">
      <h2>Login</h2>

      <form onSubmit={(e) => e.preventDefault()}>
        <label>Name: </label>
        <input type="text" onChange={(e) => setName(e.target.value)} />

        <label>Age: </label>
        <input type="number" onChange={(e) => setAge(e.target.value)} />

        <label>Email: </label>
        <input type="email" onChange={(e) => setEmail(e.target.value)} />

        <button onClick={() => dispatch(login({ name, age, email }))}>
          submit
        </button>
        <button onClick={() => dispatch(logout())}>logout</button>
      </form>
    </div>
  );
}

export default Login;
