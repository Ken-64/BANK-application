import { SendUserNumber } from "../Components/SendUserNumber";
import { SendInfo } from "../Components/SendInfo";
import { SendBotton } from "../Components/SendBotton";
import { useLocation } from "react-router-dom";

export const SendAccountPage = () => {
  const location = useLocation();
  const { user } = location.state || {};

  if (!user) {
    return <div>ユーザー情報が見つかりません。</div>;
  }

  console.log("User Info:", user);

  return (
    <>
      <div className="titleOfsend">送金先</div>
      <div className="SendImageName">
        <img src={`/${user.User.icon}`} width="100px" alt={user.User.name} />
        <div>{user.User.name}</div>
      </div>
      <div className="SendUpSet">
        <SendUserNumber />
      </div>
      <div className="SendInfo">
        <SendInfo />
      </div>
    </>
  );
};
