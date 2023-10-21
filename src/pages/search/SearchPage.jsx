import React from "react";
import { ErrorMessageDiv, UsersMain } from "../../style/Container";
import { useSelector } from "react-redux";
import { useFetchSearchedUserQuery } from "../../store/store";
import { ClickShow, Empty, Loader } from "../../components";
import { useParams } from "react-router-dom";

function SearchPage() {
  const { query } = useParams();

  const { data, isLoading, isFetching, error } =
    useFetchSearchedUserQuery(query);

console.log(data)
  if (isLoading || isFetching) {
    return (
      <UsersMain>
        <Loader />
      </UsersMain>
    );
  }
  if (error) {
    return (
      <UsersMain>
        <ErrorMessageDiv>{error.error}</ErrorMessageDiv>
      </UsersMain>
    );
  }

  if (data?.items?.length === 0) {
    return (
      <UsersMain>
        <Empty />
      </UsersMain>
    );
  }
  return (
    <UsersMain>
      <ClickShow
        data={data?.items}
        displayNumber={12}
      />
    </UsersMain>
  );
}

export default SearchPage;
