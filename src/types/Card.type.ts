import {ReactNode} from "react";

export type CardProps = {
  children: ReactNode;
  classNames?: string;
  contentClassnames?: string;
  loading?: boolean;
}

export type CardSpinnerProps = {
  isLoading: boolean;
}
