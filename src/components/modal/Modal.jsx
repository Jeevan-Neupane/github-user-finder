import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { Main, Button, ButtonDiv, InnerDiv, OuterDiv, TextDiv } from "./style";

function Modal({
  setShowModal,
  showModal,
  children,
  handleLogout,
  logoutLoading,
}) {
  const onShowModalButtonClicked = () => {
    setShowModal(!showModal);
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "initial";
    };
  }, []);

  return ReactDOM.createPortal(
    <Main>
      <OuterDiv onClick={onShowModalButtonClicked}></OuterDiv>
      <InnerDiv>
        <TextDiv>{children}</TextDiv>
        {!logoutLoading && (
          <ButtonDiv>
            <Button
              onClick={handleLogout}
              primary='true'
            >
              Yes
            </Button>
            <Button onClick={onShowModalButtonClicked}>No</Button>
          </ButtonDiv>
        )}
      </InnerDiv>
    </Main>,
    document.querySelector(".modal_container")
  );
}

export default Modal;
