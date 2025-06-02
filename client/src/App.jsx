// Importando do react
import React, { useContext } from 'react';
// Importando o react-router-dom
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// Contexto de autenticação
import { AuthProvider, Auth } from "@/contexts/aluno/AuthContext";

// PAGES 
import Home from "@/pages/site/Home";
import Login from "@/pages/auth/aluno/Login";


export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PrivateRoute> <Home /> </PrivateRoute>} />      
          <Route path="/login" element={<PublicRoute> <Login /> </PublicRoute>} />  
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}

// Rotas privadas
function PrivateRoute({children }) {
  // Verificando auth
  const { auth, setAuth } = useContext(Auth);
  const isAuthenticated = auth;

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  return children;
}

// Rotas publicas
function PublicRoute({children }) {
  // Verificando auth
  const { auth, setAuth } = useContext(Auth);
  const isAuthenticated = auth;

  if (isAuthenticated) {
    return <Navigate to="/" replace />;
  }
  return children;
}