import { useContext } from "react";
import { UserContext } from "../../contexts/UserProvider";
import { HeadingTwo, Paragraph } from "../../styles/Typography";
import { ProfileStyled } from "./style";

export const Profile = () => {
  const { user } = useContext(UserContext);

  return (
    <ProfileStyled>
      <figure>
        <img src={user?.avatar_url} alt={user?.name} />
      </figure>
      <HeadingTwo>{user?.name}</HeadingTwo>
      <Paragraph>{user?.bio}</Paragraph>
    </ProfileStyled>
  );
};
