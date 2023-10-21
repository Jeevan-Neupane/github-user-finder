import React from "react";
import { useFetchSingleUserQuery } from "../../store/store";
import { useParams } from "react-router-dom";
import { Loader, SingleUser } from "../../components";
import { ErrorMessageDiv, SinglePageMainDiv } from "../../style/Container";

function SingleUserPage() {
  const { username } = useParams();
  const { data, error, isLoading, isFetching } =
    useFetchSingleUserQuery(username);
  window.scrollTo(0, 0);
  if (isLoading || isFetching) {
    return (
      <SinglePageMainDiv style={{ height: "200vh", width: "100vw" }}>
        <Loader />
      </SinglePageMainDiv>
    );
  }

  if (error) {
    return (
      <SinglePageMainDiv>
        <ErrorMessageDiv>{error.error}</ErrorMessageDiv>
      </SinglePageMainDiv>
    );
  }
  return (
    <SinglePageMainDiv>
      <SingleUser user={data} />
    </SinglePageMainDiv>
  );
}

export default SingleUserPage;
