import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';

/* components */
// import Message from './components/Message';

/* Paginas */
import Dashboard from './Pages/Dashboard';


import { UserProvider } from './context/UserContext';
import FichaPaciente from './Pages/FichaPaciente';


// function CheckAuth() {
//   const isAuthenticated = localStorage.getItem('token');
//   const navigate = useNavigate();

//   // Verifica a autenticação do usuário
//   useEffect(() => {
//     if (!isAuthenticated) {
//       navigate('/login');
//     }
//   }, [isAuthenticated, navigate]);
// }

function RoutesApp() {
  const routes = (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path='/ficha' element={<FichaPaciente/>} />

    </Routes>
  );

  return (
    <BrowserRouter>
      <UserProvider>
        {/* <Message /> */}
        {/* <CheckAuth /> Verifica a autenticação antes de renderizar as rotas */}
        {routes}
      </UserProvider>
    </BrowserRouter>
  );
}

export default RoutesApp;
