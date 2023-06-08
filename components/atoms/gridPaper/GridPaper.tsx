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
@media (max-width: 375px) {
  width: 320px;
  height: 320px;
  padding: 0;
  margin: 0;
}
top: 0;
left: 0;
margin: 0;
background-color: #f6f6f6;
background-image:
    linear-gradient(90deg, #cdcccc 0px, #cdcccc 1px, transparent 1px, transparent 99px,  transparent 100px),
    linear-gradient(#cdcccc 0px, #cdcccc 1px, transparent 1px, transparent 99px,  transparent 100px),
    linear-gradient(#e0e0e0 0px, #e0e0e0 1px, transparent 1px, transparent 99px,  transparent 100px),
    linear-gradient(90deg, #e0e0e0 0px, #e0e0e0 1px, transparent 1px, transparent 99px,  transparent 100px),
    linear-gradient(transparent 0px, transparent 5px, #f6f6f6 5px, #f6f6f6 95px, transparent 95px, transparent 100px),
    linear-gradient(90deg, #e0e0e0 0px, #e0e0e0 1px, transparent 1px, transparent 99px, #e0e0e0 99px, #e0e0e0 100px),
    linear-gradient(90deg, transparent 0px, transparent 5px, #f6f6f6 5px, #f6f6f6 95px, transparent 95px, transparent 100px),
    linear-gradient(transparent 0px, transparent 1px, #f6f6f6 1px, #f6f6f6 99px, transparent 99px, transparent 100px),
    linear-gradient(#cdcccc, #cdcccc);
  background-size:100px 100%, 100% 100px, 100% 10px, 10px 100%, 100% 100px, 100px 100%, 100px 100%, 100px 100px, 100px 100px;
`);

const GridPaper = ({ children }: gridPaperProps) => {
    return <div css={gridPaperStyle}>{children}</div>;
};

export default GridPaper;
