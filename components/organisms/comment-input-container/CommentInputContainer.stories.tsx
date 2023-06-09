import LabelInput from '@molecules/label-input/LabelInput';
import CommentInputContainer from './CommentInputContainer';
import InputText from '@atoms/input-text/InputText';
import Button from '@atoms/button/Button';

export default {
    title: 'Design Systems/Organisms/Comment-Input-Container',
    component: CommentInputContainer,
    tags: ['autodocs'],
};

export const commentInputContainer = () => {
    return (
        <CommentInputContainer>
            <LabelInput display='grid' background='true'>
                <InputText size='medium' placeholder='이름'></InputText>
                <InputText size='medium' placeholder='선물'></InputText>
                <InputText size='large' placeholder='자세한 설명'></InputText>
            </LabelInput>
            <Button size='small'>작성</Button>
        </CommentInputContainer>
    );
};
