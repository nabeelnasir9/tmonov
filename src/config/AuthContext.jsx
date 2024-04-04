import { createContext, useState } from "react";
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [generatedImages2, setGeneratedImages2] = useState([]);
  const [upscaleImage, setUpscaleImage] = useState("");
  const value = {
    upscaleImage,
    setUpscaleImage,
    generatedImages2,
    setGeneratedImages2,
  };

  console.log(upscaleImage, "upscaleImage");

  // console.log(generatedImages2, "generatedImages2");
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
