import React from 'react'
import PageUpper from './Components/Page1/PageUpper'
import PageLower from './Components/Page2/PageLower'


const App = (props) => {
  const users = [
    {
    img: 'https://images.unsplash.com/photo-1498758536662-35b82cd15e29?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    intro: 'I am Ali, a creative designer passionate about building simple, beautiful, and meaningful digital experiences.',
    tag: 'Satisfied',
    color: 'lightseagreen',
  },
  {
    img: 'https://plus.unsplash.com/premium_photo-1757517371816-bcbbacb7d1b9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fHw%3D',
    intro: 'I am Rahul, a dedicated developer who enjoys solving problems and turning ideas into functional products.',
    tag: 'Underserved',
    color: 'royalblue',
  },
  {
    img: 'https://images.unsplash.com/photo-1615472096167-e2efc2f25dcd?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    intro: 'I am Zoya, an ambitious entrepreneur focused on creating innovative solutions that make everyday life easier.',
    tag: 'Underbanked',
    color: 'mediumslateblue',
  },
  {
    img: 'https://images.unsplash.com/photo-1545184180-25d471fe75eb?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    intro: 'I am Fahim, a dedicated developer who enjoys solving problems and turning ideas into functional products.',
    tag: 'Underserved',
    color: 'crimson',
  },
  {
    img: 'https://images.unsplash.com/photo-1491975474562-1f4e30bc9468?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8d29ya2luZyUyMHdvbWVufGVufDB8fDB8fHww',
    intro: 'I am Ali, a creative designer passionate about building simple, beautiful, and meaningful digital experiences.',
    tag: 'Satisfied',
    color: 'lightseagreen',
  },
  {
    img: 'https://images.unsplash.com/photo-1600275669283-4bf2bb8a990c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHdvcmtpbmclMjB3b21lbnxlbnwwfHwwfHx8MA%3D%3D',
    intro: 'I am Rahul, a dedicated developer who enjoys solving problems and turning ideas into functional products.',
    tag: 'Underserved',
    color: 'royalblue',
  },
  {
    img: 'https://images.unsplash.com/photo-1579389083046-e3df9c2b3325?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fHdvcmtpbmd8ZW58MHx8MHx8fDA%3D',
    intro: 'I am Zoya, an ambitious entrepreneur focused on creating innovative solutions that make everyday life easier.',
    tag: 'Underbanked',
    color: 'mediumslateblue',
  },
  {
    img: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fHdvcmtpbmd8ZW58MHx8MHx8fDA%3D',
    intro: 'I am Fahim, a dedicated developer who enjoys solving problems and turning ideas into functional products.',
    tag: 'Underserved',
    color: 'crimson',
  },
  ];
  return (
    <div className='h-screen'>
   <PageUpper users={users} />
   <PageLower />
    </div>
  )
}

export default App
