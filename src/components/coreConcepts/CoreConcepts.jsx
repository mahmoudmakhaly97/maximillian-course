import React from 'react'
import { CORE_CONCEPTS } from "../../data.js";
import CoreConcept from "../coreConcept/CoreConcept.jsx";
import Section from '../section/Section.jsx';
const CoreConcepts = () => {
  return (
  <Section id="core-concepts">
          <h3>Core concepts</h3>
          <ul>
            {
              CORE_CONCEPTS.map((concept ) => {
                return (
                  <CoreConcept key={concept.title}   {...concept} />
        
                )
              })
         }
           </ul>
        </Section>
  )
}

export default CoreConcepts