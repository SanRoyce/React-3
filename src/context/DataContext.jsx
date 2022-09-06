import { createContext, useState } from "react";
import React from "react";
import { db } from "../data/db";
export const DataContext = createContext("");

const DataProvider = ({ children }) => {
  const [data, setData] = useState(db);
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [buscar, setBuscar] = useState("");
  const [lista, setLista] = useState(data);
  const [show, setShow] = useState(false);
  
    return (
    <DataContext.Provider
      value={{
        data,
        setData,
        nombre,
        setNombre,
        correo,
        setCorreo,
        buscar,
        setBuscar,
        lista,
        setLista,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
export default DataProvider;
