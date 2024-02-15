import './App.css'
import { Routes, Route, Navigate } from "react-router-dom";
import { IRoutes, routes } from './app/pages/routes';

function App() {

  const setRoutes = (routes: IRoutes[]) => {
    return routes.map(({route, component, key}) => <Route path={route} element={component} key={key} />)
  }

  return (
    <Routes>
      { setRoutes(routes) }
      <Route path="*" element={<Navigate to="/404" />} />
    </Routes>

  )
}

export default App
