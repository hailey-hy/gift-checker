export type ButtonProps = {
    children: React.ReactNode;
    onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
    theme: 'primary';
    size: 'small' | 'medium';
};

const themes = {
    primary:
        'box-border text-black rounded-lg hover:bg-neutral-200 hover:text-white active:bg-neutral-300 active:border-2 active:border-neutral-200',
};

const sizes = {
    small: 'text-sm w-20 h-9 p-1',
    medium: 'text-base w-40 h-10',
};

const Button = ({ children, onClick, theme, size }: ButtonProps) => {
    const style = themes[theme] + sizes[size];
    return (
        <button onClick={onClick} className={style}>
            {children}
        </button>
    );
};

Button.defaultProps = {
    theme: 'primary',
    size: 'medium',
};

export default Button;
