import React from "react";
import ReactDOM from "react-dom";
import LoginPage from "./LoginPage";
import MainPage from "./MainPage";
import "./index.css";

import { UserProvider, UserConsumer } from "./UserContext";

function Root() {
  return (
    <UserConsumer>
      {({ user }) => (user ? <MainPage /> : <LoginPage />)}
    </UserConsumer>
  );
}

ReactDOM.render(
  <UserProvider>
    <Root />
  </UserProvider>,
  document.querySelector("#root")
);
