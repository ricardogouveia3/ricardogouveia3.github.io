import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './utils/i18n.ts'
import App from './App.tsx'
import './index.css'
import { ThemeProvider } from "@context/ThemeContext.tsx";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </StrictMode>,
)
