export type LabelProps = {
    children: React.ReactNode;
    size: 'small' | 'medium' | 'large';
    bold: 'true' | 'false';
};

const sizes = {
    small: 'text-sm ',
    medium: 'text-base ',
    large: 'text-lg ',
};

const bolds = {
    true: 'font-bold ',
    false: ' ',
};

const Label = ({ children, size, bold }: LabelProps) => {
    const style = '' + sizes[size] + bolds[bold];
    return <p className={style}>{children}</p>;
};

Label.defaultProps = {
    size: 'small',
    bold: 'false',
};
export default Label;
