import React, { useState, useEffect } from 'react'

const SingleColor = ({ rgb, weight, index, hexColor }) => {
  const [alert, setAlert] = useState(false);
  const bgc = rgb.join(',');

  const hexValue = `#${hexColor}`

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert(false)
    }, 3000)
    return () => {
      clearTimeout(timeout)
    }
  }, [alert])

  return (
    <article 
    className={`color ${index > 10 && 'color-light'}`} 
    style={{ backgroundColor: `rgb(${bgc})` }}
    onClick={() =>  {
      setAlert(true)
      navigator.clipboard.writeText(hexValue)
    }}
    >
      <p className="percentage-value">{weight}%</p>
      <p className="color-value">{hexValue}</p>
      {alert && <p className={`alert ${index > 5 && 'color-light'}`}>copied to clipboard</p> }
    </article>
  );
}

export default SingleColor
