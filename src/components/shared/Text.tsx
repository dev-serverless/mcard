"use client";

import { Colors } from "@/styles/colorPalette";
import { Typography, typographyMap } from "@/styles/typography";
import { CSSProperties } from "react";
import { styled } from "styled-components";

type TextProps = {
  typography?: Typography;
  color?: Colors;
  display?: CSSProperties["display"];
  textAlign?: CSSProperties["textAlign"];
  fontWeight?: CSSProperties["fontWeight"];
  bold?: boolean;
};

export const Text = styled.span<TextProps>`
  color: ${({ color }) => color || "black"};
  display: ${({ display }) => display};
  text-align: ${({ textAlign }) => textAlign};
  font-weight: ${({ bold, fontWeight }) => (bold ? "bold" : fontWeight)};
  ${(props) =>
    (props.typography && typographyMap[props.typography]) ||
    typographyMap["t5"]}
`;
