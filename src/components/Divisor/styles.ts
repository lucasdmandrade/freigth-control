import styled from "styled-components";

export const Container = styled.div<{ justifyContent?: string }>`
  display: flex;
  align-items: center;
  justify-content: ${({ justifyContent }) =>
    justifyContent ? justifyContent : "flex-start"};
`;

export const Divisor = styled.hr<{
  width: string;
  color?: string;
  removeMargin?: boolean;
  height?: string;
  backgroundColor?: string;
  removeBorder?: boolean;
}>`
  display: flex;
  width: ${({ width }) => width};
  height: ${({ height }) => (height ? height : "0px")};
  background-color: ${({ backgroundColor }) =>
    backgroundColor ? backgroundColor : "black"};
  margin: ${({ removeMargin }) => (removeMargin ? 0 : "30px 15px")};
  border-color: ${({ color }) => color};
  border: ${({ removeBorder }) => removeBorder && "none"};
`;
