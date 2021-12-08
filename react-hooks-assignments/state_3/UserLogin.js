import React, { useState } from "react";
import "./UserLogin.css";

const UserLogin = () => {
  const [user, setUser] = useState({ name: "", email: "", password: "" });

  const login = evt => {
    evt.preventDefault();
    console.log(
      `name : ${user.name} , password : ${user.password} , email : ${
        user.email
      } `
    );
  };

  return (
    <form className="UserLogin" onSubmit={login}>
      <input
        type="text"
        value={user.name}
        placeholder="insert name ..."
        onChange={evt => setUser({ ...user, name: evt.target.value })}
      />
      <input
        type="password"
        value={user.password}
        placeholder="insert password ..."
        onChange={evt => setUser({ ...user, password: evt.target.value })}
      />
      <input
        type="email"
        value={user.email}
        placeholder="insert email ..."
        onChange={evt => setUser({ ...user, email: evt.target.value })}
      />
      <input type="submit" value="Login" />
    </form>
  );
};

export default UserLogin;
