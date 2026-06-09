import { Link } from "react-router-dom";
import "../css/navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <h2>AffordMed Notifications</h2>

      <div>
        <Link to="/">Priority Inbox</Link>

        <Link to="/all">All Notifications</Link>
      </div>
    </nav>
  );
}

export default Navbar;