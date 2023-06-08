import LabelsOnly from './LabelsOnly';
import Label from '@atoms/label/Label';

export default {
    title: 'Design Systems/Molecules/LabelsOnly',
    component: LabelsOnly,
    tags: ['autodocs'],
};

export const labelsOnlyFlex = () => {
    return (
        <LabelsOnly display='flex'>
            <Label>라벨</Label>
        </LabelsOnly>
    );
};

export const titleLabelFlex = () => {
    return (
        <LabelsOnly display='flex' border='true'>
            <Label size='large'>OO님의 기념일</Label>
        </LabelsOnly>
    );
};

export const timePlaceLabelFlex = () => {
    return (
        <LabelsOnly display='flex' border='false'>
            <Label size='medium'>6월 27일</Label>
            <Label size='medium'>18시 00분</Label>
            <Label size='medium'>우리집</Label>
        </LabelsOnly>
    );
};

export const detailsLabelFlex = () => {
    return (
        <LabelsOnly display='flex' border='bottom'>
            <Label size='medium'>자세한 설명이 들어갈 자리로, 최대 길이 50자</Label>
        </LabelsOnly>
    );
};

export const commentLabelGrid = () => {
    return (
        <LabelsOnly display='grid' border='bottom'>
            <Label size='medium'>이름</Label>
            <Label size='medium'>선물</Label>
            <Label size='medium'>자세한 설명</Label>
        </LabelsOnly>
    );
};
