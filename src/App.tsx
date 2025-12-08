import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastProvider } from 'barro-ui';
import Layout from './layout/Layout';
import HomePage from './pages/Home';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <ToastProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />

            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Router>
    </ToastProvider>
  );
}
