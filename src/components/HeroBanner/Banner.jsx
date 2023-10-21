import React, { useState } from "react";

import {
  Desc,
  MainDiv,
  SearchButton,
  SearchDiv,
  WelcomeText,
} from "./style.js";
import { useSelector, useDispatch } from "react-redux";
import SearchField from "../searchField/SearchField.jsx";
import { useNavigate } from "react-router-dom";
import { setSearchError } from "../../store/store.js";
function Banner() {
  const [user, setUser] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userState = useSelector((state) => {
    return state.auth.user;
  });

  const handleChange = (e) => {
    setUser(e.target.value);
  };

  const onSearchButtonClicked = () => {};

  const onFormSubmit = (e) => {
    e.preventDefault();
    if (userState) {
      navigate(`/search/${user}`);
    } else {
      dispatch(setSearchError("Please Login Before Using Search"));
      navigate("/login");
    }
  };
  return (
    <MainDiv>
      <WelcomeText>Welcome.</WelcomeText>
      <Desc>Search Any User Available in Github</Desc>
      <SearchDiv onSubmit={onFormSubmit}>
        <SearchField
          user={user}
          handleChange={handleChange}
        />
        <SearchButton onClick={onSearchButtonClicked}>Search</SearchButton>
      </SearchDiv>
    </MainDiv>
  );
}

export default Banner;
