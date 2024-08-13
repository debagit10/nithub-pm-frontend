import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
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
import Side_nav_container from "../container/Side_nav_container";
import axios from "axios";
import { API_URL } from "../Env";
import EmailOptions from "../modal/EmailOptions";
import DayAndTime from "../utils/DayAndTime";

interface Item {
  _id: string;
  status: boolean;
  userID: string;
  createdAt: string;
  title: string;
  message: string;
}

const Inbox = () => {
  const [inbox, setInbox] = useState([]);
  const [cookie, setCookies, removeCookie] = useCookies();
  const token = cookie.token;
  const config = { headers: { "Content-type": "application/json" } };
  const navigate = useNavigate();
  const [date, setDate] = useState("");

  const userMail = async () => {
    try {
      const response = await axios.get(
        `${API_URL}/api/user/mails?token=${token}`,
        {
          headers: config.headers,
        }
      );
      setInbox(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    userMail();
  });

  return (
    <Side_nav_container>
      <div>
        <div className="mb-5">
          <Typography variant="h5" className="text-green-500 ">
            Inbox
          </Typography>
        </div>
        {inbox ? (
          <>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Title</TableCell>
                    <TableCell>Time</TableCell>
                    <TableCell />
                  </TableRow>
                </TableHead>
                <TableBody>
                  {inbox.map((item: Item) => (
                    <TableRow
                      key={item._id}
                      sx={{
                        "&:last-child td, &:last-child th": { border: 0 },
                        backgroundColor: item.status ? "white" : "#E6F9E6",
                      }}
                      className="cursor-pointer"
                    >
                      <TableCell onClick={() => navigate(`/inbox/${item._id}`)}>
                        <Typography variant="caption">{item.title}</Typography>
                      </TableCell>
                      <TableCell onClick={() => navigate(`/inbox/${item._id}`)}>
                        <DayAndTime date={item.createdAt} />
                      </TableCell>
                      <TableCell>
                        <EmailOptions mail={item} />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </>
        ) : (
          <Stack>
            <Skeleton variant="rectangular" width={500} height={50} />
            <Skeleton variant="rectangular" width={500} height={50} />
            <Skeleton variant="rectangular" width={500} height={50} />
            <Skeleton variant="rectangular" width={500} height={50} />
          </Stack>
        )}
      </div>
    </Side_nav_container>
  );
};

export default Inbox;
