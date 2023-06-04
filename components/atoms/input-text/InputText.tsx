export type InputProps = {
    placeholder: string;
    size: 'small' | 'medium';
    maxlength: number;
    name: 'host-name' | 'party-name' | 'place';
    onChange?: (e?: React.MouseEvent<HTMLInputElement>) => void;
};

const sizes = {
    small: 'w-24 h-8',
    medium: 'w-32 h-8',
};

const InputText = ({ size, placeholder, maxlength, name, onChange }: InputProps) => {
    const style = 'outline-0 border-b-2 ' + sizes[size];
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
};

export default InputText;
