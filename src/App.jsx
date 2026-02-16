import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Programas from './pages/Programas';
import Entrenadores from './pages/Entrenadores';
import Nutricion from './pages/Nutricion';
import Resultados from './pages/Resultados';
import Precios from './pages/Precios';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/programas" element={<Programas />} />
        <Route path="/entrenadores" element={<Entrenadores />} />
        <Route path="/nutricion" element={<Nutricion />} />
        <Route path="/resultados" element={<Resultados />} />
        <Route path="/precios" element={<Precios />} />
      </Routes>
      <Footer />
    </>
  );
}
