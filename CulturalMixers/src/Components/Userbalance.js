import "..//App.css";

export const Userbanlance = ({ user }) => {
  return (
    <>
      <p className="BalanceText">預金残高</p>
      <div className="amount">{user.balance}円</div>
    </>
  );
};
