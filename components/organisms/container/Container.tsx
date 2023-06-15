export type ContainerProps = {
    children: React.ReactNode;
    border: 'true' | 'false' | 'bottom';
    margin: 'false' | 'y';
    background: 'false' | 'white';
    width: 'false' | 'comment';
    height: 'false' | 'comments' | 'comment';
};

const borders = {
    true: 'rounded-xl border ',
    false: '',
    bottom: 'border-b-2 ',
};

const margins = {
    false: '',
    y: 'my-4 ',
};

const backgrounds = {
    false: '',
    white: 'bg-white ',
};

const widths = {
    false: '',
    comment: 'w-[280px] xs:w-[380px] sm:w-[630px] m-3 ',
};

const heights = {
    false: '',
    comments: 'max-h-[630px] min-h-[320px]',
    comment: 'h-fit',
};

const Container = ({ children, border, margin, background, width, height }: ContainerProps) => {
    const style =
        'flex flex-row flex-wrap justify-center gap-3 p-1 w-fit m-auto sm:w-[630px] sm:p-4 ' +
        borders[border] +
        margins[margin] +
        backgrounds[background] +
        widths[width] +
        heights[height];
    return <article className={style}>{children}</article>;
};

Container.defaultProps = {
    border: 'false',
    margin: 'false',
    background: 'false',
    width: 'false',
    height: 'false',
};

export default Container;
