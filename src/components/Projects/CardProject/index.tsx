import { IReposResponse } from "../../../providers/UserProvider/interfaces";
import { HeadingFour, Paragraph, Span } from "../../../styles/Typography";
import { CardProjectStyled } from "./style";
import { AiOutlineFolder } from "react-icons/ai";

interface IRepo {
  repo: IReposResponse;
}

export const CardProject = ({ repo }: IRepo) => {
  return (
    <CardProjectStyled>
      <div>
        <AiOutlineFolder />
        <HeadingFour>{repo.name}</HeadingFour>
      </div>

      <Paragraph fontSize="5">{repo.description}</Paragraph>

      <div>
        <div>
          <a href={repo.html_url} target="_blank" rel="noreferrer">
            <Span fontSize="6">Repo</Span>
          </a>

          <a href={repo.homepage} target="_blank" rel="noreferrer">
            <Span fontSize="6">Page</Span>
          </a>
        </div>

        {repo.language && <Span fontSize="6">{repo.language}</Span>}
      </div>
    </CardProjectStyled>
  );
};
