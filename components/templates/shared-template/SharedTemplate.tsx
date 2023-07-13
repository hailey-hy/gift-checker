import Background from '@atoms/background/Background';
import Button from '@atoms/button/Button';
import GridPaper from '@atoms/gridPaper/GridPaper';
import Label from '@atoms/label/Label';
import LabelInput from '@molecules/label-input/LabelInput';
import LabelsOnly from '@molecules/labels-only/LabelsOnly';
import CommentInputContainer from '@organisms/comment-input-container/CommentInputContainer';
import Container from '@organisms/container/Container';
import GridContainer from '@organisms/grid-container/GridContainer';
import InputText from '@atoms/input-text/InputText';
const SharedTemplate = () => {
    return (
        <section className='overflow-overlay justify-center'>
            <Background></Background>
            <Container>
                <LabelInput>
                    <Label size='large'>OO님의 기념일</Label>
                </LabelInput>
            </Container>
            <Container>
                <LabelInput display='flex'>
                    <Label size='medium'>12/19</Label>
                    <Label size='medium'>17:00</Label>
                    <Label size='medium'>우리집</Label>
                </LabelInput>
            </Container>
            <Container border='bottom'>
                <LabelInput>
                    <Label size='medium'>
                        자세한 설명 자세한 설명 자세한 설명 자세한 설명 자세한 설명
                    </Label>
                </LabelInput>
            </Container>
            <Container>
                <GridPaper>
                    <Container height='comments' width='comments'>
                        <Container
                            border='true'
                            background='white'
                            width='comment'
                            height='comment'
                        >
                            <LabelsOnly display='gridTwo' border='false' align='between'>
                                <Label size='small' bold='true'>
                                    이름
                                </Label>
                                <Label size='small' align='end'>
                                    10/23 15:00
                                </Label>
                            </LabelsOnly>
                            <LabelsOnly display='gridTwo' border='false'>
                                <Label size='medium' bold='true'>
                                    선물
                                </Label>
                                <Label size='medium'>자세한 설명</Label>
                            </LabelsOnly>
                        </Container>
                    </Container>
                </GridPaper>
            </Container>
            <Container>
                <CommentInputContainer>
                    <LabelInput display='grid' background='true'>
                        <InputText size='small' placeholder='이름'></InputText>
                        <InputText size='small' placeholder='선물'></InputText>
                        <InputText size='medium' placeholder='자세한 설명'></InputText>
                    </LabelInput>
                    <Button>작성</Button>
                </CommentInputContainer>
            </Container>
        </section>
    );
};

export default SharedTemplate;
