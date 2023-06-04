export type InputProps = {
    placeholder: string;
    size: 'small' | 'medium' | 'large';
    maxlength: number;
    name: 'host-name' | 'party-name' | 'place' | 'party-detail' | 'gift-name' | 'gift-detail';
    onChange?: (e?: React.MouseEvent<HTMLInputElement>) => void;
};

const sizes = {
    small: 'w-24',
    medium: 'w-40',
    large: 'w-60',
};

const InputText = ({ size, placeholder, maxlength, name, onChange }: InputProps) => {
    const style = 'outline-0 border-b-2 h-8 ' + sizes[size];
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
