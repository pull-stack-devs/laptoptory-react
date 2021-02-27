import './App.css';
import Dashboard from './components/Dashboard';
import SignIn from './components/sign/SignIn';
import SignUp from './components/sign/SignUP'
import Show from './components/show/Show';
import { AuthContext } from './context/SignInContext';
import { useContext } from 'react';
import ProgramsGrid from './components/Programs/ProgramsGrid';
import { Route, Switch } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';


import { LinkedInPopUp } from 'react-linkedin-login-oauth2';
// import LinkedInPage from './components/sign/LinkedIn';
function App() {
  const context = useContext(AuthContext);
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Show condition={context.loggedIn}>
              <Dashboard />
              <ProgramsGrid />
            
            </Show>
            <Show condition={!context.loggedIn}>
              <SignIn />
             {/* <LinkedInPage/> */}
            </Show>
          </Route>
          <Route exact path="/linkedin" component={LinkedInPopUp} />
          <Route exact path="/signup">
            <Show condition={!context.loggedIn}>
              <SignUp />
            </Show>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
