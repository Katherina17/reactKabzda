import  {useState} from 'react';


 type AccordionType = {
    title: string;
 }

 type AccordionTitleProps = {
    title: string;
    setCollapsed: (value: boolean) => void;
    collapsed: boolean;
 }

 type AccordionBodyProps = {
    collapsed: boolean;
 }

export function UnctrolledAccordion(props: AccordionType){
    const[collapsed, setCollapsed] = useState<boolean>(false);
    return <div>
        <AccordionTitle title={props.title}
                        setCollapsed={setCollapsed}
                        collapsed={collapsed}/>
        <AccordionBody collapsed={collapsed}/>
    </div>
}

function  AccordionTitle (props: AccordionTitleProps){
    return (
        <>
            <h3 onClick={() => props.setCollapsed(!props.collapsed)}> {props.title}</h3>
        </>
    )
}
function AccordionBody(props: AccordionBodyProps) {
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


