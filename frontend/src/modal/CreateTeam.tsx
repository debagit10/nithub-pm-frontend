import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
  Typography,
} from "@mui/material";
import axios from "axios";
import { API_URL } from "../Env";
import { useCookies } from "react-cookie";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CreateTeam = () => {
  const [open, setOpen] = useState(false);
  const [teamName, setTeamName] = useState("");
  const [cookie, setCookies, removeCookie] = useCookies();

  const token = cookie.token;

  const submit = async () => {
    if (!teamName) {
      toast.warning("Please input team name", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    } else {
      try {
        const config = {
          headers: { "Content-type": "application/json" },
          params: { token },
        };

        const data = { teamName };

        const response = await axios.post(
          `${API_URL}/api/team/add`,
          data,
          config
        );
        console.log(response.data);
        if (response.data.success == "team created successfully") {
          toast.success(response.data.success, {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          });
          setOpen(false);
          return;
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <ToastContainer />
      <Button
        onClick={handleOpen}
        variant="outlined"
        sx={{
          color: "#22C55E",
          borderColor: "#22C55E",
          "&:hover": { borderColor: "#22C55E" },
          textTransform: "capitalize",
        }}
      >
        Create Team
      </Button>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          <Typography variant="subtitle1">Create new Team</Typography>
        </DialogTitle>

        <DialogContent>
          <DialogContentText>
            <TextField
              sx={{ width: "400px" }}
              id="standard-basic"
              label="Team's name"
              variant="filled"
              InputProps={{
                disableUnderline: true,
              }}
              InputLabelProps={{
                sx: {
                  "&.Mui-focused": { color: "#30D42B" },
                },
              }}
              onChange={(e) => setTeamName(e.target.value)}
            />
          </DialogContentText>
        </DialogContent>

        <DialogActions>
          <Button
            autoFocus
            onClick={handleClose}
            variant="outlined"
            sx={{
              textTransform: "capitalize",
              color: "red",
              borderColor: "red",
              "&:hover": { borderColor: "red" },
            }}
          >
            Cancel
          </Button>

          <Button
            onClick={submit}
            autoFocus
            disableElevation
            variant="contained"
            sx={{
              backgroundColor: "#22C55E",
              color: "white",
              borderColor: "#22C55E",
              "&:hover": { borderColor: "#22C55E", backgroundColor: "#22C55E" },
              textTransform: "capitalize",
            }}
          >
            Done
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default CreateTeam;
