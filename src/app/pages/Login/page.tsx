import { useState } from "react";
import { AppDispatch } from "@/redux/store";
import { UseDispatch, useDispatch } from "react-redux";

import { logIn, logOut, toggleModerator } from "@/redux/features/auth-slice";

export default function Login() {
  const dispatch = useDispatch<AppDispatch>();
  const [username, setUsername] = useState("");

  const onClickLogin = () => {
    dispatch(logIn(username));
  };
  const onClickToggle = () => {
    dispatch(toggleModerator())
  };
  const onClickLogout = () => {
    dispatch(logOut());
  };

  return (
      <div>
          <input type="text" onChange={(e) => setUsername(e.target.value)} />
          <br />
          <button onClick={onClickLogin}>Login</button>
          <br />
          <button onClick={onClickLogout}>Logout</button>
          <br />
          <button onClick={toggleModerator}>Toggle Moderator status</button>
      </div>
  )
}
