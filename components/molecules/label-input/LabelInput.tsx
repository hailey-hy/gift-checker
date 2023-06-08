import { background } from '@atoms/background/Background.stories';

export type LabelInputProps = {
    children: React.ReactNode;
    display: 'flex' | 'grid';
    background: 'true' | 'false';
};

const displays = {
    flex: 'flex flex-row items-center gap-2',
    grid: 'grid gap-4 pb-2 grid-cols-1 sm:w-[630px] sm:grid-cols-custom sm:gap-8',
};

const backgrounds = {
    true: 'p-2',
};

const LabelInput = ({ children, display }: LabelInputProps) => {
    const style = displays[display];
    return <div className={style}>{children}</div>;
};

LabelInput.defaultProps = {
    display: 'flex',
    background: 'false',
};

export default LabelInput;
