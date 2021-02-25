import './App.css';
import Dashboard from './components/Dashboard';
import SignIn from './components/sign/SignIn';
import SignUp from './components/sign/SignUP'
import Show from './components/show/Show';
import { AuthContext } from './context/SignInContext';
import { useContext } from 'react';


import { Route, Switch } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
function App() {
  const context = useContext(AuthContext);
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Show condition={context.loggedIn}>
              <Dashboard />
            </Show>
            <Show condition={!context.loggedIn}>
              <SignIn />
            </Show>
          </Route>
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
