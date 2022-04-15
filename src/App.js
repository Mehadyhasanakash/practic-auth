import { Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Contact from './Components/Contact/Contact';
import Document from './Components/Document/Document';
import Generator from './Components/Generator/Generator';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';

function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/generator' element={<Generator></Generator>}></Route>
        <Route path='/Document' element={<Document></Document>}></Route>
        <Route path='/Contact' element={<Contact></Contact>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
      </Routes>
    </>
  );
}

export default App;
