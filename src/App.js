import './App.css';
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import Navbar from './Navbar';
import VendingMachine from './VendingMachine';
import Pocky from './Pocky';
import OiOcha from './OiOcha';
import Ramen from './Ramen';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar/>
          <Routes>
          <Route exact path="/" element={<VendingMachine />} />
        </Routes>
          <Routes>

          <Route exact path="/pocky" element={<Pocky />} />
        </Routes>
          <Routes>

          <Route exact path="/OiOcha" element={<OiOcha />} />
        </Routes>
          <Routes>

          <Route exact path="/Ramen" element={<Ramen />} />
        </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;


        {/* // <Route exact path='/pocky'>
        //   <Pocky/>
        // </Route>

        // <Route exact path='/oiocha'>
        //   <OiOcha/>
        // </Route>

        // <Route exact path='/ramen'>
        //   <Ramen/>
        // </Route>
       </Routes>
       </Router>
      </BrowserRouter> */}