import React from "react";
import { EmptyDiv, Message } from "./style";
import { useParams } from "react-router-dom";

function Empty() {
  const { query } = useParams();
  return (
    <EmptyDiv>
      <Message>
        No Result Found for <span>{query} </span>{" "}
      </Message>
    </EmptyDiv>
  );
}

export default Empty;
