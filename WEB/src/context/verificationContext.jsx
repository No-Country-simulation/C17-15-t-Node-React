import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const VerificationContext = createContext(null);

export const VerificationContextProvider = ({ children }) => {
  const [isLogged, setIsLogged] = useState(null);

  const getIsLogged = async (url) => {
    try {
      const response = await axios.post(url, null, {withCredentials: true});
      setIsLogged(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getIsLogged("http://localhost:8080/api/auth/me");
  }, []);

  return (
    <VerificationContext.Provider value={{ isLogged }}>
      {children}
    </VerificationContext.Provider>
  );
};

export const useVerification = () => useContext(VerificationContext);