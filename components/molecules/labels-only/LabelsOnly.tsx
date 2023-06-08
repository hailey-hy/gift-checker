export type LabelsOnlyProps = {
    children: React.ReactNode;
    border: 'true' | 'false' | 'bottom';
};

const borders = {
    true: 'border rounded-xl',
    false: '',
    bottom: 'border-b',
};

const LabelsOnly = ({ children, border }: LabelsOnlyProps) => {
    const style =
        'flex flex-row flex-wrap justify-center p-2 gap-10 sm:w-[550px] sm:p-4 ' + borders[border];
    return <div className={style}>{children}</div>;
};

LabelsOnly.defaultProps = {
    border: 'true',
};

export default LabelsOnly;
