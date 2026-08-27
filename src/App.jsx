import React from 'react'
import Card from './Components/Cards/Card'
import PageUpper from './Components/Page1/PageUpper'
import PageLower from './Components/Page2/PageLower'


const App = () => {
  return (
    <div className='h-screen'>
   <PageUpper />
   <PageLower />
    </div>
  )
}

export default App
