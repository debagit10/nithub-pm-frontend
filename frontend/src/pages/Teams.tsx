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
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { API_URL } from "../Env";

interface Team {
  admin_id: string;
  admin_name: string;
  code: string;
  members: string[];
  name: string;
  _id: string;
}

const Teams = () => {
  const [cookie, setCookies, removeCookie] = useCookies();
  const [teams, setTeams] = useState([]);

  const navigate = useNavigate();

  const token = cookie.token;

  const getTeams = async () => {
    const config = { headers: { "Content-type": "application/json" } };

    try {
      const response = await axios.get(
        `${API_URL}/api/user/team?token=${token}`,
        { headers: config.headers }
      );
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
          {teams.length ? (
            <CreateTeam />
          ) : (
            <Skeleton variant="rectangular" width={70} height={30} />
          )}
        </div>
      </div>

      <div>
        <TableContainer component={Paper}>
          {teams.length ? (
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
                    key={item._id}
                    onClick={() => navigate(`/team/${item._id}`)}
                  >
                    <TableCell>
                      <Typography variant="caption">{item.name}</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="caption">
                        {item.admin_name}
                      </Typography>
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
          ) : (
            <Stack spacing={0.5}>
              <Skeleton variant="rectangular" width="100%" height={60} />
              <Skeleton variant="rectangular" width="100%" height={60} />
              <Skeleton variant="rectangular" width="100%" height={60} />
            </Stack>
          )}
        </TableContainer>
      </div>
    </Side_nav_container>
  );
};

export default Teams;
