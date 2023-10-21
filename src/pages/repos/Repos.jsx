import React, { useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import { useFetchUserReposQuery } from "../../store/store";
import { ErrorMessageDiv, ReposContainer } from "../../style/Container";
import { Loader, Repo } from "../../components";

function Repos() {
  const { username } = useParams();
  const { data, error, isLoading } = useFetchUserReposQuery(username);
  const location = useLocation();

  useEffect(() => {
    scrollTo(0, 0);
  }, [location.pathname]);
  if (isLoading) {
    return (
      <ReposContainer>
        <Loader />
      </ReposContainer>
    );
  }

  if (error) {
    <ReposContainer>
      <ErrorMessageDiv>{error.message}</ErrorMessageDiv>
    </ReposContainer>;
  }

  return (
    <ReposContainer>
      {data?.map((repo, index) => {
        return (
          <Repo
            key={repo.id}
            repo={repo}
            number={index}
          />
        );
      })}
    </ReposContainer>
  );
}

export default Repos;
