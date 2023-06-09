import { background } from '@atoms/background/Background.stories';

export type LabelInputProps = {
    children: React.ReactNode;
    display: 'flex' | 'grid';
    background: 'true' | 'false';
};

const displays = {
    flex: 'flex flex-row items-center gap-2 w-fit m-auto ',
    grid: 'grid gap-4 pb-2 grid-cols-1 sm:w-[630px] sm:grid-cols-custom sm:gap-8 ',
};

const backgrounds = {
    true: 'bg-white rounded-xl',
    false: 'bg-transparent',
};

const LabelInput = ({ children, display, background }: LabelInputProps) => {
    const style = 'p-2 ' + displays[display] + backgrounds[background];
    return <div className={style}>{children}</div>;
};

LabelInput.defaultProps = {
    display: 'flex',
    background: 'false',
};

export default LabelInput;
