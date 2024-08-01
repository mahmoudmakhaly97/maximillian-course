import React from 'react'

const TabButton = ({ children  ,  isSelected,...rest  }) => {
     
  return (
      <li>
      <button className={isSelected ? 'active' : ''}  {...rest}>{children}</button>
   </li>
  )
}

export default TabButton