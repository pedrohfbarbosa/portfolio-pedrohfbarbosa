import { HeadingTwo, Span } from "../../styles/Typography";
import { CardTech, TechsStyled } from "./style";
import { techs } from "./techs";

export const Techs = () => {
  return (
    <TechsStyled>
      <HeadingTwo>Tecnologias</HeadingTwo>
      <ul>
        {techs.map((e, i) => (
          <CardTech key={i}>
            <Span color="body-bg-color" fontSize="6">
              {e}
            </Span>
          </CardTech>
        ))}
      </ul>
    </TechsStyled>
  );
};
