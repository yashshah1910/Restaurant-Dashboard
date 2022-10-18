import React, {useContext, useEffect } from "react";
import mapContext from "../context/mapContext";
import MapItem from "./MapItem";
function Maps() {
    const context = useContext(mapContext);
    const {maps, getMap} = context;
    useEffect(() => {
      getMap()
      //eslint-disable-next-line
    }, [])
    
  return (
    <div className="row my-3">
        <center><h2>Added Restaurant Maps</h2></center>
        {maps.map((m)=>{
          if (m.bookmark === "0") {
          return <MapItem m={m}/>;
          }
          return null;
        })}
      </div>
  )
}

export default Maps