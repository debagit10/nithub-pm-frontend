import React from "react";
import { Tabs, Tab, Box } from "@mui/material";

const TeamTabs = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div>
      <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          sx={{
            "& .MuiTabs-indicator": { backgroundColor: "#22C55E" },
            "& .MuiTab-root": { color: "#22C55E" },
            "& .Mui-selected": { color: "#22C55E" },
          }}
        >
          <Tab label="Overview" />
          <Tab label="Members" />
          <Tab label="Projects" />
          <Tab label="Meetings" />
        </Tabs>
      </Box>
    </div>
  );
};

export default TeamTabs;
