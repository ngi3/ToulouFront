import React, { Component }  from 'react';
// import Menu from './Components/Menu/Menu';
// import LoginForm from './Components/LoginForm/LoginForm';
// import Btn from './Components/Btn/Btn';
// import { Btn2 } from './Components/Btn2/Btn2';
// import { NavBar } from './Components/NavBar/NavBar';
// import Alert from './Components/Alert/Alert';
// import Dashboard from './Components/Dashboard/Dashboard';
// import Header from './Components/Header/Header';
import AddGeForm from './Components/AddGeForm/AddGeForm';
import AddForm from './Components/AddForm/AddForm';
import { TableContainer } from './Components/TableContainer/TableContainer';
import { View } from './Components/View/View';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import DashboardCiterne from './Components/DashboardCiterne/DashboardCiterne';

function App() {
  return (
    // <div >
    //   {/* <LoginForm/> */}
    //   {/* <Btn/> */}
    //   {/* <Btn2/> */}
    //   {/* <NavBar/> */}
    //   {/* <Alert /> */}
    //   {/* <Dashboard/> */}
    //   {/* <Menu/> */}
    //   {/* <Header/> */}
    //   <AddGeForm/>
   // </div>

   <Router>
    <Routes>
      <Route path='/' element={<AddGeForm/>}>
        <Route path='addform' element={<AddForm/>} />
        <Route path='tablecontainer' element={<TableContainer/>} />
        <Route path='aperçu' element={<View/>} />
        <Route path='graph' element={<DashboardCiterne/>} />
        <Route/>
      </Route>
    </Routes>
   </Router>
  );
}

export default App;
