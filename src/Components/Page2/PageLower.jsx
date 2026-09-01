import Page2MidCon from "./Page2MidCon"

const PageLower = () => {
  return (
    <div className=' h-screen w-full bg-black '>
      <div className="text-white  font-bold h-50 flex justify-center items-center gap-10 flex-col mb-20">
        <h1 className="tracking-wide text-5xl my-10">"Let's grow your brand together!"</h1>
            <h1  className="text-white ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, consequuntur!</h1>
      </div>
      <Page2MidCon />
      <div className="flex justify-center items-center mt-10 text-2xl">
      </div>
    </div>
  )
}

export default PageLower
