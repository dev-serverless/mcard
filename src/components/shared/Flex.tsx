import { CSSProperties } from "react";
import { styled } from "styled-components";

type FlexProps = {
  align?: CSSProperties["alignItems"];
  justify?: CSSProperties["justifyContent"];
  direction?: CSSProperties["flexDirection"];
};

const Flex = styled.div<FlexProps>`
  display: flex;
  align-items: ${({ align }) => align};
  justify-content: ${({ justify }) => justify};
  flex-direction: ${({ direction }) => direction};
`;

export default Flex;
