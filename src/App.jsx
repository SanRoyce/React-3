import { useState } from "react";
import DataProvider from "./context/DataContext";
import InputB from "./components/InputB";
import InputF from "./components/InputF";
import Table from "./components/Table";
import "./App.css";

function App() {
  return (
    <DataProvider>
      
      <InputF/>
      
    </DataProvider>
  );
}

export default App;
