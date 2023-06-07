export type LabelInputContainerProps = {
    children: React.ReactNode;
    border: 'true' | 'false';
};

const borders = {
    true: 'rounded-xl border',
    false: '',
};

const LabelInputContainer = ({ children, border }: LabelInputContainerProps) => {
    const style =
        'flex flex-row flex-wrap justify-center gap-10 p-2 sm:w-[550px] sm:p-4 ' + borders[border];
    return <div className={style}>{children}</div>;
};

LabelInputContainer.defaultProps = {
    border: 'false',
};

export default LabelInputContainer;
