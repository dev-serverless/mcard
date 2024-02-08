"use client";

import { styled, css } from "styled-components";
import {
  ButtonColor,
  ButtonSize,
  buttonColorMap,
  buttonSizeMap,
  buttonWeakMap,
} from "@/styles/button";

type ButtonPorps = {
  color?: ButtonColor;
  size?: ButtonSize;
  weak?: boolean;
  full?: boolean;
  disabled?: boolean;
};

export const Button = styled.button<ButtonPorps>`
  cursor: pointer;
  font-weight: "bold";
  border-radius: 6px;
  padding: 8px 10px;
  ${(props) => (props.weak ? buttonWeakMap : props.color || "primary")};
  ${(props) =>
    props.weak
      ? buttonWeakMap[props.color || "primary"]
      : buttonColorMap[props.color || "primary"]};
  ${(props) => props.size && buttonSizeMap[props.size]}
  ${(props) =>
    props.full
      ? css`
          display: block;
          width: 100%;
          border-radius: 0;
        `
      : undefined}
  ${(props) =>
    props.disabled
      ? css`
          opacity: 0.25;
          cursor: initial;
        `
      : undefined}
`;
