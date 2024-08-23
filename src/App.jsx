import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./funcionalidades/Dashboard.jsx";
import Relatorios from "./funcionalidades/Relatorios.jsx";
import Layout from "./funcionalidades/compartilhado/Layout.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="relatorios" element={<Relatorios />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
