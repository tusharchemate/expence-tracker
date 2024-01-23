import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Balance from './Balance';

function App() {
  return (
    <div>
      <Header />
      <div className="container">
        <Balance />
      </div>
    </div>
  );
}

export default App;
