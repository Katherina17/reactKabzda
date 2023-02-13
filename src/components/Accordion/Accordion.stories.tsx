import React, {useState} from 'react';
import AccordionSecret from "./Accordion";
import {action} from "@storybook/addon-actions";



export default {
    title: 'AccordionSecret stories',
    component: AccordionSecret
}

const callBack = action('accordion mode change event fired')
const adminValues = [
    {id: 6, value: 'Stanislau'},
    {id: 7, value: 'Dmitry'},
    {id: 8, value: 'Anastasia'},
    {id: 9, value: 'Igor'},
    {id: 10, value: 'Vasily'},
]


export const isAccordionSecretCollapsed = () => <AccordionSecret title={'Users'} collapsed={false} setCollapsedValue={callBack} items={adminValues} callBack={callBack}/>

