import React, { useState } from "react";
import  {CORE_CONCEPTS} from "./data"
import Header from "./components/header/Header"; 
import CoreConcepts from "./components/coreConcepts/CoreConcepts";
import TabButton from "./components/tab-button/TabButton";
import { EXAMPLES } from "./data.js";
function App() {
  const [selectedTopic, setSelectedTopic] = useState("");
   const handleSelect = (topic) => {
    setSelectedTopic(topic);
    setIsSelected(true);
  }
  
  return (
    <React.Fragment>
 
      <Header title="React essentials" />
 
      <main>
        <section id="core-concepts">
          <h3>Core concepts</h3>
          <ul>
            {
              CORE_CONCEPTS.map((concept ) => {
                return (
                  <CoreConcepts key={concept.title}   {...concept} />
        
                )
              })
         }
           </ul>
        </section>
         
        <section id="examples">
          <h3>Examples</h3>
          <menu>
          <TabButton isSelected={selectedTopic === "components"}   onSelect={()=>handleSelect("components")}  >Component</TabButton> 
               <TabButton isSelected={selectedTopic === "jsx"} onSelect={()=>handleSelect("jsx")}  >Jsx</TabButton> 
              <TabButton  isSelected={selectedTopic === "props"} onSelect={()=>handleSelect("props")}  >Props</TabButton> 
              <TabButton isSelected={selectedTopic === "state"}  onSelect={()=>handleSelect("state")} >State</TabButton> 
    </menu>
          <div id="tabs-content">
            {
              selectedTopic ?( <React.Fragment><h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code >{EXAMPLES[selectedTopic].code}</code>
                </pre></React.Fragment>) : <h3>Please Select an Topic</h3>
          }
     </div>
        </section>
 
      </main>

      </React.Fragment>
  );
}

export default App;
