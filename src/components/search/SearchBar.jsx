import ReactDOM from "react-dom";
import SearchField from "../searchField/SearchField";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { SearchBarDiv, SearchFieldButton, SearchFieldDiv } from "./style";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { setSearchError } from "../../store/store";
function SearchBar({ setShow }) {
  const [user, setUser] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setUser(e.target.value);
  };

  const userState = useSelector((state) => {
    return state.auth.user;
  });

  const dispatch = useDispatch();

  const onformSubmit = (e) => {
    e.preventDefault();
    setUser("");
    setShow((prev) => {
      return !prev;
    });
    if (userState) {
      navigate(`/search/${user}`);
    } else {
      navigate("/login");
      dispatch(setSearchError("Please Login To Proceed"));
    }
  };
  return ReactDOM.createPortal(
    <SearchBarDiv>
      <SearchFieldDiv onSubmit={onformSubmit}>
        <SearchField
          user={user}
          handleChange={handleChange}
          autoFocus
        />
        <SearchFieldButton>Search</SearchFieldButton>
      </SearchFieldDiv>

      <AiOutlineCloseCircle
        onClick={() => {
          setShow((prev) => {
            return !prev;
          });
        }}
        className='icon'
      />
    </SearchBarDiv>,
    document.querySelector(".search_container")
  );
}

export default SearchBar;
