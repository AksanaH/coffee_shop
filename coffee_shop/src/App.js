import './App.css';

import CoffeeHousePage from './components/coffee-house-page/coffeeHousePage'
import OurCoffeePage from './components/our-coffee-page/our-coffee-page'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {



  return (
    <Router>
      <Routes>
        <Route path='/' element={<CoffeeHousePage />} />
        <Route path='/our_coffee' element={<OurCoffeePage />} />

      </Routes>
    </Router>
  );
}




export default App;
