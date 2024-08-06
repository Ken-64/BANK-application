import './App.css';

import {BrowserRouter as Router,Route,Routes,Link} from 'react-router-dom'
import { Home } from './Page/Home';
import { UserListPage } from './Page/UserListPage';
import { SendAccountPage } from './Page/SendAccountPage';

function App() {
  return (
   <Router>
    <Routes>
      <Route path = '/' element={<Home/>}　/>
      <Route path='/list' element={<UserListPage/>}/>
      <Route path='/send' element={<SendAccountPage/>}/>
    </Routes>
   </Router>
  );
}

export default App;
