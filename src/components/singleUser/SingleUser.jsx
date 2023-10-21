import React from "react";
import {
  BioDesc,
  BioDiv,
  BioHeading,
  Company,
  DetailsDiv,
  GitHubRepo,
  GitHubUrl,
  HierabelDiv,
  ImageDiv,
  Img,
  LeftDiv,
  LocoDiv,
  Name,
  NameLocoDiv,
  NumDetail,
  NumText,
  NumsDetails,
  OuterrDiv,
  PersonalDetails,
  RightDiv,
  TopDiv,
  Username,
  VistUserDiv,
  Website,
} from "./style";
import { AiFillCheckCircle } from "react-icons/ai";
import { ImCross } from "react-icons/im";
function SingleUser({ user }) {
  const hierable = user.hireable;
  return (
    <OuterrDiv>
      <TopDiv color={hierable ? "green" : "red"}>
        <HierabelDiv>
          <span>Hierable</span>
          {hierable ? <AiFillCheckCircle /> : <ImCross />}
        </HierabelDiv>
      </TopDiv>
      <DetailsDiv>
        <LeftDiv>
          <ImageDiv>
            <Img src={user.avatar_url} />
          </ImageDiv>
          <NameLocoDiv>
            <Name>
              <span>{user.name || user.login}</span>
            </Name>
            <LocoDiv>
              <span>{user.location}</span>
            </LocoDiv>
          </NameLocoDiv>
        </LeftDiv>
        <RightDiv>
          <BioDiv>
            <BioHeading>{user.name || user.login}'s Bio</BioHeading>
            <BioDesc>{user.bio || <span>No Bio Available</span>}</BioDesc>
          </BioDiv>
          <PersonalDetails>
            <Username>
              <p>Username:</p> <span>{user.login}</span>
            </Username>
            <Company>
              <p> Company &nbsp;:</p>
              <span>{user.company || "null"}</span>
            </Company>
            <Website>
              <p> Website &nbsp;&nbsp;&nbsp;&nbsp;: </p>
              <span>{user.blog || "null"}</span>
            </Website>
          </PersonalDetails>
        </RightDiv>
      </DetailsDiv>

      <NumsDetails>
        <NumDetail>
          <NumText>Public Repos</NumText>
          <span>{user.public_repos}</span>
        </NumDetail>
        <NumDetail>
          <NumText>Public Gists</NumText>
          <span>{user.public_gists}</span>
        </NumDetail>
        <NumDetail>
          <NumText>Followers</NumText>
          <span>{user.followers}</span>
        </NumDetail>
        <NumDetail>
          <NumText>Following</NumText>
          <span>{user.following}</span>
        </NumDetail>
      </NumsDetails>

      <VistUserDiv>
        <GitHubUrl
          href={user.html_url}
          target='_blank'
        >
          Visit Github
        </GitHubUrl>
        <GitHubRepo to={`repos`}>View Repo</GitHubRepo>
      </VistUserDiv>
    </OuterrDiv>
  );
}

export default SingleUser;
