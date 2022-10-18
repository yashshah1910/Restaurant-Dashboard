import React, { useContext } from "react";
import { useLocation } from "react-router-dom";
import mapContext from "../context/mapContext";

function MapItem(props) {
  const context = useContext(mapContext);
  const { deleteMap, updateMap } = context;
  const { m } = props;
  const path = useLocation().pathname;
  console.log(path);
  return (
    <>
      <div className="col-md-12">
        <div class="card my-3">
          <div class="embed-responsive embed-responsive-21by9">
            <iframe
              src={`https://datastudio.google.com/embed/reporting/430242fa-4162-4950-a984-824b3b355b3c/page/dQMwC?params={%22ds2.name2%22:%22${m.resName}%22%7D`}
              class="embed-responsive-item"
              alt={m.resName}
            />
          </div>
          <div class="card-body">
            <center>
              <br />
              <h5>Restaurant Name: {m.resName}</h5>
              {path === "/bookmark" ? (
                <button
                  class="btn btn-primary"
                  onClick={() => {
                    updateMap(m._id, (m.bookmark = "0"));
                  }}
                >
                  Move to Homepage
                </button>
              ) : (
                <button
                  class="btn btn-primary"
                  onClick={() => {
                    updateMap(m._id, (m.bookmark = "1"));
                  }}
                >
                  Add to Bookmark
                </button>
              )}

              <button
                class="btn btn-danger"
                onClick={() => {
                  deleteMap(m._id);
                }}
              >
                Remove
              </button>
            </center>
          </div>
        </div>
      </div>
    </>
  );
}

export default MapItem;
