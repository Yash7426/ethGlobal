"use client";
import { createContext, useContext, useEffect, useState } from "react";

interface IUserContext {
  username: string;
  setUsername: React.Dispatch<string>;
  userId: string;
  setUserId: React.Dispatch<string>;
  userInfo: object;
  setUserInfo: React.Dispatch<object>;
}

const intialData: IUserContext = {
  username: "",
  setUsername: () => {},
  userId: "",
  setUserId: () => {},
  userInfo: {},
  setUserInfo: () => {},
};

const UserContext = createContext<IUserContext>(intialData);

export function useUser() {
  const context = useContext(UserContext);

  if (context.username !== "") {
    return context;
  } else {
    return context;
  }
}

export default function UserProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [username, setUsername] = useState<string>("");
  const [userId, setUserId] = useState<string>("");
  const [userInfo, setUserInfo] = useState<object>({});
  useEffect(() => {
    const user: any = localStorage.getItem("user");
    if (user) {
      // do the necessary with user object
      //   const parsedUser = JSON.parse(user);
      //   setUsername(parsedUser.address as string);
      //   setUserId(parsedUser._id as string);
    }
  }, []);

  return (
    <UserContext.Provider
      value={{
        username,
        setUsername,
        userId,
        setUserId,
        userInfo,
        setUserInfo,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
