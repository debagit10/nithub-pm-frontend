import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useCookies } from "react-cookie";
import { API_URL } from "../../Env";
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

interface Members {
  _id: string;
}

const Members = () => {
  const [members, setMembers] = useState([]);
  return (
    <div>
      <TableContainer component={Paper}>
        {members.length ? (
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Role</TableCell>
                <TableCell>View</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {members.map((item: Members) => (
                <TableRow
                  sx={{
                    "&:last-child td, &:last-child th": { border: 0 },
                  }}
                  className="cursor-pointer"
                  key={item._id}
                >
                  <TableCell>
                    <Typography variant="caption">Test</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="caption">Lead</Typography>
                  </TableCell>
                  <TableCell>View</TableCell>
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
  );
};

export default Members;
