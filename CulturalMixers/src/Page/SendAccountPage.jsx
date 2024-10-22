import { SendUserNumber } from "../Components/SendUserNumber";
import { SendInfo } from "../Components/SendInfo";
import { useLocation } from "react-router-dom";
import { BackToHomeButton } from "../Components/BackToHomeButton";
import React from "react";
import { ErrorToHomeButton } from "../Components/ErrorToHomeButton";
export const SendAccountPage = () => {
  const location = useLocation();
  const { user } = location.state || {};

  if (!user) {
    return( 
      <>
      <div className="notFoundUser">ユーザー情報が見つかりません</div>
      <div className="ErrorBackToHome">
      <ErrorToHomeButton/>
      </div>
      </>
  );
    
  }

  console.log("User Info:", user);

  return (
    <>
      <div className="titleOfsend">送金先</div>
      <div className="SendImageName">
        <img src={user.icon} width="100px" alt={user.name} />
        <div>{user.name}</div>
      </div>
      <div className="SendUpSet">
        <SendUserNumber />
      </div>
      <div className="titleOfNumber">送金金額</div>
      <div className="SendInfo">
        <SendInfo user={user} />
      </div>
      <div className="BackToHome">
      <BackToHomeButton/>
      </div>
    </>
  );
};
