import { useState } from 'react'
import './index.css'
import Logo from './components/Logo'
import Form from './components/Form'
import Item from './components/Item'
import PackingList from './components/PackingList'
import Stats from './components/Stats'

function App() {
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }
  return (
    <div className='app'>
     <Logo />
     <Form handleAddItems={handleAddItems}/>
     <PackingList items={items}/>
     <Stats />
    </div>
  )
}

export default App
