import LabelInput from '@molecules/label-input/LabelInput';
import Label from '@atoms/label/Label';
import LabelInputContainer from './LabelInputContainer';
import InputText from '@atoms/input-text/InputText';

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
        <LabelInputContainer>
            <LabelInput>
                <Label>주인공 :</Label>
                <InputText placeholder='이름' size='medium' maxlength={25}></InputText>
            </LabelInput>
            <LabelInput>
                <Label>일정 :</Label>
                <InputText placeholder='생일' size='medium' maxlength={25}></InputText>
            </LabelInput>
        </LabelInputContainer>
    );
};
