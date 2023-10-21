import React from "react";
import { ErrorMessageDiv, Main, UsersMain } from "../../style/Container";
import { useFetchAllUsersQuery } from "../../store/store";
import Loader from "../../components/loader/Loader";
import { ClickShow, UserCard } from "../../components";

function Users() {
  const { data, isLoading, error } = useFetchAllUsersQuery();

  if (error) {
    return (
      <UsersMain>
        <ErrorMessageDiv>{error.error || error.data.message}</ErrorMessageDiv>
      </UsersMain>
    );
  }

  if (isLoading) {
    return (
      <UsersMain>
        <Loader />
      </UsersMain>
    );
  }

  return (
    <Main>
      <ClickShow
        data={data}
        displayNumber={12}
      />
    </Main>
  );
}

export default Users;
