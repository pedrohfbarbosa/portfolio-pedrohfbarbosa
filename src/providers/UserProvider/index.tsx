import { createContext, useEffect, useState } from "react";
import { api } from "../../services/api";
import { IProviderProps } from "../interfaces";
import { IReposResponse, IUserResponse, IUserContextProps } from "./interfaces";

export const UserContext = createContext({} as IUserContextProps);

export const UserProvider = ({ children }: IProviderProps) => {
  const [user, setUser] = useState<IUserResponse | null>(null);
  const [repos, setRepos] = useState<IReposResponse[] | null>(null);

  const getUser = async () => {
    try {
      const { data } = await api.get<IUserResponse>("");

      setUser(data);
    } catch (error) {
      console.log(error);
    }
  };

  const getRepos = async () => {
    try {
      const { data } = await api.get<IReposResponse[]>("/repos");

      setRepos(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUser();

    getRepos();
  }, []);

  return (
    <UserContext.Provider value={{ user, repos }}>
      {children}
    </UserContext.Provider>
  );
};
