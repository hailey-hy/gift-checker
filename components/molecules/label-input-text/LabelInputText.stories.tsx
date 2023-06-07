import LabelInputText from './LabelInputText';
export default {
    title: 'Design Systems/Molecules/Label-InputText',
    component: LabelInputText,
    tags: ['autodocs'],
};

export const labelInputText = () => {
    return <LabelInputText></LabelInputText>;
};

labelInputText.story = {
    name: 'Default',
};

export const hostNameLabelInputText = () => {
    return <LabelInputText lable='주인공 : ' placeholder='이름'></LabelInputText>;
};

export const partyNameLabelInputText = () => {
    return <LabelInputText lable='일정 이름 : ' placeholder='생일'></LabelInputText>;
};

export const placeLabelInputText = () => {
    return (
        <LabelInputText
            lable='장소 : '
            placeholder='우리집'
            size='medium'
            maxlength={15}
        ></LabelInputText>
    );
};

export const detailLabelInputText = () => {
    return (
        <LabelInputText
            lable=''
            placeholder='자세한 설명을 추가해 보세요!'
            size='extraLarge'
            maxlength={50}
        ></LabelInputText>
    );
};
