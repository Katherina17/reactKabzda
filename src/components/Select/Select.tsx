import s from './Select.module.css';
import {useState} from "react";

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



export const Select = (props: SelectPropsType) => {
    let currValue = props.selectData.find(el => el.value === props.value);
    const [isSelectedValue, setIsSelectedValue] = useState(false);
    const onClickHandler = () => {
        setIsSelectedValue(!isSelectedValue)
    }
    const changeInputValueOnClick = (value: string) => {
        props.setSelectValue(value);
    }
    return (
        <>
            <div className={isSelectedValue ? `${s.selectActive}` : s.select} onClick={onClickHandler}>
                <span>{currValue && currValue.title}</span>
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

const ModalSelectValues = (props: ModalSelectValues) => {
    const addCallBacks = (value: string) => {
        props.callBack(value);
        props.setIsSelectedValue(!props.isSelectedValue)
    }
    return (
        <div className={s.modalSelectValues}>
            {props.selectData.map(el => {
                    return (
                        <div className={props.selectedValue === el.value ? s.targetItem : ''} key={el.id} onClick={() => addCallBacks(el.value)}>{el.title}</div>
                    )
                }
            )
            }
        </div>
    )
}