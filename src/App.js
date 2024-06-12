import logo from './logo.svg';
import './App.css';
import AddUser from './components/AddUser';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ViewUser from './components/ViewUser';
import Login from './components/Login';

function App() {
  return (
   <BrowserRouter>
   <Routes>
   <Route path='/login' element={<Login/>}/>
    <Route path='/add' element={<AddUser/>}/>
    
   </Routes>
   </BrowserRouter>
  );
}

export default App;
