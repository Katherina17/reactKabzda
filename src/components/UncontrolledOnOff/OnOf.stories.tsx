import React, {useState} from 'react';
import {UncontrolledOnOffSecret} from "./OnOf";


export default {
    title: 'OnOf stories',
    component: UncontrolledOnOffSecret
}


export const onOffWithoutLight = () => <UncontrolledOnOffSecret light={false} setLight={() => {}}/>
export const onOffWithLight = () => <UncontrolledOnOffSecret light={true} setLight={() => {}}/>

