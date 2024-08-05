import './App.css';

import {BrowserRouter as Router,Route,Routes,Link} from 'react-router-dom'
import { Home } from './Page/Home';
import { UserListPage } from './Page/UserListPage';


function App() {
  return (
   <Router>
    <Routes>
      <Route path = '/' element={<Home/>}　/>
      <Route path='/list' element={<UserListPage/>}/>
    </Routes>
   </Router>
  );
}

export default App;
