import {Username} from '../Components/Username.js';
import {Useraccount} from '../Components/Useraccount.js';
import {Userbanlance} from '../Components/Userbalance.js';
import {Userimage} from '../Components/Userimage.js';

export const Home = () => {
    return (
        <div className="App">
        <div className="smartphone">
          <div className="content">
              </div>
            </div>
            <div className="profile">
              <div className='ImageName'>
              <Userimage />
              <Username/>
              </div>
              <div className='Account'>
              < Useraccount/>
              </div>
  
              <div className='Balance'>
              <Userbanlance/>
             <div/>
           </div>
         </div>
      </div>
    )
}