import React from "react";

const Fruitslist = () => {
  const fruits = ["apple", "banana", "Mango", "Orenge"];
  return (
    <div>
      <h4>Fruitslist</h4>
      <ul>
        {fruits.map((fruit, index) => (
          <li key={index} className="text-lg">
            {fruit}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Fruitslist;
