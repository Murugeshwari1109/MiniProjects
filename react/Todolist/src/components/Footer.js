import React from 'react'
const Footer = ({length}) => {
  return (
    <footer>{length} List {length>1?"Items":"Item"}</footer>
  )
}
export default Footer