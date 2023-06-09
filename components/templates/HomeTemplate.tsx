import React from 'react';

export type HomeTemplateProps = {
    children: React.ReactNode;
};

const HomeTemplate = ({ children }: HomeTemplateProps) => {
    return <section className='overflow-overlay justify-center'>{children}</section>;
};

export default HomeTemplate;
