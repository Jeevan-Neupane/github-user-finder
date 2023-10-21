import React from "react";
import { LoginFormMainDiv, WarningDiv } from "../../style/Container";
import { LoginForm } from "../../components";
import { useSelector } from "react-redux";
function LoginFormPage() {
  const searchError = useSelector((state) => state.errors.searchError);

  
  return (
    <LoginFormMainDiv>
      {searchError && (
        <WarningDiv>
          <p>{searchError}</p>
        </WarningDiv>
      )}
      <LoginForm />
    </LoginFormMainDiv>
  );
}

export default LoginFormPage;
