import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { checkAuth } from './features/user';
import { Provider } from "react-redux";
import { store } from "./store";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./containers/HomePage";
import CoachArea from "./containers/CoachArea";
import RegisterPage from "./containers/RegisterPage";
import LoginPage from "./containers/LoginPage";
import DashboardPage from "./containers/DashboardPage";
import ProfilePage from "./containers/ProfilePage";
import "./App.css";


const App = () => (
      //const dispatch = useDispatch();

      //const { user, isAuthenticated, error, message } = useSelector(
        //    (state) => state.auth
          //);
      
      //useEffect(() => {
        //    dispatch(checkAuth());
      //},[]);

    <Provider store={store}>
            <Router>          
                  <Routes>
                              <Route path='/' element={<HomePage />} />
                              <Route path='/coaching' element={<CoachArea />} />
                              <Route path='/dashboard' element={<DashboardPage />} />
                              <Route path='/login' element={<LoginPage />} />
                              <Route path='/register' element={<RegisterPage />} />
                              <Route path='/profile' element={<ProfilePage />} />
                  </Routes>
            </Router>
      
      </Provider>

    
);

  export default App;       