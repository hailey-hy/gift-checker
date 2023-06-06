import Background from './Background';

export default {
    title: 'Design Systems/Atoms/Background',
    component: Background,
    tags: ['autodocs'],
};

export const background = () => {
    return <Background></Background>;
};

background.story = {
    name: 'Default',
};
