import {ReactNode} from "react";

export type AppContainerProps = {
  children: ReactNode;
  darkMode: boolean;
};

export type CardGridProps = {
  children: ReactNode;
  classNames?: string;
};
