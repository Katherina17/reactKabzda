import React, {useReducer} from 'react';
import {
    uncontrolledAccordionAC,
    uncontrolledAccordionAction,
    uncontrolledAccordionReducer
} from "../reducer/uncontrolledAccordionReducer";


 type AccordionType = {
    title: string;
 }

 type AccordionTitleProps = {
    title: string;
    dispatch: (action: uncontrolledAccordionAction) => void;
    collapsed: boolean;
 }

 export type AccordionBodyProps = {
    collapsed: boolean;
 }

export function UnctrolledAccordionSecret(props: AccordionType){
    const[collapsed, dispatch] = useReducer(uncontrolledAccordionReducer, {collapsed: false});
    console.log(collapsed.collapsed)
    return <div>
        <AccordionTitle title={props.title}
                        dispatch={dispatch}
                        collapsed={collapsed.collapsed}/>
        <AccordionBody collapsed={collapsed.collapsed}/>
    </div>
}

function  AccordionTitleSecret (props: AccordionTitleProps){
    return (
        <>
            <h3 onClick={() => props.dispatch(uncontrolledAccordionAC())}> {props.title}</h3>
        </>
    )
}
function AccordionBodySecret(props: AccordionBodyProps) {
    return (
        <>
            {
                props.collapsed &&
                (<ul>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                    <li>4</li>
                </ul>)
            } {
            !props.collapsed &&
            <p> nothing</p>
        }
        </>
    )
}

const AccordionTitle = React.memo(AccordionTitleSecret);
const AccordionBody= React.memo(AccordionBodySecret);


