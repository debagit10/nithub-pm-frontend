import {
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  styled,
  Divider,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import AuthContainer from "../../container/AuthContainer";

import { FcGoogle } from "react-icons/fc";

const Signup = () => {
  const CustomButton = styled(Button)({
    backgroundColor: "#30D42B",
    borderColor: "#30D42B",
    color: "white",
    textTransform: "capitalize",
    "&:hover": {
      backgroundColor: "#1F9D21",
      color: "white",
    },
  });

  const navigate = useNavigate();

  return (
    <AuthContainer>
      <div className="flex justify-center ">
        <Card
          elevation={3}
          className="flex flex-col w-96"
          sx={{ backgroundColor: "transparent" }}
        >
          <CardContent>
            <Typography
              variant="h5"
              gutterBottom
              className="flex justify-center"
            >
              Sign Up
            </Typography>

            <TextField
              label="Name"
              variant="filled"
              fullWidth
              margin="normal"
              size="small"
              required
              InputProps={{
                disableUnderline: true,
              }}
              InputLabelProps={{
                sx: {
                  "&.Mui-focused": {
                    color: "#30D42B",
                  },
                },
              }}
            />
            <TextField
              type="email"
              label="Email"
              variant="filled"
              fullWidth
              margin="normal"
              size="small"
              required
              InputProps={{
                disableUnderline: true,
              }}
              InputLabelProps={{
                sx: {
                  "&.Mui-focused": {
                    color: "#30D42B",
                  },
                },
              }}
            />
            <TextField
              type="password"
              label="Password"
              variant="filled"
              fullWidth
              margin="normal"
              size="small"
              required
              InputProps={{
                disableUnderline: true,
              }}
              InputLabelProps={{
                sx: {
                  "&.Mui-focused": {
                    color: "#30D42B",
                  },
                },
              }}
            />

            <TextField
              type="password"
              label="Confirm Password"
              variant="filled"
              fullWidth
              margin="normal"
              size="small"
              required
              InputProps={{
                disableUnderline: true,
              }}
              InputLabelProps={{
                sx: {
                  "&.Mui-focused": {
                    color: "#30D42B",
                  },
                },
              }}
            />

            <div className="mt-5 mb-2.5">
              <CustomButton type="submit" variant="contained" fullWidth>
                Sign Up
              </CustomButton>
            </div>

            <div>
              <Typography variant="body1" className="pt-2 text-[#747574]">
                Have an account?{" "}
                <span
                  className="text-[#30D42B] hover:cursor-pointer hover:underline"
                  onClick={() => navigate("/auth/login")}
                >
                  Login
                </span>
              </Typography>
            </div>

            <Divider>or</Divider>

            <div className="flex flex-col mt-2.5">
              <Button
                type="submit"
                variant="outlined"
                color="primary"
                fullWidth
                startIcon={<FcGoogle />}
                sx={{
                  textTransform: "capitalize",
                  color: "#22C55E",
                  borderColor: "#22C55E",
                  "&:hover": { borderColor: "#22C55E" },
                }}
              >
                Continue with Google
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </AuthContainer>
  );
};

export default Signup;
