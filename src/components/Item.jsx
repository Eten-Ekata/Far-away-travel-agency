import React, {useContext} from 'react'
import JonasContext from '../context/FarContext'

const Item = ({item}) => {
  const{ items, setItems} = useContext(JonasContext)

  const handleDeleteItem=(id)=>{
    setItems((items) => items.filter((item) => item.id !== id));
  }
  
  const handleToggleItem=(id)=>{
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }
  return (
    <li>
    <input
      type="checkbox"
      value={item.packed}
      onChange={() => handleToggleItem(item.id)}
    />
    <span style={item.packed ? { textDecoration: "line-through" } : {}}>
      {item.quantity} {item.description}
    </span>
    <button onClick={() => handleDeleteItem(item.id)}>❌</button>
  </li>
  )
}

export default Item