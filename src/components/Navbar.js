import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header>
      <h1>NAVBAR</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Gallery</Link>
          </li>
          <li>
            <Link to="/new">Add picture</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
