import { useEffect, useState } from "react";
import { ListDummy } from "../Utils/dummyData";
import ListDetail from "../Components/ListDetail";
import "../List.css";

export const UserListPage = () => {
  const [getUser, setGetUser] = useState([]);

  useEffect(() => {
    setGetUser(ListDummy);
  }, []);

  return (
    <>
      <h2 className="SelectionUserTitle">送金相手を選択</h2>
      <ul className="listcontainer">
        {getUser.map((user, index) => (
          <ListDetail key={index} user={user} />
        ))}
      </ul>
    </>
  );
};
