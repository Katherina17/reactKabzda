
type StarProps = {
    selected: boolean
    onClick: (value: valueType) => void;
    value: valueType;
}

export type valueType =  0 | 1 | 2 | 3 | 4 | 5;

export type RatingValuePropsType = {
    value: valueType;
    setRatingValue: (value: valueType) => void;
}

export const Rating = (props: RatingValuePropsType) => {
    return(
        <div>
           <Star selected={props.value > 0} onClick={ props.setRatingValue} value={1}/>
           <Star selected={props.value > 1}  onClick={ props.setRatingValue} value={2}/>
           <Star selected={props.value > 2}  onClick={ props.setRatingValue} value={3}/>
           <Star selected={props.value > 3}  onClick={ props.setRatingValue} value={4}/>
           <Star selected={props.value > 4}  onClick={ props.setRatingValue} value={5}/>
        </div>
    )
}

function Star (props: StarProps){
    const style = {
        fontWeight: props.selected ? 'bold' : '',
    }
    return(
        <>
            <span style={style} onClick={() => props.onClick(props.value)}> star </span>
        </>
    )
}