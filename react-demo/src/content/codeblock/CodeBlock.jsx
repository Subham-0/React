import React, { useState } from "react";
import "./CodeBlock.css";

function CodeBlock({ code }) {
  const [editableCode, setEditableCode] = useState(code);

  const handleReset = () => {
    setEditableCode(code); // reset to original
  };

  return (
    <div className="code-wrapper">
      <div className="code-header">
        <span>Editable Code</span>
        <button onClick={handleReset} className="reset-btn">
          Reset
        </button>
      </div>
      <textarea
        className="code-block"
        value={editableCode}
        onChange={(e) => setEditableCode(e.target.value)}
      />
    </div>
  );
}

export default CodeBlock;
