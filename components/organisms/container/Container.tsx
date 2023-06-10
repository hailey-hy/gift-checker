export type ContainerProps = {
    children: React.ReactNode;
    border: 'true' | 'false';
    margin: 'false' | 'y';
};

const borders = {
    true: 'rounded-xl border ',
    false: '',
};

const margins = {
    false: '',
    y: 'my-4 ',
};

const Container = ({ children, border, margin }: ContainerProps) => {
    const style =
        'flex flex-row flex-wrap justify-center gap-3 p-1 w-fit m-auto sm:w-[630px] sm:p-4 ' +
        borders[border] +
        margins[margin];
    return <article className={style}>{children}</article>;
};

Container.defaultProps = {
    border: 'false',
    margin: 'false',
};

export default Container;
