import { useEffect, useState } from "react";
// import { ListDummy } from "../Utils/dummyData";
import ListDetail from "../Components/ListDetail";
import "../List.css";
import { getUserList } from "../API/api";

export const UserListPage = () => {
  const [getUser, setGetUser] = useState([]);

  const userId = 1;

  useEffect(() => {
    const fetchUserList = async () => {
      try {
        const userInfo = await getUserList(userId);
        setGetUser(userInfo);
      } catch (error) {
        console.error("エラー", error);
      }
    };
    fetchUserList();
  }, []);

  return (
    <>
      <h2 className="SelectionUserTitle">送金相手を選択</h2>
      <ul className="listcontainer">
        {getUser.map((user, index) => (
          <ListDetail key={index} user={user} index={index} />
        ))}
      </ul>
    </>
  );
};
