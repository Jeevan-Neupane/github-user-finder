import { LogoutBtn, LogoutLoadingDiv } from "./style";
import { useDispatch } from "react-redux";
import { logout } from "../../store/store";
import authService from "../../appwrite/auth";
import { useState } from "react";
import Modal from "../modal/Modal";
import { useNavigate } from "react-router-dom";
import Loader from "../loader/Loader";

function Logout() {
  const [showModal, setShowModal] = useState(false);
  const [logoutLoading, setLogoutLoading] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      setLogoutLoading(true);
      authService.logout();
      dispatch(logout());
      setLogoutLoading(false);
      navigate("/");
    } catch (error) {
      setLogoutLoading(false);
      console.log("Logout Btn Errorr", error);
    }
  };

  const onShowModalButtonClicked = () => {
    let value = !showModal ? true : false;
    setShowModal(value);
  };

  if (logoutLoading) {
    return (
      <LogoutLoadingDiv>
        <Loader />+
      </LogoutLoadingDiv>
    );
  }

  return (
    <>
      <LogoutBtn onClick={onShowModalButtonClicked}>Logout</LogoutBtn>

      {showModal ? (
        <Modal
          showModal={showModal}
          setShowModal={setShowModal}
          handleLogout={handleLogout}
          logoutLoading={logoutLoading}
        >
          <>Do you want to logout?</>
        </Modal>
      ) : null}
    </>
  );
}

export default Logout;
