export type BackgroundProp = {
    color: 'yellow';
};

const colors = {
    yellow: 'bg-yellow-50 ',
};

const Background = ({ color }: BackgroundProp) => {
    const style = ' w-full h-full absolute top-0 left-0 ' + colors[color];
    return <section className={style}></section>;
};

Background.defaultProps = {
    color: 'yellow',
};

export default Background;
