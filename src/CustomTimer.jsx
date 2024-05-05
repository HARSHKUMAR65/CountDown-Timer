import { useState , useEffect } from "react";
const Timer =(time) =>{
    const [minutes ,setMinutes] = useState(time.time ? time.time:0);
    const [second , setSecond] = useState(0);

    useEffect(()=>{
        setMinutes(time.time)
        setSecond(0)
    },[time.time])
    useEffect(()=>{
        const interval = setInterval(()=>{
            if(second == 0 ){
                if(minutes == 0){
                    clearInterval(interval);
                }else{
                    setMinutes(minutes -1)
                    setSecond(59)
                }
            }else{
                setSecond(second-1);
            }
        },1000);
        return () => clearInterval(interval);
    },[minutes,second ])
    return  (
<div className="timer flex flex-col items-center">
  <h1 className="text-3xl font-bold">
    {minutes < 10 ? `0${minutes}` : minutes}:
    {second < 10 ? `0${second}` : second}
  </h1>
</div>

    )
}
export default Timer