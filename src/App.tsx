import React from 'react'

import Dashboard from "./Home/Dashboard"
import Login from './Auth/Login/Login';
import {BrowserRouter as Router ,Routes,Route} from "react-router-dom"
import Register from './Auth/Register/Register';

function App() {
  const routes = [
    {
      path: "*",
      element:<Login/> ,
    },
     {
      path: "/home",
      element: <Dashboard/>,
    },
    {
      path: "/Register",
      element: <Register/>,
    },
  ];
  

return (<div >
    <Router>
      <Routes>
      {routes.map((route, index) => (
      <>
      <Route path={route.path}  key="index" element={route.element}/>
        </>
      ))}
      </Routes>
    </Router>
 </div>
  );
}

export default App;
