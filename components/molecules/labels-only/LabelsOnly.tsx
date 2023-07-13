export type LabelsOnlyProps = {
    children: React.ReactNode;
    border: 'true' | 'false' | 'bottom';
    display: 'flex' | 'grid' | 'gridTwo';
    paddingBottom: 'true' | 'false';
    align: 'false' | 'center' | 'between';
};

const borders = {
    true: 'border rounded-xl ',
    false: '',
    bottom: 'border-b ',
};

const displays = {
    flex: 'flex flex-row flex-wrap justify-center p-2 gap-10 sm:w-[550px] sm:p-4 ',
    grid: 'grid w-[280px] grid-cols-sm-custom xs:w-[380px] gap-2 p-2 py-4 text-center sm:w-[630px] sm:grid-cols-custom sm:gap-8 ',
    gridTwo: 'grid grid-cols-two w-[240px] xs:w-[320px] sm:w-[400px] gap-2',
};

const paddingBottoms = {
    true: 'pb-4 pt-4 ',
    false: ' ',
};

const aligns = {
    false: '',
    center: 'justify-center ',
    between: 'justify-between ',
};

const LabelsOnly = ({ children, border, display, paddingBottom, align }: LabelsOnlyProps) => {
    const style =
        displays[display] + borders[border] + paddingBottoms[paddingBottom] + aligns[align];
    return <div className={style}>{children}</div>;
};

LabelsOnly.defaultProps = {
    display: 'flex',
    border: 'true',
    paddingBottom: 'false',
    align: 'false',
};

export default LabelsOnly;
