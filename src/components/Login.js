import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [formUsername, setUsername] = React.useState("");
  const [formPassword, setPassword] = React.useState("");
  const [errorMessage, setErrorMessage] = React.useState("");
  const navigate = useNavigate();
  useEffect(() => {
    const auth = localStorage.getItem("user");
    if (auth) {
      navigate("/");
    }
  });
  var Airtable = require("airtable");
  var base = new Airtable({ apiKey: "keyfXgn8PL6pB3x32" }).base(
    "appjWdL7YgpxIxCKA"
  );
  const table = base("credenitals");
  const handleLogin = async () => {
    const records = await table.select().firstPage();
    let flag = true;
    for (let i = 0; i < 3; i++) {
      let userName = records[i].fields.username;
      if (formUsername === userName) {
        let passWord = records[i].fields.password;
        if (formPassword === passWord) {
          localStorage.setItem("user", JSON.stringify(records[i]));
          navigate("/");
          flag = false;
        } else {
          break;
        }
      }
    }
    if (flag === true) {
      setErrorMessage("You have entered an invalid username or password!");
      console.log("User does not exist!");
    }
  };
  return (
    <>
      <br/>
      <center>
        <h1 class="display-6">Welcome to Loop Dashboard</h1>
      </center>
      <div className="login">
        <div className="w-full max-w-xs">
          <form className="bg-white shadow-md rounded px-7 pt-6 pb-8 mb-4">
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                for="username"
              >
                Username
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Username"
                value={formUsername}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                for="password"
              >
                Password
              </label>
              <input
                className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="*******"
                value={formPassword}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="flex items-center justify-center mb-6">
              <button
                onClick={handleLogin}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
              >
                Log In
              </button>
              <br />
            </div>
            {errorMessage && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative">
                {" "}
                {errorMessage}{" "}
              </div>
            )}
          </form>
          <p className="text-center text-gray-500 text-xs">
            &copy;2022 Loop. All rights reserved.
          </p>
        </div>
      </div>
    </>
  );
}
