import React from 'react';
import InputText from './InputText';

export default {
    title: 'Design Systems/Atoms/InputText',
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

export const largeInputText = () => {
    return <InputText size='large' placeholder='large'></InputText>;
};

export const noUnderlineInputText = () => {
    return <InputText size='medium' placeholder='no Underline' underline='false'></InputText>;
};

export const leftInputText = () => {
    return <InputText size='medium' placeholder='left align' align='left'></InputText>;
};
