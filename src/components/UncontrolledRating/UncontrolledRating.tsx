import React, { useState } from 'react';

type StarProps = {
    onClick: () => void;
    selected: boolean
}


export const UncontrolledRating = () => {
    const[value, setValue] = useState<number>(0);

    return (
        <div>
            <Star onClick={() => setValue(1)} selected={value > 0}/>
            <Star onClick={() => setValue(2)} selected={value > 1}/>
            <Star onClick={() => setValue(3)} selected={value > 2}/>
            <Star onClick={() => setValue(4)} selected={value > 3}/>
            <Star onClick={() => setValue(5)} selected={value > 4}/>
        </div>
    )
}

function Star (props: StarProps){

    const styleStar = {
        fontWeight: props.selected ? 'bold' : '',
        marginRight: '10px'
    }

    return(
        <>
            <span style={styleStar} onClick={props.onClick}>star</span>
        </>
    )
}