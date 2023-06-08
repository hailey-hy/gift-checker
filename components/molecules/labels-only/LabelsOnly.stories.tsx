import LabelsOnly from './LabelsOnly';
import Label from '@atoms/label/Label';

export default {
    title: 'Design Systems/Molecules/LabelsOnly',
    component: LabelsOnly,
    tags: ['autodocs'],
};

export const labelsOnly = () => {
    return (
        <LabelsOnly>
            <Label>라벨</Label>
        </LabelsOnly>
    );
};

export const titleLabel = () => {
    return (
        <LabelsOnly border='true'>
            <Label size='large'>OO님의 기념일</Label>
        </LabelsOnly>
    );
};

export const timePlaceLabel = () => {
    return (
        <LabelsOnly border='false'>
            <Label size='medium'>6월 27일</Label>
            <Label size='medium'>18시 00분</Label>
            <Label size='medium'>우리집</Label>
        </LabelsOnly>
    );
};

export const detailsLabel = () => {
    return (
        <LabelsOnly border='bottom'>
            <Label size='medium'>자세한 설명이 들어갈 자리로, 최대 길이 50자</Label>
        </LabelsOnly>
    );
};
