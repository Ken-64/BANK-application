import "..//App.css";

export const Username = ({ user }) => {
  return (
    <>
      <p className="name">{user.User.name}</p>
    </>
  );
};
