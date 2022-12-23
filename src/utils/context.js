import React, { createContext, useState } from 'react';
import {dataFixed} from './constantes'
export const AccountContext = createContext();// agregar mayuscula

const BalanceProvider = ({ children }) => {

    const [data, setData] = useState(dataFixed);
    return (
        <AccountContext.Provider  value={{data,setData}}>
            {children}
        </AccountContext.Provider>
    );
}
export default BalanceProvider;
