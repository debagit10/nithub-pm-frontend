import Typography from "@mui/material/Typography";
import React, { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
}

const AuthContainer: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div className="bg-gradient-to-b from-green-100 to-white">
      <div className="p-5">
        <div>
          <Typography variant="h3">Nithub</Typography>
        </div>

        <div className="flex justify-center text-green-500 mb-5">
          <Typography variant="h2" className="text-center typing-animation">
            Project Management Platform
          </Typography>
        </div>

        <div>{children}</div>
      </div>
    </div>
  );
};

export default AuthContainer;
