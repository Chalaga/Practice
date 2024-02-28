import React from 'react'

const Button = ({type}) => {
    const ClassName = type === 'Resolve' ? 'resolved-button' : 'rejected-button'
  return <button className={ClassName}>{type || 'Click Me' }</button>
}

export default Button