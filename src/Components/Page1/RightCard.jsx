import RightCardContent from "./RightCardContent"

const RightCard = (props) => {
  return (
    <div className="h-full overflow-hidden shrink-0 relative w-80 rounded-4xl">
      <img  className='h-full w-full object-cover' src={props.img} alt="" />
      <div className="absolute top-0 left-0  h-full w-full p-8 flex flex-col justify-between">
        <h2 className="text-xl font-bold bg-white flex justify-center items-center h-12 w-12 rounded-full">{props.id+1}</h2>
        <div className="">
            <p className="text-xl text-shadow-2xs leading-normal text-gray-50 mt-80 ">{props.intro}</p>
        </div>
        <div className="flex justify-between">
            <button style={{backgroundColor:props.color}} className=" text-white text-lg font-semibold px-7 py-3 rounded-full">{props.tag}</button>
            <button className=" text-white text-lg font-semibold px-5 py-2 rounded-full "><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
</svg>
</button>
        </div>
     </div>
      <RightCardContent />
    </div>
  )
}

export default RightCard
