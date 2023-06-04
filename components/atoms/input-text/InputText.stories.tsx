import React from 'react';
import InputText from './InputText';

export default {
    title: 'component: InputText',
    component: InputText,
    tags: ['autodocs'],
};

export const inputText = () => {
    return <InputText></InputText>;
};

inputText.story = {
    name: 'Default',
};

export const smallInputText = () => {
    return <InputText size='small' placeholder='small'></InputText>;
};

export const mediumInputText = () => {
    return <InputText size='medium' placeholder='medium'></InputText>;
};
