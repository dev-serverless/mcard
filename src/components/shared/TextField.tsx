"use client";

import React, {
  FocusEventHandler,
  InputHTMLAttributes,
  forwardRef,
  useState,
} from "react";
import { Text } from "./Text";
import Input from "./Input";

type TextFieldProps = {
  label?: React.ReactNode;
  hasError?: boolean;
  helpMessage?: React.ReactNode;
} & InputHTMLAttributes<HTMLInputElement>;

const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  function TextField(
    { label, hasError, helpMessage, onFocus, onBlur, ...props },
    ref: React.ForwardedRef<HTMLInputElement>
  ) {
    const [focused, setFocused] = useState(false);
    const textColor = hasError ? "red" : focused ? "green" : undefined;

    const handleFocus: FocusEventHandler<HTMLInputElement> = (e) => {
      setFocused(true);
      onFocus?.(e);
    };

    const handleBlur: FocusEventHandler<HTMLInputElement> = (e) => {
      setFocused(false);
      onBlur?.(e);
    };

    return (
      <div>
        {label && (
          <Text
            typography="t7"
            color={textColor}
            display="inline-block"
            style={{ marginBottom: 6 }}
          >
            {label}
          </Text>
        )}

        <Input
          ref={ref}
          aria-invalid={hasError}
          onFocus={handleFocus}
          onBlur={handleBlur}
          color={"green"}
          {...props}
        />

        {helpMessage && (
          <Text
            typography="t7"
            color={textColor}
            style={{ marginTop: 6, fontSize: 12 }}
          >
            {helpMessage}
          </Text>
        )}
      </div>
    );
  }
);

export default TextField;
