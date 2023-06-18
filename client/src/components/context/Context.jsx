import React, { createContext, useContext, useState } from "react";

export const Contexts = createContext();

export const AppContext = ({ children }) => {
  const [open, setOpen] = useState(false);
  return (
    <Contexts.Provider value={{ open, setOpen }}>{children}</Contexts.Provider>
  );
};

export const useglobalHook = () => {
  return useContext(Contexts);
};
