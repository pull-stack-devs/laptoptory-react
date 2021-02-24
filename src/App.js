import './App.css';
import Dashboard from './components/Dashboard';
import SignIn from './components/sign/SignIn';
import AuthProvider from './context/SignInContext';

function App() {
  return (
    <div className="App">
      <Dashboard />
      <AuthProvider>
      <SignIn/>
      </AuthProvider>
    </div>
  );
}

export default App;
