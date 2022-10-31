import './App.css';
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import Navbar from './Navbar';
import VendingMachine from './VendingMachine';
import Pocky from './Pocky';
import OiOcha from './OiOcha';
import Ramen from './Ramen';

function App() {
  return (
    <main className="App">
      <BrowserRouter>
      <Navbar/>
        <Route exact path='/'>
          <VendingMachine/> 

        </Route>

        <Route exact path='/pocky'>
          <Pocky/>
        </Route>

        <Route exact path='/oiocha'>
          <OiOcha/>
        </Route>

        <Route exact path='/ramen'>
          <Ramen/>
        </Route>


      </BrowserRouter>
  </main>
  );
}

export default App;
