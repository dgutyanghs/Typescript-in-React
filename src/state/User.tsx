import { useState } from "react";

type AuthUser = {
    name: string
    email: string
}

export const User = () => {
//   const [user, setuser] = useState<null | AuthUser>(null);
  const [user, setuser] = useState< AuthUser>({} as AuthUser);

  const handleLoggin = () => {
    setuser({
        name: 'vishwas',
        email: 'vishwas@example.com'
    })
  };

  const handleLogout = () => {
    setuser({} as AuthUser)
  };

  return (
    <div>
      <button onClick={handleLoggin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      {/* <div>User name is {user?.name} </div>
      <div>User email is {user?.email}</div> */}
      <div>User name is {user.name} </div>
      <div>User email is {user.email}</div>
    </div>
  );
};
