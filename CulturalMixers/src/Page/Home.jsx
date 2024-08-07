import { Username } from "../Components/Username.js";
import { Useraccount } from "../Components/Useraccount.js";
import { Userbanlance } from "../Components/Userbalance.js";
import { Userimage } from "../Components/Userimage.js";
import { SendMoneyButton } from "../Components/SendMoneyButton.js";
import { CollectMoneyButton } from "../Components/CollectMoneyButton.js";
// import { UserDummy } from "../Utils/dummyData.js";
import { useEffect, useState } from "react";
import { RequestButton } from "../Components/RequestBotton.js";
import { RequestHistoryButton } from "../Components/RequestHistoryBotton.js";
import { getUserInfo } from "../API/api.js";
;

export const Home = () => {
  const [userData, setUserData] = useState([]);

  const userId = 1;
  useEffect(() => {
    // const GetUser = async () => {
    //   console.log("HELLP")
    //   try {
    //     const userInfo = await getUserInfo(userId);
    //     setUserDummy(userInfo);
    //   } catch (error) {
    //     console.error("エラー", error);
    //   }
    // };
    // GetUser();
    (async function () {
      try {
        const userInfo = await getUserInfo(userId);
        setUserData(userInfo);
      } catch (error) {
        console.error("エラー", error);
      }
    })();
  }, []);

  return (
    <div className="App">
      <div className="smartphone">
        <div className="content"></div>
      </div>
      {/*{userDummy.map((user) => (*/}
      <div className="profile" key={userData.account_number}>
        <div className="ImageName">
          <Userimage user={userData} />
          <Username user={userData} />
        </div>
        <div className="Account">
          <Useraccount user={userData} />
        </div>

        <div className="Balance">
          <Userbanlance user={userData} />
          <div>
            <SendMoneyButton />
            <CollectMoneyButton />
          </div>
          <div />
          <div className="Request">
            <RequestButton />
          </div>
          <div className="RequestHistory">
            <RequestHistoryButton />
          </div>
        </div>
      </div>
      {/*))}*/}
    </div>
  );
};
