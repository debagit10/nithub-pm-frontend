import React, { useState } from "react";
import axios from "axios";
import { Dialog, DialogContent, Button, DialogTitle } from "@mui/material";
import { API_URL } from "../Env";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const DeleteInbox = () => {
  const [open, setOpen] = useState(false);

  const { id } = useParams();
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const navigate = useNavigate();

  const submit = async () => {
    const config = { headers: { "Content-type": "application/json" } };
    try {
      const response = await axios.delete(
        `${API_URL}/api/mail/delete?mailID=${id}`,
        config
      );
      console.log(response.data);
      if (response.data.success) {
        toast.success("Inbox deleted successfully", {
          position: "top-center",
          autoClose: 1500,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          onClose: () => navigate("/inbox"),
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="gap-5">
      <ToastContainer />
      <Button
        onClick={handleOpen}
        variant="outlined"
        sx={{
          textTransform: "capitalize",
          color: "red",
          borderColor: "red",
          "&:hover": { borderColor: "red" },
        }}
      >
        Delete
      </Button>
      <Dialog open={open}>
        <DialogTitle>Delete Inbox?</DialogTitle>
        <DialogContent>
          Are you sure you want to delete this inbox, you cannot undo this
          action?
          <div className="mt-5 flex gap-4 justify-end">
            <Button
              onClick={handleClose}
              variant="outlined"
              sx={{
                textTransform: "capitalize",
                color: "#22C55E",
                borderColor: "#22C55E",
                "&:hover": { borderColor: "#22C55E" },
              }}
              className="cursor-pointer"
            >
              Cancel
            </Button>
            <Button
              onClick={submit}
              variant="outlined"
              disableElevation
              sx={{
                textTransform: "capitalize",
                color: "red",
                borderColor: "red",
                "&:hover": { borderColor: "red" },
              }}
            >
              Yes, delete
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default DeleteInbox;
