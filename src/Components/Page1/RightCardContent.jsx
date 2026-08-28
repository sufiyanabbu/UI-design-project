import React from 'react'

const RightCardContent = (props) => {
    console.log(props.tag);
  return (
    <div className="absolute top-0 left-0  h-full w-full p-8 flex flex-col justify-between">
        <h2 className="text-xl font-bold bg-white flex justify-center items-center h-12 w-12 rounded-full">1</h2>
        <div className="">
            <p className="text-xl leading-normal text-gray-300 mt-70 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt iste ex in, illo distinctio exercitationem!</p>
        </div>
        <div className="flex">
            <button className="bg-blue-600 text-white text-lg font-semibold px-7 py-3 rounded-full">{props.tag}</button>
            <button className="bg-blue-600 text-white text-lg font-semibold px-7 py-3 rounded-full "><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
</svg>
</button>
        </div>
     </div>
  )
}

export default RightCardContent
