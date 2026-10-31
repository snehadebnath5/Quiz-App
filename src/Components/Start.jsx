import { Link } from "react-router-dom";

function Start() {
  return (
    <div className="home-page">

      <h1>Welcome to Online Quiz 🎯</h1>

      <h2>Test Your Knowledge!</h2>

      <p>
        Welcome to our Online Quiz Application.
        Challenge yourself with interesting questions
        and see how much you know.
      </p>

      <p>
        Answer 7 questions, choose the correct options,
        and check your final score at the end.
      </p>

      <Link to="/quiz">
        <button className="start-button">
          Start Quiz 🚀
        </button>
      </Link>

    </div>
  );
}

export default Start;