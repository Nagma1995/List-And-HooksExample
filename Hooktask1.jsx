import React, { useState } from "react";

const Hooktask1 = () => {
  const [count, setCount] = useState(0);
  const plus = () => setCount(count + 1);

  const sub = () => setCount(count - 1);
  return (
    <div style={{ textAlign: "center", marginTop: "50ox" }}>
      <h3>Counter:{count}</h3>
      <button onClick={plus} style={buttonStyle}>
        ➕ Increment
      </button>
      <br />
      <br />
      <button onClick={sub} style={{ ...buttonStyle }}>
        ➖ Decrement
      </button>
      {/* <button
        onClick={() => {
          setCount(count + 1);
        }}
        style={{ ...buttonStyle }}
      >
        Decrement
      </button> */}
    </div>
  );
};
const buttonStyle = {
  padding: "10px 20px",
  fontSize: "16px",
  margin: "10px",
  cursor: "pointer",
  backgroundColor: "blue",
  color: "white",
  border: "none",
  borderRadius: "5px",
};

export default Hooktask1;
