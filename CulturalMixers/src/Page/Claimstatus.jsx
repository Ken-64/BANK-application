import React from "react";
import "../page.css";
import { BackToHomeButton } from "../Components/BackToHomeButton.js"
const Claimstatus = () => {
  return (
    <div className="ClaimstatusWrapper">
      <p className="ClaimstatusMouth">2023年3月分</p>
      <div className="ClaimstatusBorder">
        <div className="ClaimstatusInner">
          <p className="ClaimstatusDay">日付</p>
          <p className="ClaimstatusMoney">お金</p>
          <p className="ClaimstatusMessage">メッセージ</p>
          <div className="payAndIconInner">
            <p className="pay">支払い済み</p>
            <img src="human6.png" alt="アイコン" width="200x" />
          </div>
          <div className="BackToHome">
            <BackToHomeButton/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Claimstatus;
