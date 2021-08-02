import './App.css';
import Account from './componentes/Account';
import GenericButton from './componentes/GenericButton';
import BalanceProvider from './utils/context';

function App() {
  return (
    <div className="App">
      <BalanceProvider >
        <Account/>
        <GenericButton/>
      </BalanceProvider>
    </div>
  );
}

export default App;
