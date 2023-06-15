export type LabelProps = {
    children: React.ReactNode;
    size: 'small' | 'medium' | 'large';
    bold: 'true' | 'false';
    align: 'false' | 'end';
};

const sizes = {
    small: 'text-sm ',
    medium: 'text-base ',
    large: 'text-lg ',
};

const bolds = {
    true: 'font-semibold ',
    false: ' ',
};

const aligns = {
    false: '',
    end: 'text-end',
};

const Label = ({ children, size, bold, align }: LabelProps) => {
    const style = '' + sizes[size] + bolds[bold] + aligns[align];
    return <p className={style}>{children}</p>;
};

Label.defaultProps = {
    size: 'small',
    bold: 'false',
    align: 'false',
};
export default Label;
