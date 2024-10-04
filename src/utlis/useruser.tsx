/* eslint-disable import/order */
/* eslint-disable prettier/prettier */
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";

import { getCurrentUser } from "../services/AuthService";
import { IUser } from "../types";

const UserContext = createContext<UserProviderValue | undefined>(undefined);


// Interface Definition
interface UserProviderValue {
  user: IUser | null;
  isLoading: boolean;
  setUser: (user: IUser | null) => void;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
}


// UserProvider Component
const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<IUser | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const handleUser = async () => {
    const user = await getCurrentUser();

    setUser(user);
    setIsLoading(false);
  };

  useEffect(() => {
    handleUser();
  }, [isLoading]);

  return (
    <UserContext.Provider value={{ user, setUser, isLoading, setIsLoading }}>
      {children}
    </UserContext.Provider>
  );
};


// Custom Hook
export const useUser = () => {
  const context = useContext(UserContext);

  if (context === undefined) {
    throw new Error("You must be use UserProvider context then useUser");
  }

  return context;
};

export default UserProvider;