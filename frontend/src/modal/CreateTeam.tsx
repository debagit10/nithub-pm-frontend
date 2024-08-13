import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

const CreateTeam = () => {
  const [open, setOpen] = useState(false);
  const [teamName, setTeamName] = useState("");

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
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
            onClick={handleClose}
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
