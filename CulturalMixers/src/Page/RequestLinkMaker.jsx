import { RequestNumber } from "../Components/RequestNumber";
import React from "react";

export const RequestLinkMaker = () => {
  return (
    <>
      <p className="titleOfRequest">請求リンクの作成</p>
      <div className="RequstNumber">
        <RequestNumber />
      </div>
    </>
  );
};
