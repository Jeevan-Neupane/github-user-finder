import React from "react";
import { Form, Input } from "./style";

function SearchField({ handleChange, user, ...props }) {
  return (
    <Input
      type='text'
      value={user}
      placeholder='search user'
      onChange={handleChange}
      required
      {...props}
    />
  );
}

export default SearchField;
