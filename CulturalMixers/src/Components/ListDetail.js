import React from "react";
import "../List.css";

const ListDetail = ({ user }) => {
  return (
    <>
      <li className="EachList">
        <img className="ListUserIcon" src={user.User.icon} width="100px" />
        <div className="ListuserName">{user.User.name}</div>
      </li>
    </>
  );
};

export default ListDetail;
