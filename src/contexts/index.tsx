import { IProviderProps } from "./interfaces";
import { UserProvider } from "./UserProvider";

export const Providers = ({ children }: IProviderProps) => {
  return <UserProvider>{children}</UserProvider>;
};
