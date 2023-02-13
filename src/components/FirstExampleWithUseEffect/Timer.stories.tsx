import {useEffect, useState} from "react";

export default {
    title: 'Timer',
}

export const Timer  = () => {
   const[date, setDate] = useState(new Date().toLocaleTimeString());

   useEffect(() => {
       setInterval( () => setDate(new Date().toLocaleTimeString()), 1000)
   })
    return(
        <div>
           <p>{date}</p>
        </div>
    )
}



