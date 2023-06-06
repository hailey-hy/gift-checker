import Label from './Label';

export default {
    title: 'Design Systems/Atoms/Label',
    component: Label,
    tags: ['autodocs'],
};

export const label = () => {
    return <Label>Label</Label>;
};

label.story = {
    name: 'Default',
};

export const smallLabel = () => {
    return <Label size='small'>smallLabel</Label>;
};

export const mediumLabel = () => {
    return <Label size='medium'>mediumLabel</Label>;
};

export const largeLabel = () => {
    return <Label size='large'>largeLabel</Label>;
};
