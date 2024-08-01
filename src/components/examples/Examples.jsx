import React , { useState } from 'react'
import TabButton from '../tab-button/TabButton'
import { EXAMPLES } from '../../data'
import Section from '../section/Section';
import Tabs from '../tabs/Tabs';

const Examples = () => {
      const [selectedTopic, setSelectedTopic] = useState("");

     const handleSelect = (topic) => {
    setSelectedTopic(topic);
    setIsSelected(true);
  }
  
  return (
      <Section id="examples"  title="Examples"   className="">
       <Tabs buttonsContainer = "menu" buttons={<><TabButton isSelected={selectedTopic === "components"} onClick={() => handleSelect("components")}  >Component</TabButton> 
               <TabButton isSelected={selectedTopic === "jsx"} onClick={()=>handleSelect("jsx")}  >Jsx</TabButton> 
              <TabButton  isSelected={selectedTopic === "props"} onClick={()=>handleSelect("props")}  >Props</TabButton> 
              <TabButton isSelected={selectedTopic === "state"}  onClick={()=>handleSelect("state")} >State</TabButton> </>}>
            <div id="tabs-content">
            {
              selectedTopic ?( <React.Fragment><h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code >{EXAMPLES[selectedTopic].code}</code>
                </pre></React.Fragment>) : <h3>Please Select an Topic</h3>
          }
        </div>
        </Tabs>
       </Section>
  )
}
export default Examples