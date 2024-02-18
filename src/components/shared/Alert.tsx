"use client";

import React from "react";
import Dimmed from "./Dimmed";
import { styled } from "styled-components";
import { colors } from "@/styles/colorPalette";
import { Text } from "./Text";
import Flex from "./Flex";
import { Button } from "./Button";

type AlertProps = {
  isOpen?: boolean;
  title?: React.ReactNode;
  description?: React.ReactNode;
  buttonLabel?: string;
  onClose?: () => void;
};

const Alert = ({
  isOpen,
  title,
  description,
  buttonLabel = "확인",
  onClose,
}: AlertProps) => {
  if (isOpen == false) return null;
  return (
    <Dimmed>
      <AlertContainer>
        <Text
          typography="t4"
          bold={true}
          display="block"
          style={{ marginBottom: 6 }}
        >
          {title}
        </Text>
        {description && <Text typography="t7">{description}</Text>}
        <Flex justify="flex-end">
          <Button
            onClick={onClose}
            weak={true}
            style={{ marginTop: 12, border: "none" }}
          >
            {buttonLabel}
          </Button>
        </Flex>
      </AlertContainer>
    </Dimmed>
  );
};

export default Alert;

const AlertContainer = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: ${colors.white};
  border-radius: 8px;
  overflow: hidden;
  z-index: var(--alert-zindex);
  width: 320px;
  padding: 24px;
  box-sizing: border-box;
`;
