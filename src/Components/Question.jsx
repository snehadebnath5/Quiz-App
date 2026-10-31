function Question({ question, options, selectedAnswer, setSelectedAnswer }) {
  return (
    <div>
      <h2>{question}</h2>

      <div style={{ marginTop: "25px" }}>
        {options.map((option) => (
          <button
            key={option}
            onClick={() => setSelectedAnswer(option)}
            style={{
              display: "block",
              width: "300px",
              margin: "12px auto",
              padding: "14px",
              borderRadius: "10px",
              border: "1px solid #ccc",
              cursor: "pointer",
              backgroundColor:
                selectedAnswer === option ? "#bde0fe" : "white",
              fontSize: "16px"
            }}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Question;