import {AppContainerProps} from "../../types/App.type.ts";

export default function AppContainer({ children, darkMode }: Readonly<AppContainerProps>) {
  return (
    <main className={`${darkMode ? "dark" : ""} bg-quartz-950 dark:bg-quartz-150 bg-noise-light dark:bg-noise-dark bg-repeat min-h-screen flex items-center justify-center overflow-hidden`}>
      <div className="w-full p-4 lg:p-6 flex flex-col items-center max-w-7xl 2xl:max-w-screen-2xl tracking-tight">
        {children}
      </div>
    </main>
  );
}
