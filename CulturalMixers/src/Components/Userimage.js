export const Userimage = ({ user }) => {
  return (
    <img
      src={user.User.icon}
      alt="Profile"
      className="サンプル1"
      width="200px"
      height="200px"
    />
  );
};
