import React, { useContext, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import mapContext from "../context/mapContext";
import MapItem from "./MapItem";

export default function Bookmark() {
  const context = useContext(mapContext);
  const { maps, getMap } = context;
  useEffect(() => {
    getMap();
    //eslint-disable-next-line
  }, []);
  return (
    <>
      <Sidebar>
        <center>
          <h1 class="display-6">Bookmarked Restaurants</h1>
        </center>
        <div className="row my-3">
          {maps.map((m) => {
            if (m.bookmark === "1") {
              return <MapItem m={m} />;
            }
            return null;
          })}
        </div>
      </Sidebar>
    </>
  );
}
