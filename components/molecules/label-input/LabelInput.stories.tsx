import Label from '@atoms/label/Label';
import LabelInput from './LabelInput';
import InputText from '@atoms/input-text/InputText';
import InputTime from '@atoms/input-time/InputTime';

export default {
    title: 'Design Systems/Molecules/Label-Input',
    component: LabelInput,
    tags: ['autodocs'],
};

export const labelInputText = () => {
    return (
        <LabelInput>
            <Label>라벨</Label>
            <InputText placeholder='입력창'></InputText>
        </LabelInput>
    );
};

labelInputText.story = {
    name: 'Default',
};

export const hostNameLabelInputText = () => {
    return (
        <LabelInput>
            <Label>주인공 :</Label>
            <InputText placeholder='이름'></InputText>
        </LabelInput>
    );
};

export const partyNameLabelInputText = () => {
    return (
        <LabelInput>
            <Label>일정 :</Label>
            <InputText placeholder='생일'></InputText>
        </LabelInput>
    );
};

export const placeLabelInputText = () => {
    return (
        <LabelInput>
            <Label>장소 :</Label>
            <InputText placeholder='우리집' size='medium' maxlength={15}></InputText>
        </LabelInput>
    );
};

export const detailLabelInputText = () => {
    return (
        <LabelInput>
            <InputText
                placeholder='자세한 설명을 추가해 보세요!'
                size='extraLarge'
                maxlength={50}
            ></InputText>
        </LabelInput>
    );
};

export const lableInputTime = () => {
    return (
        <LabelInput>
            <Label>시간 :</Label>
            <InputTime></InputTime>
        </LabelInput>
    );
};
