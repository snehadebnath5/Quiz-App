import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <h2>Online Quiz</h2>

      <div>
        <Link to="/">Home</Link>
        <Link to="/quiz">Quiz</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;