import { Provider } from "react-redux";
import { store } from "./store";
import { BrowserRouter as Router, Routes, Route, Navigate, } from "react-router-dom";
import HomePage from "./containers/HomePage";
import coachArea from "./containers/coachArea";
import registerPage from "./containers/RegisterPage";
import loginPage from "./containers/LoginPage";
import Dashboard from "./containers/DashboardPage";
import profilePage from "./containers/ProfilePage";
import "./App.css";



const App = () => { 

            <div className="App">
            <Provider store={store}>
            <Router>
            <Routes>

            <Route exact path="/home" component={ <HomePage />} />
            <Route exact path="/coaching" component={<coachArea />} />
            <Route eaxct path="/dashboard" component={ <Dashboard />} />
            <Route path="/login" component={ <loginPage />} />
            <Route path="/register" component={ <registerPage />} />
            <Route path="/profile" component={ <profilePage />} />

            </Routes>
            </Router>
            </Provider>
            </div>
  };

  export default App;       