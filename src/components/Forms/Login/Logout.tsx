import React from "react";
import Swal from "sweetalert2";
import { logOut } from "../../../middlewares/auth/auth";
import {Button} from "@mui/material/";

interface Props {
  setIsAuthenticated: any;
}

const LogoutButton = ({ setIsAuthenticated }: Props) => {
  const handleLogout = () => {
    try {
      logOut();
      Swal.fire({
        icon: "question",
        title: "Logging Out",
        text: "Are you sure you want to log out?",
        showCancelButton: true,
        confirmButtonText: "Yes",
      }).then((result) => {
        if (result.value) {
          Swal.fire({
            timer: 1500,
            showConfirmButton: false,
            willOpen: () => {
              Swal.showLoading();
            },
            willClose: () => {
              setIsAuthenticated(false);
            },
          });
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Button
     variant="contained"
     color="error"
      className="muted-button"
      onClick={handleLogout}
    >
      Logout
    </Button>
  );
};

export default LogoutButton;
