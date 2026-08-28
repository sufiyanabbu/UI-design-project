import React from 'react'
import Card from './Components/Cards/Card'
import PageUpper from './Components/Page1/PageUpper'
import PageLower from './Components/Page2/PageLower'


const App = (props) => {
  const users = [

    {
      img: 'https://images.unsplash.com/photo-1752856408620-2e6fc6ac072f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro: 'I am Aisha, a creative designer passionate about building simple, beautiful, and meaningful digital experiences.',
      tag: 'Satisfied'
    },
    {
      img: 'https://images.unsplash.com/photo-1507206130118-b5907f817163?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d29ya2luZyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D',
      intro: 'I am Rahul, a dedicated developer who enjoys solving problems and turning ideas into functional products.',
      tag: 'Underserved'
    },
    {
      img: 'https://images.unsplash.com/photo-1535957998253-26ae1ef29506?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d29ya2luZ3xlbnwwfHwwfHx8MA%3D%3D',
      intro: 'I am Zoya, an ambitious entrepreneur focused on creating innovative solutions that make everyday life easier.',
      tag: 'Underbanked'
    },
    ,
    {
      img: 'https://images.unsplash.com/photo-1545184180-25d471fe75eb?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro: 'I am Fahim, a dedicated developer who enjoys solving problems and turning ideas into functional products.',
      tag: 'Underserved'
    }
  ];
  return (
    <div className='h-screen'>
   <PageUpper users={users} />
   <PageLower />
    </div>
  )
}

export default App
