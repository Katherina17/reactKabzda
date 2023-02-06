import React, {useState} from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {RatingSecret, valueType} from "./RatingSecret";


export default {
    title: 'RatingSecret stories',
    component: RatingSecret
}


export const EmptyRating = () => <RatingSecret value={0} setRatingValue={() => {}}/>
export const Rating1 = () => <RatingSecret value={1} setRatingValue={() => {}}/>
export const Rating2 = () => <RatingSecret value={2} setRatingValue={() => {}}/>
export const Rating3 = () => <RatingSecret value={3} setRatingValue={() => {}}/>
export const Rating4 = () => <RatingSecret value={4} setRatingValue={() => {}}/>
export const Rating5 = () => <RatingSecret value={5} setRatingValue={() => {}}/>
export const RatingChange = () => {
    const [value, setValue] = useState<valueType>(3);
    return <RatingSecret value={value} setRatingValue={setValue}/>
}

