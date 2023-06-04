export type LabelProps = {
    children: React.ReactNode;
    size: 'small' | 'medium' | 'large';
};

const sizes = {
    small: 'text-sm',
    medium: 'text-base',
    large: 'text-lg',
};

const Label = ({ children, size }: LabelProps) => {
    const style = '' + sizes[size];
    return <p className={style}>{children}</p>;
};

Label.defaultProps = {
    size: 'small',
};
export default Label;
