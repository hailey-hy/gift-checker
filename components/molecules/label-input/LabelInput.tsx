export type LabelInputProps = {
    children: React.ReactNode;
};

const LabelInput = ({ children }: LabelInputProps) => {
    return <div className='flex flex-row items-center gap-2'>{children}</div>;
};

export default LabelInput;
