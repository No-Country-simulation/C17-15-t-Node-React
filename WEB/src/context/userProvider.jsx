import React, { createContext, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Creamos un contexto para almacenar los datos del usuario
const UserContext = createContext();

// Creamos un proveedor de contexto para proporcionar los datos del usuario
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Estado para almacenar los datos del usuario
  let navigate = useNavigate();
  // Función para establecer los datos del usuario
  const updateUser = (userData) => {
    setUser(userData);
  };

  // Función para cerrar sesión y eliminar los datos del usuario
  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
    localStorage.removeItem("token");    
    // Redirigir a la página principal
    navigate('/', { replace: true });    
  };

  useEffect(() => {
    // Obtenemos los datos del usuario desde el localStorage
    const userString = localStorage.getItem("user");
    const userParse = JSON.parse(userString);
    updateUser(userParse);
  }, []);

  return (
    <UserContext.Provider value={{ user, updateUser, logout }}>
      {children}
    </UserContext.Provider>
  );
};

// Función personalizada para usar el contexto del usuario
export const useUser = () => useContext(UserContext);