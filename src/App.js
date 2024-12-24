import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/view/Home';
import About from './components/view/About';
import User from './components/view/User';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/user/:Id' element={<User/>}/>
      
    </Routes>
    </BrowserRouter>
  );
}

export default App;