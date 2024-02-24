import './App.css'
import { Routes, Route, Navigate } from "react-router-dom";
import { QueryClient, QueryClientProvider } from 'react-query';
import { IRoutes, routes } from './pages/routes';

function App() {
  const queryClient = new QueryClient();

  const setRoutes = (routes: IRoutes[]) => {
    return routes.map(({route, component, key}) => <Route path={route} element={component} key={key} />)
  }

  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        { setRoutes(routes) }
        <Route path="*" element={<Navigate to="/404" />} />
      </Routes>
    </QueryClientProvider>
  )
}

export default App
