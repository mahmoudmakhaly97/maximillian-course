import React from "react";
import componentImage from "./assets/components.png"
import  {CORE_CONCEPTS} from "./data"
function Header({title ,  image , description}) {
  
   return (
     <header>
        <img src={image} alt="Stylized atom" />
        <h1>{title}</h1>
        <p>
{description}
        </p>
      </header>
  )
}
function CoreConcepts({image, title, description}) {
  return (
    <li>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>
        {description}
      </p>
    </li>
  )
}
function App() {
  return (
    <React.Fragment>
      <Header title="React essentials" />
            <Header title="React  concepts" />

      <main>
        <section id="core-concepts">
          <h3>Core concepts</h3>
          <ul>
            <CoreConcepts image = {CORE_CONCEPTS[0].image}  title={CORE_CONCEPTS[0].title} description={CORE_CONCEPTS[0].description}/>
            <CoreConcepts {...CORE_CONCEPTS[1]} />
            <CoreConcepts {...CORE_CONCEPTS[2]} />
            <CoreConcepts {...CORE_CONCEPTS[3]} />
        
           </ul>
          </section>
      </main>
      </React.Fragment>
  );
}

export default App;
