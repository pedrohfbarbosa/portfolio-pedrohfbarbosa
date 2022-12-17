import { Profile } from "../../components/Profile";
import { AsideStyled, HomeStyled } from "./style";

export const Home = () => {
  return (
    <HomeStyled>
      <AsideStyled>
        <Profile />
      </AsideStyled>
    </HomeStyled>
  );
};
