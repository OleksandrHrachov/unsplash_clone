import React, { FC } from "react";
import "./Button.scss";

interface IProps {
  title?: string;
  handlerClick: () => void;
  variant?: "primary" | "tag";
  children?: React.ReactNode;
}

export const Button: FC<IProps> = ({
  title,
  handlerClick,
  variant = "primary",
  children,
}) => {
  return (
    <div className={`custom-btn custom-btn--${variant}`} onClick={handlerClick}>
      {title ? title : children}
    </div>
  );
};
