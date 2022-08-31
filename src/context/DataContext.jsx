import { createContext, useState } from "react";
export const DataContext = createContext();
import React from "react";
import {db} from "../data/db";

const DataProvider = ({children}) =>{
    const [data, setData] = useState(db);
    return(
        <DataContext.Provider>
            {children}
        </DataContext.Provider>
    );
}
export default DataProvider;