import mapContext from "./mapContext";
import { useState } from "react";

const MapState = (props) => {
  const host = "http://localhost:5000";
  const mapInitial = [];
  const [maps, setMaps] = useState(mapInitial);
  //Add map
  const getMap = async () => {
    const response = await fetch(`${host}/api/map/fetchallmaps`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      
    });
    const json = await response.json();
    setMaps(json);
    
  };
  //Add map
  const addMap = async (userName, resName) => {
    const response = await fetch(`${host}/api/map`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({userName, resName, bookmark:"0"}), // body data type must match "Content-Type" header
    });
    console.log("Adding a new map");
    const map={
      "userName":userName,
      "resName":resName,
      "bookmark":"0"
    };
    const json = await response.json();
    console.log(json);
    setMaps(maps.concat(map));
  };


  const updateMap = async (id, bookmark) => {
    const response = await fetch(`${host}/api/map/updatemap/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({bookmark})
    });
    const json = response.json();
    console.log(json);
    let newMaps = JSON.parse(JSON.stringify(maps));
    setMaps(newMaps);
  }


  const deleteMap = async (id) => {
    const response = await fetch(`${host}/api/map/deletemap/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    });
    const json = response.json();
    console.log(json);
    // console.log("Deleting a map with resName: " + id);
    const newMaps = maps.filter((map) => {return map._id !== id});
    setMaps(newMaps);
  }

  return (
    <mapContext.Provider value={{ maps, addMap, getMap, updateMap, deleteMap }}>
      {props.children}
    </mapContext.Provider>
  );
};

export default MapState;
