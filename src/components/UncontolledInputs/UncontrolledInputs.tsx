import React, {ChangeEvent, useState} from "react";


export const  UncontrolledInputs = () => {
    return(
        <div style={{display:'flex', flexDirection: 'column'}}>
            <UnControlledInput/>
            <TrackValueOfUnControlledInput/>
            <GetValueFromUncontrolledInputByButton/>
            <UnControlledInputWithFixedValue/>
        </div>
    )
}

const UnControlledInput = () => {
    return(
        <input/>
    )
}

const TrackValueOfUnControlledInput = () => {
    const [value, setValue] = useState('');
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }
    return (<>
            <input onChange={onChangeHandler}/>
            <span> --- {value}</span>
        </>
    )
}

const GetValueFromUncontrolledInputByButton = () => {
    const[value, setValue] = useState('');
    debugger
    let inputValue = React.useRef<HTMLInputElement>(null);
    debugger
    const save = () => {
        let currentEl = inputValue.current!.value;
        setValue(currentEl);
    }
    return (<>
            <input ref={inputValue}/>
            <button onClick={save}></button>
            <span> --- {value}</span>
        </>
    )
}

const UnControlledInputWithFixedValue = () => {
    return(
        <input value={'i\'am a fixed value'}/>
    )
}