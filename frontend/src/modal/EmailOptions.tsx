import { Button, Divider, Menu, Stack } from "@mui/material";
import React from "react";
import axios from "axios";
import { API_URL } from "../Env";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

interface Mail {
  _id: string;
  status: boolean;
  userID: string;
  createdAt: string;
  title: string;
  message: string;
}

const EmailOptions: React.FC<{ mail: Mail }> = (mail) => {
  const config = { headers: { "Content-type": "application/json" } };

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const navigate = useNavigate();

  const mailID = mail.mail._id;
  const curStatus = mail.mail.status;
  const status = !curStatus;

  const deleteMail = async () => {
    try {
      const response = await axios.delete(
        `${API_URL}/api/mail/delete?mailID=${mailID}`,
        { headers: config.headers }
      );
      console.log(response);
      toast.success(response.data.success, {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      return;
    } catch (error) {
      console.log(error);
    }
  };

  const updateMail = async () => {
    const data = {
      mailID,
      status,
    };

    try {
      const response = await axios.put(
        `${API_URL}/api/mail/update`,
        data,
        config
      );

      console.log(response.data);
      toast.success(response.data.success, {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <ToastContainer />
      <div>
        <Button
          id="demo-positioned-button"
          aria-controls={open ? "demo-positioned-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        >
          Dashboard
        </Button>
        <Menu
          id="demo-positioned-menu"
          aria-labelledby="demo-positioned-button"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
        >
          <Stack>
            <div className="flex justify-center">
              <Button
                variant="text"
                sx={{
                  cursor: "pointer",
                  color: "black",
                  textTransform: "capitalize",
                }}
                fullWidth
                onClick={updateMail}
              >
                Mark as read
              </Button>
            </div>
            <Divider />
            <div className="flex justify-center">
              <Button
                variant="text"
                sx={{
                  cursor: "pointer",
                  color: "black",
                  textTransform: "capitalize",
                }}
                fullWidth
                onClick={() => navigate(`/inbox/${mailID}`)}
              >
                View
              </Button>
            </div>
            <Divider />
            <div className="flex justify-center">
              <Button
                variant="text"
                sx={{
                  cursor: "pointer",
                  color: "red",
                  textTransform: "capitalize",
                }}
                fullWidth
                onClick={deleteMail}
              >
                Delete
              </Button>
            </div>
          </Stack>
        </Menu>
      </div>
    </div>
  );
};

export default EmailOptions;
