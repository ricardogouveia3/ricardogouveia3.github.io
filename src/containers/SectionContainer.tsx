import { GridClassNames } from '@constants/layout.ts';
import { CardGridProps } from '../types/App.type.ts';

const MainWrapper = ({
  children,
  classNames = GridClassNames.container,
}: Readonly<CardGridProps>) => {
  return (
    <div className={`grid ${classNames} my-4 grid-flow-row auto-rows-auto gap-4 sm:my-6`}>
      {children}
    </div>
  );
};

export default MainWrapper;
