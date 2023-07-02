import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { checkAuth } from 'features/user';
import { Provider } from "react-redux";
import { store } from "./store";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./containers/HomePage";
import coachArea from "./containers/coachArea";
import registerPage from "./containers/RegisterPage";
import loginPage from "./containers/LoginPage";
import Dashboard from "./containers/DashboardPage";
import profilePage from "./containers/ProfilePage";
import "./App.css";


const App = () => {
      const dispatch = useDispatch();
      
      useEffect(() => {
            dispatch(checkAuth());
      },[]);

      return(
    
   
            <Router>
                  <Routes>
                              <Route exact path='/home' element={<HomePage />} />
                              <Route path='/coaching' element={<coachArea />} />
                              <Route path='/dashboard' element={<Dashboard />} />
                              <Route path='/login' element={<loginPage />} />
                              <Route path='/register' element={<registerPage />} />
                              <Route path='/profile' element={<profilePage />} />
                  </Routes>
            </Router>

      );
  };

  export default App;       