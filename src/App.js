import './App.css';
import Store from './components/Store';
import products from './components/Store.const'

function App() {

  return (
    <Store products={products} />
  );
}

export default App;
