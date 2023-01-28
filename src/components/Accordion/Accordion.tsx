import React from "react";

type AccordionBody = {
    id: number;
    value: string;
}

 type AccordionType = {
    title: string;
    collapsed: boolean;
    setCollapsedValue: (val: boolean) => void;
    items: AccordionBody[];
    callBack: (value: string) => void;
 }

 type AccordionTitleProps = {
    title: string;
    onClick: (val: boolean) => void;
    collapsed: boolean;
 }

 type AccordionBodyProps = {
    collapsed: boolean;
    items: AccordionBody[];
    callBack: (value: string) => void;
 }

function AccordionSecret(props: AccordionType){
    return <div>
        <AccordionTitle
            title={props.title}
            onClick={props.setCollapsedValue}
            collapsed={props.collapsed}/>
        <AccordionBody collapsed={props.collapsed} items={props.items} callBack={props.callBack}/>
    </div>
}

function  AccordionTitleSecret (props: AccordionTitleProps){
    return (
        <h3 onClick={() => props.onClick(!props.collapsed)}> {props.title}</h3>
    )
}

function AccordionBodySecret(props: AccordionBodyProps) {
    const collapsed = props.collapsed;
    const mappedValues = props.items.map(el => {
        const onClickHandler = () => {
            props.callBack(el.value)
        }
        return (
            <li key={el.id} onClick={onClickHandler}>{el.value}</li>
        )
    })
    return (
        <>
            {
                collapsed &&
                (<ul>
                    {mappedValues}
                </ul>)
            } {
            !collapsed &&
            <p> nothing</p>
        }

        </>
    )
}

const AccordionTitle = React.memo(AccordionTitleSecret);
const AccordionBody = React.memo(AccordionBodySecret);

export default AccordionSecret;