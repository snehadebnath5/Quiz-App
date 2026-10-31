import { Link, useLocation } from "react-router-dom";

function Result() {
  const location = useLocation();

  const score = location.state?.score || 0;
  const total = location.state?.total || 7;

  return (
    <div>
      <h1>Quiz Completed 🎉</h1>

      <h2>
        Your Score: {score} / {total}
      </h2>

      <Link to="/">
        <button>Play Again</button>
      </Link>
    </div>
  );
}

export default Result;