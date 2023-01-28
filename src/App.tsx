import React, { useState } from 'react';
import './App.css';
import {RatingSecret, RatingValuePropsType, valueType} from "./components/Rating/RatingSecret";
import {OnOff} from "./components/OnOff/OnOf";
import {UncontrolledOnOffSecret} from "./components/UncontrolledOnOff/OnOf";
import {UncontrolledInputsSecret} from "./components/UncontolledInputs/UncontrolledInputsSecret";
import {SelectSecret, SelectType} from "./components/Select/SelectSecret";
import {UnctrolledAccordionSecret} from "./components/UnconrolledAccordion/UncontrolledAccordion";
import {Example1} from "./components/ReactMemo/ReactMemo";
import AccordionSecret from "./components/Accordion/Accordion";

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


const selectData: SelectType[] = [
    {id: 6, value: '1', title: 'none'},
    {id: 7, value: '2', title: 'JS'},
    {id: 8, value: '3', title: 'CSS'},
    {id: 9, value: '4', title: 'HTML'},

]

function App() {
    const[ratingValue, setRatingValue] = useState<valueType>(0);
    const[collapsedValue, setCollapsedValue] = useState(false);
    const [light, setLight] = useState<boolean>(false);
    const [selectValue, setSelectValue] = useState('1');


    const onClickHandler = (value: string) => {
        console.log(`Hello, ${value}, have a good day!`)
    }

    return (
        <div className='App'>
            <Rating value={ratingValue} setRatingValue={setRatingValue}/>

            <UncontrolledOnOff light={light}
                                     setLight={setLight}/>
            <UncontrolledInputs/>
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

            <Select selectData={selectData}
                    setSelectValue={setSelectValue}
                    value={selectValue}/>
            <UncontrolledAccordion title={'users'}/>
            <Example1/>
        </div>
    );
}

const Accordion = React.memo(AccordionSecret)
const Rating = React.memo(RatingSecret)
const Select = React.memo(SelectSecret)
const UncontrolledAccordion= React.memo(UnctrolledAccordionSecret)
const UncontrolledInputs= React.memo(UncontrolledInputsSecret)
const UncontrolledOnOff= React.memo(UncontrolledOnOffSecret)


export default App;
