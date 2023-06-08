export type LabelsOnlyProps = {
    children: React.ReactNode;
    border: 'true' | 'false' | 'bottom';
    display: 'flex' | 'grid';
};

const borders = {
    true: 'border rounded-xl',
    false: '',
    bottom: 'border-b',
};

const displays = {
    flex: 'flex flex-row flex-wrap justify-center p-2 gap-10 sm:w-[550px] sm:p-4 ',
    grid: 'grid gap-4 pb-2 sm:w-[630px] sm:grid-cols-custom sm:gap-8 ',
};

const LabelsOnly = ({ children, border, display }: LabelsOnlyProps) => {
    const style = displays[display] + borders[border];
    return <div className={style}>{children}</div>;
};

LabelsOnly.defaultProps = {
    display: 'flex',
    border: 'true',
};

export default LabelsOnly;
