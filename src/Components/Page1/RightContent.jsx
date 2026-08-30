import Card from "../Cards/Card";
import RightCard from "./RightCard";

const RightContent = (props) => {
  return (
    <div id='right' className='h-full w-3/4 p-10 flex flex-nowrap overflow-x-auto gap-10'>
      {props.users.map(function(elem,idx){
        console.log(idx);
        
        return (
        <RightCard key={idx} id={idx} img={elem.img} intro={elem.intro} tag={elem.tag} color={elem.color}/>
        );
      })}
    </div>
  )
}

export default RightContent
