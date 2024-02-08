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
  color: ${(props) => props.color || "black"};
  display: ${(props) => props.display};
  text-align: ${(props) => props.textAlign};
  font-weight: ${(props) => (props.bold ? "bold" : props.fontWeight)};
  ${(props) =>
    (props.typography && typographyMap[props.typography]) ||
    typographyMap["t5"]}
`;
