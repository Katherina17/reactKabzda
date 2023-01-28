import s from './Select.module.css';
import React, {useState, KeyboardEvent} from "react";

export type SelectType = {
    id: number;
    value: string;
    title: string;
}

type SelectPropsType = {
    selectData: SelectType[]
    value: string;
    setSelectValue: (value: string) => void;
}

export const SelectSecret = (props: SelectPropsType) => {
    let currValue = props.selectData.find(el => el.value === props.value);
    const [isSelectedValue, setIsSelectedValue] = useState(false);
    const onKeyUpHandler = (e: KeyboardEvent<HTMLDivElement>) => {
        for(let i = 0; i < props.selectData.length; i++){
            if(e.keyCode === 40 && (currValue && currValue.value) === props.selectData[i].value){
                if(i === props.selectData.length - 1) break
                props.setSelectValue(props.selectData[i+1].value)
                break;
            } else if(e.keyCode === 38 && (currValue && currValue.value) === props.selectData[i].value){
                if(i === 0) break;
                props.setSelectValue(props.selectData[i-1].value)
                break;
            }
            if(e.code === 'Enter'){
                setIsSelectedValue(false)
            }
        }
    }
    const onClickHandler = () => {
        setIsSelectedValue(!isSelectedValue)
    }
    const changeInputValueOnClick = (value: string) => {
        props.setSelectValue(value);
    }
    return (
        <>
            <div className={isSelectedValue ? `${s.selectActive}` : s.select} onClick={onClickHandler} onKeyUp={onKeyUpHandler} tabIndex={0}>
                <span>{currValue && currValue.title}</span>
                    <div className={ isSelectedValue ? s.arrowActive : s.arrow}></div>
            </div>
            <div>
                {isSelectedValue && <ModalSelectValues selectData={props.selectData}
                                                       callBack={changeInputValueOnClick}
                                                       selectedValue={currValue && currValue.value}
                                                       isSelectedValue={isSelectedValue}
                                                       setIsSelectedValue={setIsSelectedValue}
                />}
            </div>
        </>
    )
}

type ModalSelectValues = {
    selectData: SelectType[]
    callBack: (title: string) => void
    selectedValue: string | undefined;
    isSelectedValue: boolean;
    setIsSelectedValue: (val: boolean) => void
}

const ModalSelectValuesSecret = (props: ModalSelectValues) => {
    const addCallBacks = (value: string) => {
        props.callBack(value);
        props.setIsSelectedValue(!props.isSelectedValue)
    }
    return (
        <div className={s.modalSelectValues}>
            {props.selectData.map(el => {
                    return (
                        <div className={props.selectedValue === el.value ? s.targetItem : ''}
                             key={el.id}
                             onClick={() => addCallBacks(el.value)}
                        >{el.title}</div>
                    )
                }
            )
            }
        </div>
    )
}

const ModalSelectValues = React.memo(ModalSelectValuesSecret)