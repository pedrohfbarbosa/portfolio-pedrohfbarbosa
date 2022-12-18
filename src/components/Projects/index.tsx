import { useContext } from "react";
import { UserContext } from "../../providers/UserProvider";
import { CardProject } from "./CardProject";
import { HeadingTwo } from "../../styles/Typography";
import { ProjectsStyled, StyledTitleDiv } from "./style";

export const Projects = () => {
  const { repos } = useContext(UserContext);

  return (
    <ProjectsStyled>
      <StyledTitleDiv>
        <HeadingTwo>Meus projetos</HeadingTwo>
      </StyledTitleDiv>
      <ul>
        {repos?.map((e) => (
          <CardProject key={e.id} repo={e} />
        ))}
      </ul>
    </ProjectsStyled>
  );
};
