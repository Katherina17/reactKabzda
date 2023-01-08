
 type AccordionType = {
    title: string;
    collapsed: boolean;
    setCollapsedValue: (val: boolean) => void;
 }

 type AccordionTitleProps = {
    title: string;
    onClick: (val: boolean) => void;
    collapsed: boolean;
 }

 type AccordionBodyProps = {
    collapsed: boolean;
 }

function Accordion(props: AccordionType){
    return <div>
        <AccordionTitle
            title={props.title}
            onClick={props.setCollapsedValue}
            collapsed={props.collapsed}/>
        <AccordionBody collapsed={props.collapsed}/>
    </div>
}

function  AccordionTitle (props: AccordionTitleProps){
    return (
        <h3 onClick={() => props.onClick(!props.collapsed)}> {props.title}</h3>
    )
}

function AccordionBody(props: AccordionBodyProps) {
    const collapsed = props.collapsed;
    return (
        <>
            {
                collapsed &&
                (<ul>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                    <li>4</li>
                </ul>)
            } {
            !collapsed &&
            <p> nothing</p>
        }

        </>
    )
}






export default Accordion;