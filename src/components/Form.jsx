import React, {useContext, useState} from 'react'
import JonasContext from '../context/FarContext'

const Form = () => {
  const{ items, setItems} = useContext(JonasContext)
    const [quantity, setQuantity] = useState(1);
    const [description, setDescription] = useState("");

    const handleAddItems=(item) =>{
      setItems((items) => [...items, item]);
    }
  
    const handleSubmit = (e) => {
        e.preventDefault();  
        const newItem = { description, quantity, packed: false, id: Date.now() };
        console.log(newItem)
        handleAddItems(newItem)
        setDescription("");
        setQuantity(1);
    }
    
  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your 😍 trip?</h3>
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <button>Add</button>
    </form>
  )
}

export default Form