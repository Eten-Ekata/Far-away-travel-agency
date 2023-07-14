import { useState } from 'react'
import './index.css'
import Logo from './components/Logo'
import Form from './components/Form'
import Item from './components/Item'
import PackingList from './components/PackingList'
import Stats from './components/Stats'

function App() {

  return (
    <div className='app'>
     <Logo />
     <Form />
     <PackingList />
     <Stats />
    </div>
  )
}

export default App
