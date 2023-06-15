export type CommentInputContainerProps = {
    children: React.ReactNode;
};

const CommentInputContainer = ({ children }: CommentInputContainerProps) => {
    return <div className='flex flex-row flex-wrap justify-center gap-2'>{children}</div>;
};

export default CommentInputContainer;
