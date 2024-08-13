import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Side_nav_container from "../../container/Side_nav_container";
import axios from "axios";
import { API_URL } from "../../Env";
import { Typography, Stack, Skeleton } from "@mui/material";
import DeleteInbox from "../../modal/DeleteInbox";
import DayAndTime from "../../utils/DayAndTime";

interface Mail {
  _id: string;
  title: string;
  message: string;
  status: boolean;
  createdAt: string | undefined;
}

const Mail: React.FC = () => {
  const { id } = useParams();
  const config = { headers: { "Content-type": "application/json" } };
  const [detail, setDetail] = useState<Mail | null>(null);

  const getDetail = async () => {
    try {
      const response = await axios.get(`${API_URL}/api/mail/detail?id=${id}`, {
        headers: config.headers,
      });

      setDetail(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getDetail();
  }, []);

  return (
    <Side_nav_container>
      <div className="flex flex-col gap-6">
        {detail ? (
          <>
            <Typography variant="h5">{detail.title}</Typography>
            <Typography variant="body1">{detail.message}</Typography>
            <Typography variant="caption">
              <DayAndTime date={detail.createdAt} />
            </Typography>
            <DeleteInbox />
          </>
        ) : (
          <Stack spacing={4}>
            <Skeleton variant="text" sx={{ fontSize: "1rem" }} width={150} />
            <Skeleton variant="text" sx={{ fontSize: "1rem" }} width={300} />
            <Skeleton variant="text" sx={{ fontSize: "1rem" }} width={150} />
            <Skeleton variant="rectangular" width={70} height={30} />
          </Stack>
        )}
      </div>
    </Side_nav_container>
  );
};

export default Mail;
