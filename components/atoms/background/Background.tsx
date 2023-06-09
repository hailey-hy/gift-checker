export type BackgroundProp = {
    color: 'yellow';
};

const colors = {
    yellow: 'bg-yellow-50 ',
};

const Background = ({ color }: BackgroundProp) => {
    const style = ' w-full h-full fixed top-0 left-0 z-[-1] ' + colors[color];
    return <section className={style}></section>;
};

Background.defaultProps = {
    color: 'yellow',
};

export default Background;
