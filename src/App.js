import logo from './logo.svg';
import './App.css';
import {Routes ,Route} from 'react-router-dom'
import Home from './Componetst/Home/Home';
import Login from './Componetst/Login/Login';
import Header from './Componetst/Header/Header';

function App() {
  return (
    <div className="App">
      <Header></Header>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/login' element={<Login></Login>}></Route>
        </Routes>
    </div>
  );
}

export default App;
