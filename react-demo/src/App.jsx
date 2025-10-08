import React, { useState } from "react";
import Learn from "./Learn";
import Header from "./components/Header";
import Footer from "./components/Footer";
import './global.css'; 

function App() {
  const [currentTopic, setCurrentTopic] = useState("");

  return (
    <div>
      <Header onTitleClick={() => setCurrentTopic("")} />
      <Learn currentTopic={currentTopic} setCurrentTopic={setCurrentTopic} />
      <Footer />
    </div>
  );
}

export default App;
