import React from "react";
import "./App.css";
import LoginMain from "./auth/login/LoginMain";

function App() {
  return (
    <div className="flex justify-center items-center min-h-screen w-screen">
      <div className="w-full max-w-xs">
        <LoginMain />
      </div>
    </div>
  );
}

export default App;
