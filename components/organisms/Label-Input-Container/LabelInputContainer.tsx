export type LabelInputContainerProps = {
    children: React.ReactNode;
    border: 'true' | 'false';
    margin: 'false' | 'y';
};

const borders = {
    true: 'rounded-xl border',
    false: '',
};

const margins = {
    false: '',
    y: 'my-4 ',
};

const LabelInputContainer = ({ children, border, margin }: LabelInputContainerProps) => {
    const style =
        'flex flex-row flex-wrap justify-center gap-3 p-1 w-fit m-auto sm:w-[630px] sm:p-4 ' +
        borders[border] +
        margins[margin];
    return <div className={style}>{children}</div>;
};

LabelInputContainer.defaultProps = {
    border: 'false',
    margin: 'false',
};

export default LabelInputContainer;
