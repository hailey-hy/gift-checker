export type InputProps = {
    placeholder: string;
    size: 'small' | 'medium' | 'large';
    maxlength: number;
    name: 'host-name' | 'party-name' | 'place' | 'party-detail' | 'gift-name' | 'gift-detail';
    onChange?: (e?: React.MouseEvent<HTMLInputElement>) => void;
    underline: 'true' | 'false';
};

const sizes = {
    small: 'w-24 ',
    medium: 'w-40 ',
    large: 'w-60 ',
};

const underlines = {
    true: 'border-b-2',
    false: '',
};

const InputText = ({ size, placeholder, maxlength, name, onChange, underline }: InputProps) => {
    const style = 'outline-0 h-8 ' + sizes[size] + underlines[underline];
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
};

export default InputText;
