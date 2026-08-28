import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

const  Page1Content = () => {
  return (
    <div  className='py-20 px-20 flex items-center justify-evenly gap-15 h-[90vh] '>
      <LeftContent />
      <RightContent />
    </div>
  )
}

export default  Page1Content
