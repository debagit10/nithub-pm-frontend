import React, { useEffect, useState } from "react";
import Side_nav_container from "../container/Side_nav_container";
import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Typography,
  Stack,
  Skeleton,
} from "@mui/material";
import CreateTeam from "../modal/CreateTeam";
import axios from "axios";
import { useCookies } from "react-cookie";
import { API_URL } from "../Env";

interface Team {
  admin_id: string;
  admin_name: string;
  code: string;
  members: string[];
  name: string;
  id: string;
}

const Teams = () => {
  const [cookie, setCookies, removeCookie] = useCookies();
  const [teams, setTeams] = useState([]);

  const token = cookie.token;

  const getTeams = async () => {
    const config = { headers: { "Content-type": "application/json" } };

    try {
      const response = await axios.get(
        `${API_URL}/api/user/team?token=${token}`,
        { headers: config.headers }
      );
      console.log(response.data);
      setTeams(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTeams();
  }, []);

  return (
    <Side_nav_container>
      <div className="mb-5">
        <Typography variant="h5" className="text-green-500 ">
          Teams
        </Typography>

        <div className="flex justify-end">
          <CreateTeam />
        </div>
      </div>

      <div>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Lead</TableCell>
                <TableCell>No of Members</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {teams.map((item: Team) => (
                <TableRow
                  sx={{
                    "&:last-child td, &:last-child th": { border: 0 },
                  }}
                  className="cursor-pointer"
                >
                  <TableCell>
                    <Typography variant="caption">{item.name}</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="caption">{item.admin_name}</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="caption">
                      {item.members.length}
                    </Typography>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </Side_nav_container>
  );
};

export default Teams;
