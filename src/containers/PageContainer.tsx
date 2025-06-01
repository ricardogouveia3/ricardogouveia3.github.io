import { GridClassNames } from '@constants/layout.ts';
import { CardGridProps } from '../types/App.type.ts';

const PageContainer = ({
  children,
  classNames = GridClassNames.container,
}: Readonly<CardGridProps>) => {
  return <div className={`flex justify-center align-middle ${classNames}`}>{children}</div>;
};

export default PageContainer;
