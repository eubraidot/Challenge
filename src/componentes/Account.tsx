import { useContext } from 'react';
import { Button } from 'reactstrap';
import { accountContext } from '../utils/context';
const NewData={
    accountCode:'eb.iot.develop@gmail.com',
    balance: '1000.00'
}
const Account = () => {
    const {data} = useContext(accountContext)
    return (
        <div className="header">
            <h1>WalletOwner: {data.accountCode}</h1>
            <h2>Amount: {data.balance}</h2>
        </div>
    );
}
export default Account;