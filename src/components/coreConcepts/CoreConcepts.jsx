import React from 'react'
import { CORE_CONCEPTS } from "../../data.js";
import CoreConcept from "../coreConcept/CoreConcept.jsx";
const CoreConcepts = () => {
  return (
  <section id="core-concepts">
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
        </section>
  )
}

export default CoreConcepts