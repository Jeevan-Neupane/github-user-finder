import React from "react";
import {
  CreatedAt,
  DateDiv,
  GithubLink,
  LanguageHeading,
  LeftDiv,
  OuterDiv,
  PushedAt,
  RepoDesc,
  RepoLanguage,
  RepoName,
  RightDiv,
  UpdatedAt,
  WatcherNumber,
} from "./style";

function Repo({ repo, number }) {
  return (
    <OuterDiv>
      <RepoName>
        <span>{number + 1}.</span>
        {repo.name}
      </RepoName>
      <LeftDiv>
        <RepoDesc>
          {repo.description ? repo.description : "No Description Availabel"}
        </RepoDesc>
        <WatcherNumber>
          Watchers: <span>{repo.watchers}</span>
        </WatcherNumber>
        <GithubLink
          href={repo.html_url}
          target='_blank'
        >
          Visit Repo
        </GithubLink>
        <LanguageHeading>
          Main Language Used:{" "}
          <span>{repo.language || "No Languages Specified"} </span>
        </LanguageHeading>
      </LeftDiv>
      <RightDiv>
        <DateDiv>
          <CreatedAt>
            {" "}
            <span>Created At&nbsp;:</span> {repo.created_at}
          </CreatedAt>
          <UpdatedAt>
            {" "}
            <span>Updated At:</span> {repo.updated_at}
          </UpdatedAt>
          <PushedAt>
            {" "}
            <span>Pushed At&nbsp;&nbsp;&nbsp;:</span>
            {repo.pushed_at}
          </PushedAt>
        </DateDiv>
      </RightDiv>
    </OuterDiv>
  );
}

export default Repo;
