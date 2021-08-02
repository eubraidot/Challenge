import React, { createContext, useState } from 'react';
import {dataFixed} from './constantes'
export const accountContext = createContext();

const BalanceProvider = ({ children }) => {

    const [data, setData] = useState(dataFixed);
    return (
        <accountContext.Provider  value={{data,setData}}>
            {children}
        </accountContext.Provider>
    );
}
export default BalanceProvider;
