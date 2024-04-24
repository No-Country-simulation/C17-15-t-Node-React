import React, { createContext, useContext, useState } from 'react';

// Creamos un contexto para almacenar los datos del usuario
const UserContext = createContext();

// Creamos un proveedor de contexto para proporcionar los datos del usuario
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Estado para almacenar los datos del usuario

  // Función para establecer los datos del usuario
  const updateUser = (userData) => {
    setUser(userData);
  };

  // Función para cerrar sesión y eliminar los datos del usuario
  const logout = () => {
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, updateUser, logout }}>
      {children}
    </UserContext.Provider>
  );
};

// Función personalizada para usar el contexto del usuario
export const useUser = () => useContext(UserContext);