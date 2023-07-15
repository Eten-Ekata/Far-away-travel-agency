import { useState } from 'react'
import './index.css'
import Logo from './components/Logo'
import Form from './components/Form'
import Item from './components/Item'
import PackingList from './components/PackingList'
import Stats from './components/Stats'

function App() {
  const [items, setItems] = useState([]);

  const handleAddItems=(item) =>{
    setItems((items) => [...items, item]);
  }

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

  const handleClearList=()=>{
    const confirmed = window.confirm(
      "Are you sure you want to delete all items?"
    );

    if (confirmed) setItems([]);
  }
  return (
    <div className='app'>
     <Logo />
     <Form handleAddItems={handleAddItems}/>
     <PackingList 
     items={items} 
     handleClearList={handleClearList}
     handleDeleteItem={handleDeleteItem}
     handleToggleItem={handleToggleItem} 
     />
     <Stats items={items} />
    </div>
  )
}

export default App
