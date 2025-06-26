import React from 'react'
import Categorycard from './components/Categorycard'
import StatsCounter from './components/Statscounter'


const App = () => {
  return (
    <div className='overflow-x-hidden'>
      <Categorycard/>
      <StatsCounter/>
    </div>
  )
}

export default App
