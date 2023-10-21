import React from "react";
import { Image, ImageDiv, InfoDiv, MoreButton, Name, OuterDiv } from "./style";

function UserCard({ user }) {
  return (
    <OuterDiv>
      <ImageDiv>
        <Image src={user.avatar_url} />
      </ImageDiv>

      <InfoDiv>
        <Name>{user.login}</Name>
        <MoreButton to={`/user/${user.login}`}>More</MoreButton>
      </InfoDiv>
    </OuterDiv>
  );
}

export default UserCard;
