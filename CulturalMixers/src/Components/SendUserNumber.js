import "..//App.css";
import { useState, useEffect } from "react";
import { getUserInfo } from "../API/api";

export const SendUserNumber = () => {
  const [userData, setUserData] = useState([]);

  const userId = 1;
  useEffect(() => {
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
    <>
      <p className="SendUp">送金上限額 </p>
      <p className="SendUPNumber">{userData.balance}</p>
    </>
  );
};
