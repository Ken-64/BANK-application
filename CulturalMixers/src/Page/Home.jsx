import {Username} from '../Components/Username.js';
import {Useraccount} from '../Components/Useraccount.js';
import {Userbanlance} from '../Components/Userbalance.js';
import {Userimage} from '../Components/Userimage.js';
import {SendMoneyButton} from '../Components/SendMoneyButton.js';
import { useNavigate } from "react-router-dom"

export const Home = () => {
  const navigate = useNavigate()
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

              <div>
              <SendMoneyButton />
              </div>
              
             <div/>
           </div>
         </div>
      </div>
    )
}