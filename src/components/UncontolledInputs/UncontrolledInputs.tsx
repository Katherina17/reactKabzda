import React, {ChangeEvent, useState} from "react";


export const  UncontrolledInputs = () => {
    return(
        <div style={{display:'flex', flexDirection: 'column'}}>
            <UnControlledInput/>
            <TrackValueOfUnControlledInput/>
            <GetValueFromUncontrolledInputByButton/>
            <UnControlledInputWithFixedValue/>
            <ControlledInput/>
            <ControlledCheckBox/>
            <ControlledSelect/>
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
    let inputValue = React.useRef<HTMLInputElement>(null);
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

const ControlledInput = () => {
    const [value, setValue] = useState('');
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }
    return (<>
            <input onChange={onChangeHandler} value={value}/>
            <span> --- {value}</span>
        </>
    )
}

const ControlledCheckBox = () => {
    const [value, setValue] = useState(false);
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.checked)
    }
    return (<>
            <input type={'checkbox'} onChange={onChangeHandler} checked={value}/>
        </>
    )
}


const ControlledSelect = () => {
    const [value, setValue] = useState<string | undefined>(undefined);
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }
    return (<>
            <select value={value}>
                <option value={'1'}> HTML </option>
                <option value={'2'}> JS </option>
                <option value={'3'}> CSS </option>
            </select>
        </>
    )
}