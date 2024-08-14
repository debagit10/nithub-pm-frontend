import React from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

const CreateProject = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  return (
    <div>
      <Button
        onClick={() => navigate(`/team/${id}/new-project`)}
        variant="outlined"
        sx={{
          color: "#22C55E",
          borderColor: "#22C55E",
          "&:hover": { borderColor: "#22C55E" },
          textTransform: "capitalize",
        }}
      >
        New Project
      </Button>
    </div>
  );
};

export default CreateProject;
