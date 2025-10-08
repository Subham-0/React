import React from "react";
import CodeBlock from "./content/codeblock/CodeBlock";
import "./TopicPage.css"; // 👈 import styles

function TopicPage({
  title,
  theory,
  ExampleComponent,
  codeString,
  goBack,
  goNext,
  goPrev,
  prevTitle,
  nextTitle,
}) {
  return (
    <div className="topic-page">
      <h2>{title}</h2>

      <div className="theory-text">{theory}</div>

      <h3>Live Example:</h3>
      <div className="example-box">
        <ExampleComponent />
      </div>

      <h3>Code:</h3>
      <CodeBlock code={codeString} />

      <div className="back-btn-wrapper">
        <button className="nav-btn back-btn" onClick={goBack}>
          ← Back to Learn Page
        </button>
      </div>

      <div className="nav-links">
        {prevTitle && (
          <button className="nav-link" onClick={goPrev}>
            ← {prevTitle}
          </button>
        )}
        {nextTitle && (
          <button className="nav-link" onClick={goNext}>
            {nextTitle} →
          </button>
        )}
      </div>
    </div>
  );
}

export default TopicPage;
