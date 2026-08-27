import React from 'react'

const Card = (props) => {
    console.log(props)
  return (
    <div>
      <h1>{props.name}</h1>
      <h1>{props.email}</h1>
      <h1>{props.age}</h1>
    </div>
  )
}

export default Card
