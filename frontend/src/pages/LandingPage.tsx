import { Button, Typography, Stack, Chip } from "@mui/material";
import React from "react";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-gradient-to-b from-green-100 to-white">
      <div className="p-5">
        <div className="flex justify-between">
          <div>
            <Typography variant="h3">Nithub</Typography>
          </div>
          <div className="gap-5 hidden md:flex">
            <div>
              <Button
                disableElevation
                variant="outlined"
                sx={{
                  color: "#22C55E",
                  borderColor: "#22C55E",
                  "&:hover": { borderColor: "#22C55E" },
                }}
                onClick={() => navigate("/auth/login")}
              >
                Login
              </Button>
            </div>
            <div>
              <Button
                disableElevation
                variant="contained"
                sx={{
                  backgroundColor: "#22C55E",
                  "&:hover": { backgroundColor: "#3BD171" },
                }}
                onClick={() => navigate("/auth/signup")}
              >
                Signup
              </Button>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center md:mt-20">
          <div className="flex justify-center text-green-500 mb-5">
            <Typography variant="h2" className="text-center typing-animation">
              Project Management Platform
            </Typography>
          </div>

          <div className="flex justify-center mb-5">
            <Typography variant="subtitle1" className="text-center italic">
              Welcome to Nithub project management hub! A space where projects
              come to life.
              <br /> From brainstorming ideas to executing tasks, this platform
              is where it happens.
              <br /> With intuitive features and a user-friendly interface,
              managing projects has never been smoother.
            </Typography>
          </div>

          <div className="flex justify-center">
            <Button
              disableElevation
              variant="contained"
              sx={{
                backgroundColor: "#22C55E",
                "&:hover": { backgroundColor: "#3BD171" },
              }}
              className=" text-white"
              onClick={() => navigate("/auth/signup")}
            >
              Get Started
            </Button>
          </div>
        </div>

        <div className="md:mt-16 mt-8">
          <div className="flex justify-center">
            <Typography variant="h5">Core Features:</Typography>
          </div>

          <div className="flex justify-center">
            <Stack spacing={3}>
              <Stack direction="row" spacing={2}>
                <Chip
                  icon={
                    <IoIosCheckmarkCircleOutline
                      style={{ color: "#22C55E", fontSize: "20px" }}
                    />
                  }
                  label="Project collaboration"
                  variant="outlined"
                  sx={{
                    color: "#22C55E",
                    borderColor: "#22C55E",
                    "&:hover": { borderColor: "#22C55E" },
                  }}
                />
                <Chip
                  icon={
                    <IoIosCheckmarkCircleOutline
                      style={{ color: "#22C55E", fontSize: "20px" }}
                    />
                  }
                  label="Team management"
                  variant="outlined"
                  sx={{
                    color: "#22C55E",
                    borderColor: "#22C55E",
                    "&:hover": { borderColor: "#22C55E" },
                  }}
                />
                <Chip
                  icon={
                    <IoIosCheckmarkCircleOutline
                      style={{ color: "#22C55E", fontSize: "20px" }}
                    />
                  }
                  label="Meeting Scheduling"
                  variant="outlined"
                  sx={{
                    color: "#22C55E",
                    borderColor: "#22C55E",
                    "&:hover": { borderColor: "#22C55E" },
                  }}
                />
              </Stack>
              <Stack
                direction="row"
                spacing={2}
                className="flex justify-center"
              >
                <Chip
                  icon={
                    <IoIosCheckmarkCircleOutline
                      style={{ color: "#22C55E", fontSize: "20px" }}
                    />
                  }
                  label="Performance Analytics"
                  variant="outlined"
                  sx={{
                    color: "#22C55E",
                    borderColor: "#22C55E",
                    "&:hover": { borderColor: "#22C55E" },
                  }}
                />
                <Chip
                  icon={
                    <IoIosCheckmarkCircleOutline
                      style={{ color: "#22C55E", fontSize: "20px" }}
                    />
                  }
                  label="Progress tracking"
                  variant="outlined"
                  sx={{
                    color: "#22C55E",
                    borderColor: "#22C55E",
                    "&:hover": { borderColor: "#22C55E" },
                  }}
                />
              </Stack>
            </Stack>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
