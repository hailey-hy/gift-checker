export type LabelsOnlyProps = {
    children: React.ReactNode;
    border: 'true' | 'false' | 'bottom';
    display: 'flex' | 'grid';
    paddingBottom: 'true' | 'false';
};

const borders = {
    true: 'border rounded-xl ',
    false: '',
    bottom: 'border-b ',
};

const displays = {
    flex: 'flex flex-row flex-wrap justify-center p-2 gap-10 sm:w-[550px] sm:p-4 ',
    grid: 'grid gap-2 p-2 py-4 text-center sm:w-[630px] sm:grid-cols-custom sm:gap-8 ',
};

const paddingBottoms = {
    true: 'pb-4 pt-4',
    false: '',
};

const LabelsOnly = ({ children, border, display, paddingBottom }: LabelsOnlyProps) => {
    const style = displays[display] + borders[border] + paddingBottoms[paddingBottom];
    return <div className={style}>{children}</div>;
};

LabelsOnly.defaultProps = {
    display: 'flex',
    border: 'true',
    paddingBottom: 'false',
};

export default LabelsOnly;
