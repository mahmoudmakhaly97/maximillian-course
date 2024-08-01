import React from 'react'

const Section = ({ title , children , id , className}) => {
  return (
      <section id={id} className={className}>
          <h2>{title}</h2>
          {children }
 </section>
  )
}

export default Section