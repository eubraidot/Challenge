import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { accountContext } from '../utils/context';

const Account = () => {
    const {data} = useContext(accountContext)
    return (
        <div className="header">
            <h1>WalletOwner: {data.accountCode}</h1>
            <h2>Amount: {data.balance}</h2>
            <Link to="/new">Nueva Operacion</Link>
        </div>
    );
}
export default Account;