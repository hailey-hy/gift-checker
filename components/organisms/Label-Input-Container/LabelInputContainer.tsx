export type LabelInputContainerProps = {
    children: React.ReactNode;
};

const LabelInputContainer = ({ children }: LabelInputContainerProps) => {
    return (
        <div className='flex flex-row flex-wrap items-center gap-10 rounded-xl border p-4 sm:w-[500px]'>
            {children}
        </div>
    );
};

export default LabelInputContainer;
