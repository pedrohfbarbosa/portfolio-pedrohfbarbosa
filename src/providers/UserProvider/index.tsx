import { createContext, useEffect, useState } from "react";
import { api } from "../../services/api";
import { IProviderProps } from "../interfaces";
import { ILanguages, IReposResponse, IUserResponse, IUserContextProps } from "./interfaces";

export const UserContext = createContext({} as IUserContextProps);

export const UserProvider = ({ children }: IProviderProps) => {
  const [user, setUser] = useState<IUserResponse | null>(null);
  const [repos, setRepos] = useState<IReposResponse[] | null>(null);

  const getUser = async () => {
    const userJSON = localStorage.getItem("@USER");

    if (userJSON) {
      const userParse = JSON.parse(userJSON);

      setUser(userParse);

      return;
    }

    try {
      const { data } = await api.get<IUserResponse>("");

      setUser(data);

      const responseJSON = JSON.stringify(data);

      localStorage.setItem("@USER", responseJSON);
    } catch (error) {
      console.log(error);
    }
  };

  const getRepos = async () => {
    const reposJSON = localStorage.getItem("@USER:REPOS");

    if (reposJSON) {
      const reposParse = JSON.parse(reposJSON);

      setRepos(reposParse);

      return;
    }

    try {
      const { data } = await api.get<IReposResponse[]>("/repos");

      setRepos(data);

      const responseJSON = JSON.stringify(data);

      localStorage.setItem("@USER:REPOS", responseJSON);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUser();
    
    getRepos();
  }, []);

  const getLanguagesByRepo = async (repo: string) => {
    try {
      const response = await api.get<ILanguages>(`/${repo}/languages`);

      const languages = Object.keys(response.data);

      return languages;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <UserContext.Provider value={{ user, repos, getLanguagesByRepo }}>
      {children}
    </UserContext.Provider>
  );
};
