import React, { useState, useMemo } from 'react';
import './App.css';
import {RatingSecret, RatingValuePropsType, valueType} from "./components/Rating/RatingSecret";
import {OnOff} from "./components/OnOff/OnOf";
import {UncontrolledOnOffSecret} from "./components/UncontrolledOnOff/OnOf";
import {UncontrolledInputsSecret} from "./components/UncontolledInputs/UncontrolledInputsSecret";
import {SelectSecret, SelectType} from "./components/Select/SelectSecret";
import {UnctrolledAccordionSecret} from "./components/UnconrolledAccordion/UncontrolledAccordion";
import {Example1} from "./components/ReactMemo/ReactMemo";
import AccordionSecret from "./components/Accordion/Accordion";
import {ExampleSelectWithMemoSecret} from "./components/ExampleSelectWithMemo/ExampleSelectWithMemoSecret";

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

export type SelectWithMemo = {
    id: number;
    value: string;
    title: string;
    citizens?: number;
}

const DataForExampleSelectWithMemo: SelectWithMemo[] = [
    {id: 1, value: '1', title: 'none'},
    {id: 2, value: '2', title: 'Minsk', citizens: 50000},
    {id: 3, value: '3', title: 'Moscow', citizens: 100000},
    {id: 4, value: '4', title: 'Gomel', citizens: 30000},

]

function App() {
    const[ratingValue, setRatingValue] = useState<valueType>(0);
    const[collapsedValue, setCollapsedValue] = useState(false);
    const [light, setLight] = useState<boolean>(false);
    const [selectValue, setSelectValue] = useState('1');
    const [selectValueWithO, setSelectValueWithO] = useState('1');
    const [selectValueCitizen, setSelectValueCitizen] = useState('1');

    const usualSelectData = useMemo(()=> {
        return DataForExampleSelectWithMemo;
    }, [])
    const selectDataWithOMemo = useMemo(()=> {
        return DataForExampleSelectWithMemo.filter(el => el.title.indexOf('o') !== -1);
    }, []);
    const selectDataCitizenMemo = useMemo(()=> {
        return DataForExampleSelectWithMemo.filter(el => el.citizens ? el.citizens > 30000 : el);
    }, [])
   /* const [selectValue, setSelectValue] = useState<SelectWithMemo[]>([
        {id: 1, value: '1', title: 'none'},
        {id: 2, value: '2', title: 'Minsk', citizens: 50000},
        {id: 3, value: '3', title: 'Moscow', citizens: 100000},
        {id: 4, value: '4', title: 'Gomel', citizens: 30000},

    ])*/

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

          {/*  <Select selectData={selectData}
                    setSelectValue={setSelectValue}
                    value={selectValue}/>*/}
            <UncontrolledAccordion title={'users'}/>
            <Example1/>
            <ExampleSelectWithMemo selectData={usualSelectData} value={selectValue} setSelectValue={setSelectValue}/>
            <ExampleSelectWithMemo selectData={selectDataWithOMemo} value={selectValueWithO} setSelectValue={setSelectValueWithO}/>
            <ExampleSelectWithMemo selectData={selectDataCitizenMemo} value={selectValueCitizen} setSelectValue={setSelectValueCitizen}/>
        </div>
    );
}

const Accordion = React.memo(AccordionSecret)
const Rating = React.memo(RatingSecret)
const Select = React.memo(SelectSecret)
const UncontrolledAccordion= React.memo(UnctrolledAccordionSecret)
const UncontrolledInputs= React.memo(UncontrolledInputsSecret)
const UncontrolledOnOff= React.memo(UncontrolledOnOffSecret)
const ExampleSelectWithMemo= React.memo(ExampleSelectWithMemoSecret)

export default App;
