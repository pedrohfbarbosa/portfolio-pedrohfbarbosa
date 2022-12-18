import { useContext } from "react";
import { GoLocation } from "react-icons/go";
import { AiFillGithub } from "react-icons/ai";
import { SlSocialLinkedin } from "react-icons/sl";
import { MdOutlineEmail } from "react-icons/md";
import { UserContext } from "../../providers/UserProvider";
import { Span } from "../../styles/Typography";
import { CardLink, LinksStyled } from "./style";


export const Links = () => {
  const { user } = useContext(UserContext);

  return (
    <LinksStyled>
      <ul>
        <CardLink>
          <GoLocation />
          <Span>{user?.location}</Span>
        </CardLink>

        <CardLink>
          <AiFillGithub />
          <a
            href="https://github.com/pedrohfbarbosa"
            target="_blank"
            rel="noreferrer"
          >
            <Span>GitHub</Span>
          </a>
        </CardLink>

        <CardLink>
          <SlSocialLinkedin />
          <a
            href="https://www.linkedin.com/in/pedro-barbosa-9150b7246/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </CardLink>

        <CardLink>
          <MdOutlineEmail />
          <Span>barbosatech.adm@gmail.com</Span>
        </CardLink>
      </ul>
    </LinksStyled>
  );
};
