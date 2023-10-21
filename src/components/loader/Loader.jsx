import React from "react";
import { LoadingDiv } from "./style";

function Loader() {
  return (
    <LoadingDiv>
      <div className='lds-dual-ring'></div>
    </LoadingDiv>
  );
}

export default Loader;
