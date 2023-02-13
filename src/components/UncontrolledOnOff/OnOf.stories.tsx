import React, {useState} from 'react';
import {UncontrolledOnOffSecret} from "./OnOf";
import {action} from "@storybook/addon-actions";


export default {
    title: 'OnOf stories',
    component: UncontrolledOnOffSecret
}

const callBack = action('you set Light')


export const onOffWithoutLight = () => <UncontrolledOnOffSecret light={false} setLight={callBack}/>
export const onOffWithLight = () => <UncontrolledOnOffSecret light={true} setLight={callBack}/>

