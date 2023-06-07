import Label from '@atoms/label/Label';
import InputTime from '@atoms/input-time/InputTime';

export type LabelInputTimeProps = {
    label: string;
};

const LabelInputTime = ({ label }: LabelInputTimeProps) => {
    return (
        <div className='flex flex-row items-center gap-2'>
            <Label>{label}</Label>
            <InputTime></InputTime>
        </div>
    );
};

LabelInputTime.defaultProps = {
    label: '시간 :',
};

export default LabelInputTime;
