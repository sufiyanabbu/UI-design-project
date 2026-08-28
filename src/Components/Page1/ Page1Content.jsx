import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

const  Page1Content = (props) => {
  return (
    <div  className='py-20 px-20 flex items-center justify-evenly gap-15 h-[90vh] '>
      <LeftContent />
      <RightContent users={props.users}/>
    </div>
  )
}

export default  Page1Content
