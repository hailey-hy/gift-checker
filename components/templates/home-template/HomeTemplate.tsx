import React from 'react';
import Background from '@atoms/background/Background';
import Headline from '@atoms/headline/Headline';
import Label from '@atoms/label/Label';
import LabelInput from '@molecules/label-input/LabelInput';
import LabelInputContainer from '@organisms/label-input-container/LabelInputContainer';
import InputText from '@atoms/input-text/InputText';
import GridContainer from '@organisms/grid-container/GridContainer';
import GridPaper from '@atoms/gridPaper/GridPaper';
import Calendar from '@atoms/calendar/Calendar';
import InputTime from '@atoms/input-time/InputTime';
import Button from '@atoms/button/Button';

export type HomeTemplateProps = {
    children: React.ReactNode;
};

const HomeTemplate = () => {
    return (
        <section className='overflow-overlay justify-center'>
            <Background></Background>
            <Headline></Headline>
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
            <GridContainer>
                <GridPaper>
                    <Calendar></Calendar>
                </GridPaper>
            </GridContainer>
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
            <LabelInputContainer border='false' margin='y'>
                <LabelInput>
                    <InputText
                        placeholder='자세한 설명을 추가해 보세요!'
                        size='extraLarge'
                        maxlength={50}
                    ></InputText>
                </LabelInput>
            </LabelInputContainer>
            <LabelInputContainer>
                <Button>링크 복사</Button>
                <Button>카카오톡 공유</Button>
            </LabelInputContainer>
        </section>
    );
};

export default HomeTemplate;
