import "../css/Button.css";

import { useNavigate } from "react-router-dom";

export const ReturnHomeButton = () => {
  const navigate = useNavigate();
  return (
    <div className="ReturnHomeButtonContent">
      <button className="ReturnHomeButton" onClick={() => navigate("/")}>
        トップ画面に戻る
      </button>
    </div>
  );
};
