export type GridContainerProps = {
    children: React.ReactNode;
    size: 'medium' | 'large';
};

const sizes = {
    medium: '',
    large: 'h-[800px]',
};

const GridContainer = ({ children, size }: GridContainerProps) => {
    const style = 'w-[320px] sm:w-[550px] overflow-scroll ' + sizes[size];
    return <div className={style}>{children}</div>;
};

GridContainer.defaultProps = {
    size: 'medium',
};

export default GridContainer;
