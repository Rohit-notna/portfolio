
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './Components/Main';
import Navbar from './Components/Navbar';
import Calculator from '../src/Components/Calculator'
import TicTacToe from './Components/TicTacToe';
import GuessTheNumber from './Components/GuessTheNumber';
import FormValidation from './Components/FormValidation';
import Footer from '../src/Components/Footer'
import Table from './Components/Table';

function App() {
  return (
    <div >
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="Calculator" element={<Calculator/>}/>
        <Route path="tic" element={<TicTacToe/>}/>
        <Route path="guess" element={<GuessTheNumber/>}/>
        <Route path="form" element={<FormValidation/>}/>
        <Route path="/table" element={<Table/>}/>



      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
