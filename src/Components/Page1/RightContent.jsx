import Card from "../Cards/Card";
import RightCard from "./RightCard";

const RightContent = (props) => {
  return (
    <div className='h-full w-3/4 p-10 flex flex-nowrap overflow-x-auto gap-10'>
      {props.users.map(function(elem){
        return (
        <RightCard img={elem.img} intro={elem.intro} tag={props.tag}/>
        );
      })}
    </div>
  )
}

export default RightContent
