import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <h1>NAVBAR</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/new">Add picture</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
