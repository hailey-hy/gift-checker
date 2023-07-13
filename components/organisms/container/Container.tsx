export type ContainerProps = {
    children: React.ReactNode;
    border: 'true' | 'false' | 'bottom';
    margin: 'false' | 'y';
    background: 'false' | 'white';
    width: 'false' | 'comments' | 'comment';
    height: 'false' | 'comments' | 'comment';
    padding: 'false' | 'y';
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
    comments: 'w-[280px] xs:w-[340px] sm:w-[480px] ',
    comment: 'w-[240px] xs:w-[340px] sm:w-[460px] ',
};

const heights = {
    false: '',
    comments: 'max-h-[630px] min-h-[320px] m-auto itmes-start ',
    comment: 'h-[66px] sm:h-[90px]',
};

const paddings = {
    false: '',
    y: 'py-4 ',
};

const Container = ({
    children,
    border,
    margin,
    background,
    width,
    height,
    padding,
}: ContainerProps) => {
    const style =
        'flex flex-row flex-wrap justify-center gap-3 p-1 w-fit m-auto sm:w-[630px] sm:p-4 ' +
        borders[border] +
        margins[margin] +
        backgrounds[background] +
        widths[width] +
        heights[height] +
        paddings[padding];
    return <article className={style}>{children}</article>;
};

Container.defaultProps = {
    border: 'false',
    margin: 'false',
    background: 'false',
    width: 'false',
    height: 'false',
    padding: 'false',
};

export default Container;
