import React, { useState } from 'react';
import './App.css';
import {Rating, RatingValuePropsType, valueType} from "./components/Rating/Rating";
import Accordion from "./components/Accordion/Accordion";
import {OnOff} from "./components/OnOff/OnOf";
import {UncontrolledOnOff} from "./components/UncontrolledOnOff/OnOf";
import {UncontrolledInputs} from "./components/UncontolledInputs/UncontrolledInputs";


function App() {
    const[ratingValue, setRatingValue] = useState<valueType>(0);
    const[collapsedValue, setCollapsedValue] = useState(false);
    const [light, setLight] = useState<boolean>(false)

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
            <UncontrolledInputs/>
        </div>
    );
}

export default App;
