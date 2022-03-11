import React from "react";

import CharacterEditor from "./components/CharacterEditor";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <CharacterEditor />
      <div className="desktop">
        <Footer />
      </div>
    </>
  );
}

export default App;
