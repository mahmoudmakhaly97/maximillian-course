import React , { useState } from 'react'
import TabButton from '../tab-button/TabButton'
import { EXAMPLES } from '../../data'
import Section from '../section/Section';

const Examples = () => {
      const [selectedTopic, setSelectedTopic] = useState("");

     const handleSelect = (topic) => {
    setSelectedTopic(topic);
    setIsSelected(true);
  }
  
  return (
      <Section id="examples" title="Examples" className="">
 
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
        </Section>
  )
}

export default Examples