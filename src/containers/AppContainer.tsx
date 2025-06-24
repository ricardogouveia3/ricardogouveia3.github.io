import { AppContainerProps } from '../types/App.type.ts';

export default function AppContainer({ children, darkMode }: Readonly<AppContainerProps>) {
  return (
    <main
      className={`${darkMode ? 'dark' : ''} bg-quartz-950 bg-noise-light dark:bg-quartz-150 dark:bg-noise-dark flex min-h-screen items-center justify-center overflow-hidden bg-repeat`}
    >
      <div className="flex w-full max-w-7xl flex-col items-center p-4 tracking-tight lg:p-6 2xl:max-w-(--breakpoint-2xl)">
        {children}
      </div>
    </main>
  );
}
