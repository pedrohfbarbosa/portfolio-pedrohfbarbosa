import { Links } from "../../components/Links";
import { Profile } from "../../components/Profile";
import { Projects } from "../../components/Projects";
import { Techs } from "../../components/Techs";
import { AsideStyled, HomeStyled, MainStyled } from "./style";

export const Home = () => {
  return (
    <HomeStyled>
      <AsideStyled>
        <Profile />
        <Links />
        <Techs />
      </AsideStyled>
      <MainStyled>
        <Projects />
      </MainStyled>
    </HomeStyled>
  );
};
