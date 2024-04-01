import { ReactElement } from "react";

import classes from "./ErrorMessage.module.scss";

interface ErrorMessageProps {
  children: ReactElement;
}

const ErrorMessage = ({ children }: ErrorMessageProps) => {
  return <div className={classes.root}>{children}</div>;
};

export default ErrorMessage;
