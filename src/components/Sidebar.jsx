import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import {BsFillBookmarkHeartFill} from "react-icons/bs"
import { AiOutlineHome } from "react-icons/ai";
import { NavLink } from "react-router-dom";
export default function Sidebar({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const menuItem = [
    {
      path: "/",
      name: "Home Page",
      icon: <AiOutlineHome />,
    },
    {
      path: "/bookmark",
      name: "Bookmarked Restaurants",
      icon: <BsFillBookmarkHeartFill />,
    },
  ];
  return (
    <div className="contain">
      <div style={{ width: isOpen ? "200px" : "50px" }} className="sidebar">
        <div className="top_section">
          <h1 style={{ display: isOpen ? "block" : "none" }} className="logo">
            Loop
          </h1>
          <div style={{ marginLeft: isOpen ? "50px" : "0px" }} className="bars">
            <FaBars onClick={toggle} />
          </div>
        </div>
        {menuItem.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            className="link"
            activeclassName="active"
          >
            <div className="icon">{item.icon}</div>
            <div
              style={{ display: isOpen ? "block" : "none" }}
              className="link_text"
            >
              {item.name}
            </div>
          </NavLink>
        ))}
      </div>
      <main>{children}</main>
    </div>
  );
}
