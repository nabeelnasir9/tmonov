import { createContext, useState } from "react";
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [generatedImages2, setGeneratedImages2] = useState([]);
  const value = {
    generatedImages2,
    setGeneratedImages2,
  };

  console.log(generatedImages2, "generatedImages2");
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
