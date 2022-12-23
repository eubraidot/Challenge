import './App.css';
import { BrowserRouter, Route } from "react-router-dom";

// import BalanceProvider from './utils/context';
import Principal from './paginas/Principal';
import NuevasOperaciones from './paginas/NuevasOperaciones';
import BalanceProvider from './utils/context';

function App() {
  return (
    <div className="App">
      <BalanceProvider>
        <BrowserRouter>
          <Route exact path="/" component={Principal} />
          <Route exact path="/new/:idOperacion/:idTypeOperation">
            <NuevasOperaciones/>
          </Route>
        </BrowserRouter>
      </BalanceProvider>
    </div>
  );
}

export default App;
