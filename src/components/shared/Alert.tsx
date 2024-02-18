import React from "react";

type AlertProps = {
  open?: boolean;
  title?: React.ReactNode;
  description?: React.ReactNode;
  buttonLabel?: string;
  onButtonClick?: () => void;
};

const Alert = ({ open }: AlertProps) => {
  return <div></div>;
};

export default Alert;
