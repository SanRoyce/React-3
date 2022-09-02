import React, { useContext } from "react";
import { DataContext } from "../context/DataContext";


const table = () => {

  const {lista} = useContext(DataContext)

  return (
    <div className="border">
      <h1 className="bg-teal-500 text-white"> <strong>Lista de colaboradores</strong></h1>
      <ul>
        {lista.map((id) => (
          <li key={id.id}> {id.nombre}<br></br>{id.correo}</li>
        ))}
      </ul>
    </div>
  );
};


export default table;
