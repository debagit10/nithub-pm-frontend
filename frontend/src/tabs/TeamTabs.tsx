import React from "react";
import { Tabs, Tab, Box } from "@mui/material";
import Overview from "../components/team/Overview";
import Members from "../components/team/Members";
import Projects from "../components/team/Projects";
import Meeting from "../components/team/Meeting";

const TeamTabs = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
  }

  const CustomTabPanel = (props: TabPanelProps) => {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`tabpanel-${index}`}
        aria-labelledby={`tab-${index}`}
        {...other}
      >
        {value === index && <Box sx={{ p: 2 }}>{children}</Box>}
      </div>
    );
  };

  const allyProps = (index: number) => {
    return {
      id: `tab-${index}`,
      "aria-controls": `tabpanel-${index}`,
    };
  };

  return (
    <div>
      <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
        <Tabs
          selectionFollowsFocus
          value={value}
          onChange={handleChange}
          sx={{
            "& .MuiTabs-indicator": { backgroundColor: "#22C55E" },
            "& .MuiTab-root": {
              color: "#22C55E",
              "&.Mui-selected": {
                color: "#22C55E", // Ensure selected tab retains the color
              },
            },
          }}
        >
          <Tab label="Overview" {...allyProps(0)} />
          <Tab label="Members" {...allyProps(1)} />
          <Tab label="Projects" {...allyProps(2)} />
          <Tab label="Meetings" {...allyProps(3)} />
        </Tabs>

        <CustomTabPanel value={value} index={0}>
          <Overview />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <Members />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          <Projects />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={3}>
          <Meeting />
        </CustomTabPanel>
      </Box>
    </div>
  );
};

export default TeamTabs;
