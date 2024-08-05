import "..//App.css";

export const Useraccount = ({ user }) => {
  return <p className="Account">口座番号：{user.User.account_number}</p>;
};
