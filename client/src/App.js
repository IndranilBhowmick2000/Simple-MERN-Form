// import logo from './logo.svg';
import './App.css';
import Home from './component/Home';
import Login from './component/Login';
import Signup from './component/Signup';
import{BrowserRouter,Routes,Route}from 'react-router-dom'


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/register' element={<Signup/>} />
      <Route path='/login' element={<Login/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
