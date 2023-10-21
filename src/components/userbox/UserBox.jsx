import React from "react";
import {
  Image,
  LeftDiv,
  NameDiv,
  RighDiv,
  Status,
  UserBoxDiv,
  UserImage,
} from "./style";
import userImg from "../../asset/user.svg";

function UserBox({name}) {
  return (
    <UserBoxDiv>
      <LeftDiv>
        <UserImage>
          <Image src={userImg} />
        </UserImage>
      </LeftDiv>
      <RighDiv>
        <NameDiv>{name}</NameDiv>
        <Status>online</Status>
      </RighDiv>
    </UserBoxDiv>
  );
}

export default UserBox;
