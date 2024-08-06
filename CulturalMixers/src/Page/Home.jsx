import { Username } from "../Components/Username.js";
import { Useraccount } from "../Components/Useraccount.js";
import { Userbanlance } from "../Components/Userbalance.js";
import { Userimage } from "../Components/Userimage.js";
import { SendMoneyButton } from "../Components/SendMoneyButton.js";
import { CollectMoneyButton } from "../Components/CollectMoneyButton.js";
// import { UserDummy } from "../Utils/dummyData.js";
import { useEffect, useState } from "react";
import { RequestButton } from "../Components/RequestBotton.js";
import{RequestHistoryButton} from "../Components/RequestHistoryBotton.js";
import { getUserInfo } from "../API/api.js";


export const Home = () => {
  const [userDummy, setUserDummy] = useState([]);

  useEffect(() => {
    setUserDummy(getUserInfo);
  }, []);

  return (
    <div className="App">
      <div className="smartphone">
        <div className="content"></div>
      </div>
      {userDummy.map((user) => (
        <div className="profile" key={user.User.account_number}>
          <div className="ImageName">
            <Userimage user={user} />
            <Username user={user} />
          </div>
          <div className="Account">
            <Useraccount user={user} />
          </div>

          <div className="Balance">
            <Userbanlance user={user} />
            <div>
              <SendMoneyButton />
              <CollectMoneyButton />
            </div>
            <div />
          <div className="Request">
            <RequestButton/>
          </div>
          <div className="RequestHistory">
            <RequestHistoryButton/>
          </div>
          </div>
        </div>
      ))}
    </div>
  );
};
