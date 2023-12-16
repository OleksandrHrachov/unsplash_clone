import React, { FC } from "react";
import "./Button.scss";

interface IProps {
  title?: string;
  handlerClick: () => void;
  variant?: "primary" | "tag";
  children?: React.ReactNode;
  customClassName?: string;
}

export const Button: FC<IProps> = ({
  title,
  handlerClick,
  variant = "primary",
  children,
  customClassName = ''
}) => {
  return (
    <div className={`${customClassName} custom-btn custom-btn--${variant}`} onClick={handlerClick}>
      {title ? title : children}
    </div>
  );
};
