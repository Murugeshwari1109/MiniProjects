import React from 'react'
import { FaPlus } from 'react-icons/fa'
import { useRef } from 'react'
const AddNewItem = ({newItem,setNewItem,handleSubmit}) => {

  const inputRef = useRef()
  return (
    <form className='addForm'  onSubmit={handleSubmit}>
        <label htmlFor="addNewItem">AddItem</label>
        <input 
            autoFocus
            type="text" 
            ref={inputRef} 
            id="addNewItem" 
            placeholder="Enter Item" 
            value={newItem}
            onChange={(e)=>setNewItem(e.target.value)}
            required
        />
        <button 
            type="submit"
            aria-label='Add Item'
            onClick={()=>inputRef.current.focus()}
        >
        <FaPlus /> 
        </button>
    </form>
  )
}

export default AddNewItem