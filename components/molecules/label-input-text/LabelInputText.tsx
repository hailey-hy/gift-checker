import InputText from '@atoms/input-text/InputText';
import Label from '@atoms/label/Label';

export type LabelInputTextProps = {
    lable: string;
    placeholder: string;
    size: 'small' | 'medium' | 'large' | 'extraLarge';
    maxlength: number;
};

const LabelInputText = ({ lable, placeholder, size, maxlength }: LabelInputTextProps) => {
    return (
        <div className='flex flex-row items-center gap-2'>
            <Label>{lable}</Label>
            <InputText placeholder={placeholder} size={size} maxlength={maxlength}></InputText>
        </div>
    );
};

LabelInputText.defaultProps = {
    lable: '라벨 :',
    placeholder: '입력창',
    size: 'small',
    maxlength: 10,
};

export default LabelInputText;
