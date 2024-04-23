import React, { createContext, useState, useContext } from "react";

const SignContext = createContext();
// const SingToggleContext = createContext();

export const SignProvider = ({ children }) => {
  const [signIn, setSignIn] = useState(false);

  // const cambioSign = ({ sign }) => {
  //   if(sign === "no"){
  //     setSignIn(!signIn);
  //   }else{
  //     setSignIn(sign);
  //   } 
   
    
  // };

  return (
    <SignContext.Provider value={signIn}>
      
        {children}
     
    </SignContext.Provider>
  );
};

export const useSign = () => useContext(SignContext);
// export const useSignToggle = () => useContext(SingToggleContext);