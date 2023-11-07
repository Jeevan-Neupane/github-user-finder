import React from "react";
import { Form, Input } from "./style";


function SearchField({ handleChange, user }) {
  return (
   
    <Input
      type='text'
      value={user}
      placeholder='search user'
      onChange={handleChange}
      required
      
    />
  );
}

export default SearchField;
