import React, { useState } from 'react';
import './App.css';
import {Rating, RatingValuePropsType, valueType} from "./components/Rating/Rating";
import Accordion from "./components/Accordion/Accordion";
import {OnOff} from "./components/OnOff/OnOf";
import {UncontrolledOnOff} from "./components/UncontrolledOnOff/OnOf";
import {UncontrolledInputs} from "./components/UncontolledInputs/UncontrolledInputs";

const usersValues = [
    {id: 1, value: 'Stas'},
    {id: 2, value: 'Dima'},
    {id: 3, value: 'Nastya'},
    {id: 4, value: 'Igor'},
    {id: 5, value: 'Vasya'},
]

const adminValues = [
    {id: 6, value: 'Stanislau'},
    {id: 7, value: 'Dmitry'},
    {id: 8, value: 'Anastasia'},
    {id: 9, value: 'Igor'},
    {id: 10, value: 'Vasily'},
]

function App() {
    const[ratingValue, setRatingValue] = useState<valueType>(0);
    const[collapsedValue, setCollapsedValue] = useState(false);
    const [light, setLight] = useState<boolean>(false);

    const onClickHandler = (value: string) => {
        console.log(`Hello, ${value}, have a good day!`)
    }

    return (
        <div className='App'>
           {/* <Rating value={ratingValue} setRatingValue={setRatingValue}/>
            <Accordion title={"Users"}
                       collapsed={collapsedValue}
                       setCollapsedValue={setCollapsedValue}/>
            <Accordion title={'Admin'}
                       collapsed={collapsedValue}
                       setCollapsedValue={setCollapsedValue}/>
            <UncontrolledOnOff light={light}
                               setLight={setLight}/>*/}
           {/* <UncontrolledInputs/>*/}
            <Accordion title={"Users"}
                       collapsed={collapsedValue}
                       items={usersValues}
                       setCollapsedValue={setCollapsedValue}
                        callBack={(value) => onClickHandler(value)}/>
            <Accordion title={'Admin'}
                       collapsed={collapsedValue}
                       items={adminValues}
                       setCollapsedValue={setCollapsedValue}
                       callBack={(value) => onClickHandler(value)}/>
        </div>
    );
}

export default App;
