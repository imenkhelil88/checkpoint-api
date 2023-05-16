import './App.css';
import MoreDetails from './Components/MoreDetails';
import UserList from './Components/UserList';
import { Routes,Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
    <Routes>
     <Route path='/' element={<UserList/>}/>
     <Route path='/details/:id' element={<MoreDetails/>}/>
     
    </Routes>
     
    </div>
  );
}

export default App;
