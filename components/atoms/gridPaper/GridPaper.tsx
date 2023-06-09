/** @jsx jsx */
import { css, jsx } from '@emotion/react';

export type gridPaperProps = {
    children: React.ReactNode;
};

const gridPaperStyle = css(`
box-sizing: border-box;
width: 100%;
height: 100%;
overflow: overlay;
@media (max-width: 340px) {
  left: 0
  width: 288px;
  height: 288px;
  padding: 0;
  margin: 0;
}
top: 0;
left: 0;
margin: auto;
background-color: #ffffff;
justify-content: center;
background-image:
    linear-gradient(90deg, #EDEDED 0px, #EDEDED 1px, transparent 1px, transparent 99px,  transparent 100px),
    linear-gradient(#EDEDED 0px, #EDEDED 1px, transparent 1px, transparent 99px,  transparent 100px),
    linear-gradient(#EDEDED 0px, #EDEDED 1px, transparent 1px, transparent 99px,  transparent 100px),
    linear-gradient(90deg, #e0e0e0 0px, #EDEDED 1px, transparent 1px, transparent 99px,  transparent 100px),
    linear-gradient(transparent 0px, transparent 5px, #ffffff 5px, #ffffff 95px, transparent 95px, transparent 100px),
    linear-gradient(90deg, #EDEDED 0px, #EDEDED 1px, transparent 1px, transparent 99px, #EDEDED 99px, #EDEDED 100px),
    linear-gradient(90deg, transparent 0px, transparent 5px, #ffffff 5px, #ffffff 95px, transparent 95px, transparent 100px),
    linear-gradient(transparent 0px, transparent 1px, #ffffff 1px, #ffffff 99px, transparent 99px, transparent 100px),
    linear-gradient(#EDEDED, #EDEDED);
  background-size:100px 100%, 100% 100px, 100% 10px, 10px 100%, 100% 100px, 100px 100%, 100px 100%, 100px 100px, 100px 100px;
  opcity: 0.5;
`);

const GridPaper = ({ children }: gridPaperProps) => {
    return <div css={gridPaperStyle}>{children}</div>;
};

export default GridPaper;
