import {useEffect, useState} from "react";
import s from './alarm.module.css';

export default {
    title: 'Clock',
}

export const Clock = () => {
   const[date, setDate] = useState(new Date().toLocaleTimeString());

   useEffect(() => {
      const intervalId  = setInterval( () => setDate(new Date().toLocaleTimeString()), 1000)
       return () => clearInterval(intervalId)
   }, [])
    return(
        <div>
           <p>{date}</p>
        </div>
    )
}

const addZeroForAlarm = (num: number):number => {
    return num < 10 ? Number('0' + num) : num
}

type time = {
    time: 'hour' | 'min' | 'sec'
}

const getCurrentPosition = (num: number, timeType: string) => {
    switch(timeType){
        case "hour": {
            return num * 30
        }
        case "min": {
            return num * 5
        }
        case "sec": {
            return num * 5
        }
    }
}

export const Alarm= () => {
    const[date, setDate] = useState(new Date());
    useEffect(() => {
        const intervalId  = setInterval( () => setDate(new Date()), 1000)
        return () => clearInterval(intervalId)
    }, [])
    return(
        <div className={s.alarm}>
            <div className={s.hours} style={{transform: `rotate(${getCurrentPosition(addZeroForAlarm(date.getHours()),'hour')}deg)`}}></div>
            <div className={s.minutes} style={{transform: `rotate(${getCurrentPosition(addZeroForAlarm(date.getMinutes()),'min')}deg)`}}></div>
            <div className={s.sec} style={{transform: `rotate(${getCurrentPosition(addZeroForAlarm(date.getSeconds()),'sec')}deg)`}}></div>
        </div>
    )
}

/*{addZeroForAlarm(date.getHours())}*/

/*{addZeroForAlarm(date.getMinutes())}*/

/*{addZeroForAlarm(date.getSeconds())}*/





