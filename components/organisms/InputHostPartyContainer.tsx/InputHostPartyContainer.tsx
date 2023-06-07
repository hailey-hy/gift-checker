import LabelInputText from '@molecules/label-input-text/LabelInputText';

export type InputHostPartyContainerProps = {
    labelHost: string;
    labelParty: string;
    placeholderHost: string;
    placeholderParty: string;
    sizeHost: 'small' | 'medium';
    sizeParty: 'small' | 'medium';
    maxlengthHost: number;
    maxlengthParty: number;
};

const InputHostPartyContainer = ({
    labelHost,
    labelParty,
    placeholderHost,
    placeholderParty,
    maxlengthHost,
    maxlengthParty,
    sizeHost,
    sizeParty,
}: InputHostPartyContainerProps) => {
    return (
        <div className='flex flex-row items-center gap-10'>
            <LabelInputText
                lable={labelHost}
                placeholder={placeholderHost}
                maxlength={maxlengthHost}
                size={sizeHost}
            ></LabelInputText>
            <LabelInputText
                lable={labelParty}
                placeholder={placeholderParty}
                size={sizeParty}
                maxlength={maxlengthParty}
            ></LabelInputText>
        </div>
    );
};

InputHostPartyContainer.defaultProps = {
    labelHost: '주인공 :',
    labelParty: '일정 :',
    placeholderHost: '이름',
    placeholderParty: '생일',
    sizeHost: 'small',
    sizeParty: 'medium',
    maxlengthHost: 10,
    maxlengthParty: 20,
};

export default InputHostPartyContainer;
