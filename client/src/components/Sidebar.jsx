import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div style={{ width: "250px", background: "black", color: "white", padding: "20px" }}>
      <h1>AI Reviewer</h1>

      <ul>
        <li>
          <Link to="/" style={{ color: "white" }}>Dashboard</Link>
        </li>

        <li>
          <Link to="/review" style={{ color: "white" }}>Code Review</Link>
        </li>

        <li>
          <Link to="/settings" style={{ color: "white" }}>Settings</Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;