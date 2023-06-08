export type InputProps = {
    placeholder: string;
    size: 'small' | 'medium' | 'large' | 'extraLarge';
    maxlength: number;
    name: 'host-name' | 'party-name' | 'place' | 'party-detail' | 'gift-name' | 'gift-detail';
    onChange?: (e?: React.MouseEvent<HTMLInputElement>) => void;
    underline: 'true' | 'false';
    align: 'center' | 'left';
};

const sizes = {
    small: 'w-24 ',
    medium: 'w-40 ',
    large: 'w-60 ',
    extraLarge: 'w-96 ',
};

const underlines = {
    true: 'border-b-2 ',
    false: '',
};

const aligns = {
    center: 'text-center ',
    left: 'text-left ',
};

const InputText = ({
    size,
    placeholder,
    maxlength,
    name,
    onChange,
    underline,
    align,
}: InputProps) => {
    const style = 'outline-0 h-8 ' + sizes[size] + underlines[underline] + aligns[align];
    return (
        <input
            name={name}
            type='string'
            placeholder={placeholder}
            maxLength={maxlength}
            className={style}
        ></input>
    );
};

InputText.defaultProps = {
    size: 'small',
    placeholder: 'placeholder',
    maxlength: 10,
    name: 'host-name',
    underline: 'true',
    align: 'center',
};

export default InputText;
