import React, { useState } from "react";
 import Header from "./components/header/Header"; 
  import CoreConcepts from "./components/coreConcepts/CoreConcepts";
import Examples from "./components/examples/Examples";
function App() {
  
  return (
    <>
 
      <Header title="React essentials" />
 
      <main>
    <CoreConcepts /> 
         
  <Examples /> 
 
      </main>

      </>
  );
}

export default App;
