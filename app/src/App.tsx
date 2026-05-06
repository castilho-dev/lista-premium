import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import MemberAreaLayout from './layouts/MemberAreaLayout';
import Login from './pages/Login';
import MemberHome from './pages/MemberHome';
import Fornecedores from './pages/Fornecedores';
import Calculadora from './pages/Calculadora';
import Instagram10k from './pages/Instagram10k';
import WhatsAppLucrativo from './pages/WhatsAppLucrativo';
import TermosDeUso from './pages/TermosDeUso';
import PoliticaPrivacidade from './pages/PoliticaPrivacidade';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/app" replace />} />
        <Route path="/app" element={<Login />} />
        <Route path="/app/area" element={<Navigate to="/inicio" replace />} />

        <Route element={<MemberAreaLayout />}>
          <Route path="/inicio" element={<MemberHome />} />
          <Route path="/fornecedores" element={<Fornecedores />} />
          <Route path="/calculadora" element={<Calculadora />} />
          <Route path="/instagram10k" element={<Instagram10k />} />
          <Route path="/whatsapplucrativo" element={<WhatsAppLucrativo />} />
          <Route path="/termos" element={<TermosDeUso />} />
          <Route path="/privacidade" element={<PoliticaPrivacidade />} />
          <Route path="/bonus" element={<Navigate to="/instagram10k" replace />} />
        </Route>

        <Route path="*" element={<Navigate to="/app" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
