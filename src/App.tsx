import React from 'react'
import Register from "./Auth/Register/Register"
import Dashboard from "./Home/Dashboard"
import Login from './Auth/Login/Login';
import {BrowserRouter as Router ,Routes,Route} from "react-router-dom"

function App() {
  const routes = [
    {
      path: "*",
      element:<Login/> ,
    },
    {
      path: "/Register",
      element: <Register/>,
    },
    {
      path: "/home",
      element: <Dashboard/>,
    },
  ];
  

return (<>
    <Router>
      <Routes>
      {routes.map((route, index) => (
      <>
      <Route path={route.path}  key="index" element={route.element}/>
        </>
      ))}
      </Routes>
    </Router>
 </>
  );
}

export default App;
