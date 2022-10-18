import "../custom.css";
import Maps from "./Maps";
import React, { useEffect, useState, useContext } from "react";
import Sidebar from "../components/Sidebar";
import mapContext from "../context/mapContext";

export default function Homepage() {
  const auth = localStorage.getItem("user");
  const j = JSON.parse(auth);
  const context = useContext(mapContext);
  const {addMap} = context;
  const [text, setText] = useState([]);
  const [users, setUsers] = useState([]);
  const [suggestions, setSuggestions] = useState([]);
  var Airtable = require("airtable");
  var base = new Airtable({ apiKey: "keyfXgn8PL6pB3x32" }).base(
    "appjWdL7YgpxIxCKA"
  );
  const table = base("restaurants");

  useEffect(() => {
    const loadUsers = async () => {
      let response = await table.select().firstPage();
      response = response.map((el) => {
        return el.fields;
      });
      setUsers(response);
    };
    loadUsers();
  });

  const onSuggestHandler = (text) => {
    setText(text);
    setSuggestions([]);
  };
  // const [map, setMap] = useState({resName:""});
  const onAdd = (e) => {
    e.preventDefault();
    // console.log(text);
    addMap(j.fields.username, text);
  };
  const onChangeHandler = (text) => {
    let matches = [];
    if (text.length > 0) {
      matches = users.filter((users) => {
        const regex = new RegExp(`${text}`, "gi");
        return users.Name.match(regex);
      });
    }
    // console.log("matches", matches);
    setSuggestions(matches);
    setText(text);
    
  };


  return (
    <>
    <Sidebar>
    <center>
    <h1 class="display-6">Home Page</h1>
      <form class="d-inline-flex" role="search">
        <input
          onChange={(e) => onChangeHandler(e.target.value)}
          id="resName"
          name="resName"
          value={text}
          class="form-control me-2"
          type="text"
          placeholder="Search"
          aria-label="Search"
        />
      </form>
      {suggestions &&
        suggestions.map((suggestion, i) => (
          <div
            key={i}
            className="suggestion col-md-3 justify-content-md-center"
            onClick={() => onSuggestHandler(suggestion.Name)}
          >
            {suggestion.Name}
          </div>
        ))}
      <button onClick={onAdd} class="btn btn-primary" type="submit">
        Add
      </button>
      </center>
      <Maps/>
      </Sidebar>
    </>
  );
}
