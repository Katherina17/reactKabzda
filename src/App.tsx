import React, { useState } from 'react';
import './App.css';
import {Rating, RatingValuePropsType, valueType} from "./components/Rating/Rating";
import Accordion from "./components/Accordion/Accordion";
import {OnOff} from "./components/OnOff/OnOf";
import {UncontrolledOnOff} from "./components/UncontrolledOnOff/OnOf";
import {UncontrolledInputs} from "./components/UncontolledInputs/UncontrolledInputs";
import {Select, SelectType} from "./components/Select/Select";
import {UnctrolledAccordion} from "./components/UnconrolledAccordion/UncontrolledAccordion";

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
           {/* <Rating value={ratingValue} setRatingValue={setRatingValue}/>
            <Accordion title={"Users"}
                       collapsed={collapsedValue}
                       setCollapsedValue={setCollapsedValue}/>

            <UncontrolledOnOff light={light}
                               setLight={setLight}/>*/}
           {/* <UncontrolledInputs/>*/}
            {/*<Accordion title={"Users"}
                       collapsed={collapsedValue}
                       items={usersValues}
                       setCollapsedValue={setCollapsedValue}
                        callBack={(value) => onClickHandler(value)}/>
            <Accordion title={'Admin'}
                       collapsed={collapsedValue}
                       items={adminValues}
                       setCollapsedValue={setCollapsedValue}
                       callBack={(value) => onClickHandler(value)}/>*/}

           {/* <Select selectData={selectData}
                    setSelectValue={setSelectValue}
                    value={selectValue}/>*/}
            <UnctrolledAccordion title={'users'}/>
        </div>
    );
}

export default App;
