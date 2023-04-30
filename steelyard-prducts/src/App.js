import logo from './logo.svg';
import './App.css';
import navbar from './componants/navbar';
import products from './componants/products';




function App() {
  return (
    <div className="App">
      <header className="App-header">
       <h1>{navbar()}</h1>
       
      
       
      </header>
      <body>lorem ipsm</body>
    <h2>{products()}</h2>
    </div>
  );
}

export default App;
