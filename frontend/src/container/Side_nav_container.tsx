import React, { ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { styled, Theme, CSSObject } from "@mui/material/styles";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import MuiDrawer from "@mui/material/Drawer";
import {
  Box,
  CssBaseline,
  Icon,
  IconButton,
  Stack,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import { RiMenuUnfold4Line } from "react-icons/ri";
import { RiMenuUnfold3Line } from "react-icons/ri";
import { IoHomeOutline } from "react-icons/io5";
import { IoMailOutline } from "react-icons/io5";
import { RxDashboard } from "react-icons/rx";
import { GoProjectRoadmap } from "react-icons/go";
import { TbUsersGroup } from "react-icons/tb";
import { GoTasklist } from "react-icons/go";

//import logo from "../assets/logo.png";

interface ContainerProps {
  children: ReactNode;
}

const Side_nav_container: React.FC<ContainerProps> = ({ children }) => {
  const drawerWidth = 240;

  const openedMixin = (theme: Theme): CSSObject => ({
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: "hidden",
  });

  const closedMixin = (theme: Theme): CSSObject => ({
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up("sm")]: {
      width: `calc(${theme.spacing(8)} + 1px)`,
    },
  });

  const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  }));

  interface AppBarProps extends MuiAppBarProps {
    open?: boolean;
  }

  const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== "open",
  })<AppBarProps>(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    }),
  }));

  const Drawer = styled(MuiDrawer, {
    shouldForwardProp: (prop) => prop !== "open",
  })(({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
    boxSizing: "border-box",
    ...(open && {
      ...openedMixin(theme),
      "& .MuiDrawer-paper": openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      "& .MuiDrawer-paper": closedMixin(theme),
    }),
  }));

  //const theme = useTheme();
  const [open, setOpen] = React.useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const sideList = [
    { name: "Home", icon: <IoHomeOutline />, link: "/home" },
    { name: "Dashboard", icon: <RxDashboard />, link: "/dashboard" },
    { name: "Inbox", icon: <IoMailOutline />, link: "/inbox" },
    { name: "Projects", icon: <GoProjectRoadmap />, link: "/projects" },
    { name: "Teams", icon: <TbUsersGroup />, link: "/teams" },
    { name: "Tasks", icon: <GoTasklist />, link: "/tasks" },
  ];

  const navigate = useNavigate();

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      <AppBar
        position="fixed"
        open={open}
        sx={{ backgroundColor: "white" }}
        elevation={1}
      >
        <Toolbar>
          <Tooltip title="Open menu" placement="right-start" arrow>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{
                marginRight: 5,
                ...(open && { display: "none" }),
              }}
            >
              <RiMenuUnfold3Line className="text-green-500" />
            </IconButton>
          </Tooltip>
        </Toolbar>
      </AppBar>

      <Drawer variant="permanent" open={open}>
        <div className="flex justify-center items-center">
          <Typography
            variant="h4"
            className="p-3 cursor-pointer"
            onClick={() => navigate("/home")}
          >
            nithub
          </Typography>

          <div className="pl-16">
            <Tooltip title="Close menu" placement="right-start" arrow>
              <IconButton onClick={handleDrawerClose}>
                <RiMenuUnfold4Line className="text-green-500" />
              </IconButton>
            </Tooltip>
          </div>
        </div>

        {sideList.map((item) => (
          <div className="flex p-5 justify-start ">
            <Stack spacing={1}>
              <Stack
                spacing={1}
                className="flex hover:text-[#30D42B] cursor-pointer rounded-md pl-1 py-1 pr-32 hover:underline"
                direction="row"
                onClick={() => navigate(item.link)}
              >
                {open ? (
                  <Icon sx={{ fontSize: "18px" }}>{item.icon}</Icon>
                ) : (
                  <Tooltip title={item.name} placement="right-start" arrow>
                    <Icon sx={{ fontSize: "18px" }}>{item.icon}</Icon>
                  </Tooltip>
                )}
                <Typography
                  sx={{ opacity: open ? 1 : 0 }}
                  className="font-bold"
                >
                  {item.name}
                </Typography>
              </Stack>
            </Stack>
          </div>
        ))}
      </Drawer>

      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />

        <div>{children}</div>
      </Box>
    </Box>
  );
};

export default Side_nav_container;
