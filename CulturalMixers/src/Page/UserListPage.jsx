import { useEffect, useState } from "react";
// import { ListDummy } from "../Utils/dummyData";
import ListDetail from "../Components/ListDetail";
import "../List.css";
import { getUserList } from "../API/api";

export const UserListPage = () => {
  const [getUser, setGetUser] = useState([]);

  const userId = 1;

  useEffect(() => {
    (async function () {
      try {
        const userInfo = await getUserList(userId);
        console.log(userInfo.data);
        setGetUser(userInfo.data);
      } catch (error) {
        console.error("エラー", error);
      }
    })();
  }, []);

  return (
    <>
      <h2 className="SelectionUserTitle">送金相手を選択</h2>
      <ul className="listcontainer">
        {getUser.map((user) => (
          <ListDetail key={user.user_id} user={user} />
        ))}
      </ul>
    </>
  );
};
