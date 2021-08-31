import React from "react";

  
export default function Todos({ todos, handleCheck }) {
  return (
    <div>
      {todos.map((v, i) => (
        <div key={i}>
              <span className={v.isComplete ? 'checked' : ''}>{v.title}</span>
          <input
            type="checkbox"
            onChange={() => handleCheck(i)}
            checked={v.isComplete}
          />
        </div>
      ))}
    </div>
  );
}
