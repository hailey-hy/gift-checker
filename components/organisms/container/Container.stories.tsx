import LabelInput from '@molecules/label-input/LabelInput';
import Label from '@atoms/label/Label';
import Container from './Container';
import InputText from '@atoms/input-text/InputText';
import InputTime from '@atoms/input-time/InputTime';
import LabelsOnly from '@molecules/labels-only/LabelsOnly';

export default {
    title: 'Design Systems/Organisms/Container',
    component: Container,
    tags: ['autodocs'],
};

export const container = () => {
    return (
        <Container>
            <LabelInput>
                <Label>라벨</Label>
                <InputText placeholder='입력창'></InputText>
            </LabelInput>
        </Container>
    );
};

export const HostPartyContainer = () => {
    return (
        <Container border='true'>
            <LabelInput>
                <Label>주인공</Label>
                <InputText placeholder='이름' size='medium' maxlength={25}></InputText>
            </LabelInput>
            <LabelInput>
                <Label>일정</Label>
                <InputText placeholder='생일' size='medium' maxlength={25}></InputText>
            </LabelInput>
        </Container>
    );
};

export const TimePlaceContainer = () => {
    return (
        <Container border='false'>
            <LabelInput>
                <Label>시간</Label>
                <InputTime></InputTime>
            </LabelInput>
            <LabelInput>
                <Label>장소</Label>
                <InputText placeholder='우리집' size='medium' maxlength={25}></InputText>
            </LabelInput>
        </Container>
    );
};

export const LabelCommentsContainer = () => {
    return (
        <Container border='true' background='white'>
            <LabelsOnly display='gridTwo' border='false'>
                <Label size='small' bold='true'>
                    이름
                </Label>
                <Label size='small'>10/23 15:00</Label>
            </LabelsOnly>
            <LabelsOnly display='gridTwo' border='false'>
                <Label size='small' bold='true'>
                    선물
                </Label>
                <Label size='small'>자세한 설명</Label>
            </LabelsOnly>
        </Container>
    );
};
