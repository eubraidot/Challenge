import { useContext } from 'react'
import { AccountContext } from '../utils/context';

function useAccount() {
   const context=useContext(AccountContext);
   if(!context){
      throw new Error("No hay contexto...");
   }
   return context;
}

export default useAccount