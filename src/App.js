import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import Items from "./components/Items";
import Form from "./components/Form";


function App() {
  return (
    <div className="App">
     <Header/>
      <Items/>
      <Form/>
    </div>
  );
}

export default App;
