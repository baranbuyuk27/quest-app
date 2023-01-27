import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Component/Navbar/Navbar';
import Home from './components/Component/Home/Home';
import User from './components/Component/User/User';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route exact path='/' component={Home}></Route>
          <Route exact path="/users/:userId" component={User}></Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
