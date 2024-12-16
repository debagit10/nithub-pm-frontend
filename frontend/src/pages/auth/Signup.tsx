import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import AuthContainer from "../../container/AuthContainer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import {
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  styled,
  Divider,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { FcGoogle } from "react-icons/fc";

import { API_URL } from "../../Env";

const Signup = () => {
  const [cookie, setCookies, removeCookie] = useCookies();
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [role, setRole] = useState("");

  const navigate = useNavigate();

  const config = { headers: { "Content-type": "application/json" } };
  const data = { name, email, password, role };

  const submit = async () => {
    if (!name || !email || !password || !confirmPassword || !role) {
      toast.warning("Please fill all fields", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      return;
    }
    if (password != confirmPassword) {
      toast.error("Passwords do not match", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      return;
    }

    try {
      setLoading(true);
      const response = await axios.post(
        `${API_URL}/api/user/signup`,
        data,
        config
      );
      if (response.data.error) {
        setLoading(false);
        toast.error(response.data.error, {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
        return;
      }
      const token = response.data.token;
      navigate("/home");
      setCookies("token", token);
    } catch (error) {
      console.log(error);
    }
  };

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

  return (
    <AuthContainer>
      <ToastContainer />
      <div className="flex justify-center ">
        <Card
          elevation={3}
          className="flex flex-col w-96"
          sx={{ backgroundColor: "transparent" }}
        >
          <CardContent>
            <Typography variant="h6" className="flex justify-center">
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
              onChange={(e) => setName(e.target.value)}
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
              onChange={(e) => setEmail(e.target.value)}
            />

            <TextField
              placeholder="e.g Software developer"
              label="Role"
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
              onChange={(e) => setRole(e.target.value)}
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
              onChange={(e) => setPassword(e.target.value)}
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
              onChange={(e) => setConfirmPassword(e.target.value)}
            />

            <div className="mt-5 mb-2.5">
              {loading ? (
                <div className="flex justify-center">
                  <LoadingButton
                    loading
                    loadingIndicator="Signing up…"
                    variant="outlined"
                    fullWidth
                    sx={{ textTransform: "capitalize" }}
                  >
                    Fetch data
                  </LoadingButton>
                </div>
              ) : (
                <CustomButton
                  type="submit"
                  variant="contained"
                  fullWidth
                  onClick={submit}
                >
                  Sign Up
                </CustomButton>
              )}
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
