import React from "react";
import { SmallLoadingDiv } from "./style";

function SmallLoading() {
  return (
    <SmallLoadingDiv >
      <div class='lds-ripple'>
        <div></div>
        <div></div>
      </div>
    </SmallLoadingDiv>
  );
}

export default SmallLoading;
