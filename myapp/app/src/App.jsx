import { useState } from "react";
import Counter from "./Counter";
import Background from "./Background";
import UserContextProvider from "./context/UserContextProvider";
import Login from "./components/Login";
import Profile from "./components/Profile";

function App() {

  return (
    <>
    <UserContextProvider>
      <h1>hello</h1>
    </UserContextProvider>

    <Login/>
    <Profile/>
      {/* <Counter/> */}
      {/* <Background/> */}
    </>
  );
}

export default App;
