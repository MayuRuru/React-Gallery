import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className={styles.header}>
      <div>
        <h1>NAVBAR</h1>
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/">Gallery</Link>
          </li>
          <li>
            <Link to="/new">Add picture</Link>
          </li>
          <li>
            <Link to="/crud">CRUD</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
