import React, { createContext, useState, useEffect } from 'react';

// Criando o contexto
export const Auth = createContext();

// 2. Criando o provider
export const AuthProvider = ({ children }) => {
  // dados a ser compartilhados
  const [auth, setAuth] = useState(true);

  // Função para atualizar
  const atualizarAuth = (status) => {
    setAuth(status);
  };

  // compartilhando os valores do contexto
  return (
    <Auth.Provider value={{ auth, setAuth }}>
      {children}
    </Auth.Provider>
  );
};