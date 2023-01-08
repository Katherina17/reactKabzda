import  {useState} from 'react';

export const OnOff: React.FC = () => {
    const[light, setLight] = useState<boolean>(false);

    const onLight = () => {
        setLight(true)
    }

    const offLight = () => {
        setLight(false)
    }
  
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

    return(
        <div>
            <div style={onStyle} onClick={onLight}> On</div>
            <div style={offStyle} onClick={offLight}> Off</div> 
            <div style={indicatorStyle}></div>
        </div>
    )
}