import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TransactionsList from './TransactionsList';
import CreateTransaction from './CreateTransaction';
import Navbar from './Navbar';

function App() {
  return (
      <Router>
        <Navbar />
        <Routes>
          <Route path="/transactions" element={<TransactionsList />} />
          <Route path="/create-transaction" element={<CreateTransaction />} />
        </Routes>
      </Router>
  );
}

export default App;
