import React from 'react'

const Resultbox = ({color,hexValue,isDark}) => {
  return (
    <section className='box'
        style={{
            backgroundColor:color,
            color:isDark ? "white" : "black"
        }}
    >
    <p>{color ? color : "Empty"}</p>
    <p>{hexValue ? hexValue :null}</p>
    </section>
  )
}
// resultbox.defaultProps={
//     color:"Empty color value"  
// }

export default Resultbox