import logo from './logo.svg';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import SignUp from './components/signup';

function App() {
  return <Routes>
    <Route path='' element={<SignUp/>}/>
    <Route path='privacy-policy'/>
    <Route path='terms-of-use'/>
    <Route path='safe-dating'/>
    <Route path='contact-us'/>
  </Routes>
}

export default App;
