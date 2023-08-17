
import './App.css';
import AddData from './Components/Adddata/AddData'
import Listdata from './Components/Adddata/Listdata'
import Dash from './Components/Adddata/Dash'
import Edit from './Components/Adddata/Edit'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Components/Adddata/Login'



function App() {
  return (

    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <Dash /> } />
          <Route path='/adddata' element={ <AddData /> } />
          <Route path='/listdata' element={ <Listdata /> } />
          <Route path='/edit/:id' element={ <Edit /> } />
          <Route path='/login' element={ <Login /> } />
        </Routes>
      </BrowserRouter>











    </>
  );
}

export default App;
