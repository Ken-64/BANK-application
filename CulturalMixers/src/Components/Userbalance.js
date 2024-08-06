import "..//App.css";

export const Userbanlance = ({ user }) => {
  return (
    <>
      <p className="BalanceText">預金残高</p>
      <div className="amount">{user.User.balance}円</div>
    </>
  );
};
