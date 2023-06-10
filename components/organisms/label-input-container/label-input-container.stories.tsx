import LabelInput from '@molecules/label-input/LabelInput';
import Label from '@atoms/label/Label';
import LabelInputContainer from './label-input-container';
import InputText from '@atoms/input-text/InputText';
import InputTime from '@atoms/input-time/InputTime';

export default {
    title: 'Design Systems/Organisms/LabelInputContainer',
    component: LabelInputContainer,
    tags: ['autodocs'],
};

export const labelInputContainer = () => {
    return (
        <LabelInputContainer>
            <LabelInput>
                <Label>라벨</Label>
                <InputText placeholder='입력창'></InputText>
            </LabelInput>
        </LabelInputContainer>
    );
};

export const labelInputHostPartyContainer = () => {
    return (
        <LabelInputContainer border='true'>
            <LabelInput>
                <Label>주인공</Label>
                <InputText placeholder='이름' size='medium' maxlength={25}></InputText>
            </LabelInput>
            <LabelInput>
                <Label>일정</Label>
                <InputText placeholder='생일' size='medium' maxlength={25}></InputText>
            </LabelInput>
        </LabelInputContainer>
    );
};

export const labelInputTimePlaceContainer = () => {
    return (
        <LabelInputContainer border='false'>
            <LabelInput>
                <Label>시간</Label>
                <InputTime></InputTime>
            </LabelInput>
            <LabelInput>
                <Label>장소</Label>
                <InputText placeholder='우리집' size='medium' maxlength={25}></InputText>
            </LabelInput>
        </LabelInputContainer>
    );
};
