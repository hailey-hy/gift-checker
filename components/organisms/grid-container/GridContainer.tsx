export type GridContainerProps = {
    children: React.ReactNode;
    size: 'medium' | 'large';
};

const sizes = {
    medium: '',
    large: 'h-[800px]',
};

const GridContainer = ({ children, size }: GridContainerProps) => {
    const style =
        'box-border h-fit sm:w-[550px] overflow-scroll justify-center sm:m-auto mt-4 max-h-[630px] min-h-[320px] ' +
        sizes[size];
    return <article className={style}>{children}</article>;
};

GridContainer.defaultProps = {
    size: 'medium',
};

export default GridContainer;
