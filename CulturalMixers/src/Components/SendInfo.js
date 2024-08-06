import "..//App.css";
import React, { useState, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { getUserInfo, sendMoney } from "../API/api";

export const SendInfo = () => {
  //↑引数にユーザーのIDと送信先のIDを入れたい
  const [userData, setUserData] = useState([]);
  const [error, setError] = useState("");
  const userId = 1; //ユーザーデータの仮置き
  const se_user_id = 1; // 送信者のIDを仮置き
  const re_user_id = 2; // 受信者のIDを仮置き

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

  // 状態を定義
  const navigate = useNavigate();
  const [money, setMoney] = useState("");
  //   const [isDisabled, setIsDisabled] = useState(true);　usememoを使うため必要なし

  // 比較する基準の数値
  const getCurrentMoney = userData.balance;
  const exMath = Number(getCurrentMoney);
  const comparisonNumber = exMath;

  // 入力フィールドが変わったときのハンドラー
  const handleChange = (event) => {
    setMoney(event.target.value);
  };

  // 数値を比較する関数
  //   const compareNumber = () => {
  //     const num = Number(money);
  //     let retrue = "Disable";
  //     if (isNaN(num)) {
  //       return "Disable";
  //     }
  //     if (!Number.isInteger(num)) {
  //       return "Disable";
  //     }
  //     if (num === 0) {
  //       return "Disable";
  //     }
  //     if (num < comparisonNumber) {
  //       retrue = "";
  //     }
  //     return retrue; //num < comparisonNumber ? 'Enable' : 'Disable';
  //   };
  const isValidMoney = useMemo(() => {
    const num = Number(money);
    return (
      !isNaN(num) && Number.isInteger(num) && num > 0 && num <= comparisonNumber
    );
  }, [money, comparisonNumber]);

  // ボタンの有効/無効を切り替える関数　usememoを使うため必要なし
  //   const toggleButton = () => {
  //     setIsDisabled(!isDisabled);
  //   };

  //Onclickしたときの処理
  const handleSendMoney = async () => {
    if (!isValidMoney) {
      setError("無効な金額です！");
      return;
    }
    try {
      const result = await sendMoney(se_user_id, re_user_id, Number(money));
      if (result.success) {
        console.log(`送金に成功しました: ${result.newBalance}`);
        navigate("/SendMoneyFinish");
      } else {
        setError(result.message || "送金に失敗しました。");
      }
    } catch (error) {
      console.error("送金エラーが発生しました", error);
      setError(error.message || "送金処理中にエラーが発生しました。");
    }
  };

  return (
    <div>
      {error && <div className="error-message">{error}</div>}
      <div>
        <input
          type="text"
          value={money}
          onChange={handleChange}
          placeholder="送金金額"
          className="SendUPNumber2"
        />
      </div>
      <div className="SendBotton">
        <button
          className="SendMoneyButton"
          onClick={handleSendMoney}
          disabled={!isValidMoney}
        >
          送金
        </button>
      </div>
    </div>
  );
};
