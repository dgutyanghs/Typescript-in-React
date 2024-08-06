import { useContext } from "react";
import { UserContext } from "./UserContext";

export const User = () => {
  const userContext = useContext(UserContext);

  const handleLoggin = () => {
    if (userContext) {
      userContext.setUser({
        name: "vishwas",
        email: "vishwas@example.com",
      });
    }
  };

  const handleLogout = () => {
    if (userContext) {
        userContext.setUser(null)
    }
  };

  return (
    <div>
      <button onClick={handleLoggin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <div>User name is {userContext?.user?.name} </div>
      <div>User email is {userContext?.user?.email}</div>
    </div>
  );
};
