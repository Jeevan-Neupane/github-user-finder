import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { SearchBarComponets } from "./style";
import SearchBar from "./SearchBar";

function Search() {
  const [show, setShow] = useState(false);

  const onSearchIconClicked = () => {
    setShow(true);
  };
  return (
    <SearchBarComponets>
      <FaSearch onClick={onSearchIconClicked} />

      {show && <SearchBar setShow={setShow} />}
    </SearchBarComponets>
  );
}

export default Search;
