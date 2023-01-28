import  {useState} from 'react';

type OnOffPropsType = {
    light: boolean;
    setLight: (val: boolean) => void;
}

export const UncontrolledOnOffSecret: React.FC<OnOffPropsType> = (props) => {
    const{light, setLight} = props;
  
    const onStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        padding: '2px',
        backgroundColor: light ? 'yellow' : 'white',
    }

    const offStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '5px',
        padding: '2px',
        backgroundColor: light ? 'white' : 'red',
    }

    const indicatorStyle = {
        width: '10px',
        height: '10px',
        borderRadious: '5px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '10px',
        backgroundColor: light ? 'rgb(255, 237, 44)' : 'white',
    }
    const onclicked = () => {
        setLight(true)
    }
    const offclicked = () => {
        setLight(false)
    }
    return(
        <div>
            <div style={onStyle} onClick={onclicked}> On</div>
            <div style={offStyle} onClick={offclicked}> Off</div>
            <div style={indicatorStyle}></div>
        </div>
    )
}