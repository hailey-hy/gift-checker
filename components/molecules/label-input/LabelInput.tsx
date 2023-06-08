export type LabelInputProps = {
    children: React.ReactNode;
    display: 'flex' | 'grid';
};

const displays = {
    flex: 'flex flex-row items-center gap-2',
    grid: 'grid gap-4 pb-2 sm:w-[630px] sm:grid-cols-custom sm:gap-8',
};

const LabelInput = ({ children, display }: LabelInputProps) => {
    const style = displays[display];
    return <div className={style}>{children}</div>;
};

LabelInput.defaultProps = {
    display: 'flex',
};

export default LabelInput;
