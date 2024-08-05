import './App.css';
import { Username } from './Components/Username';
import { Userimage } from './Components/Userimage';
import { Useraccount } from './Components/Useraccount';
import { Userbanlance } from './Components/Userbalance';


function App() {
  return (
    <div className="App">
      <div className="smartphone">
        <div className="content">
            </div>
          </div>
          <div className="profile">
          <Userimage />
          <Username/>
          <Useraccount/>
          <Userbanlance/>
          </div>
        </div>
  );
}

export default App;
