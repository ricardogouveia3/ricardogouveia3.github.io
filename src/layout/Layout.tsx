import AppContainer from "../containers/AppContainer";
import { Outlet } from "react-router-dom";
import {useTheme} from "@hooks/useTheme.ts";

export default function Layout() {
  const { darkMode } = useTheme();

  return (
    <AppContainer darkMode={darkMode}>
      <Outlet />
    </AppContainer>
  );
}
