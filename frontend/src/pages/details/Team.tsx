import React, { useState, useEffect } from "react";
import axios from "axios";
import { API_URL } from "../../Env";
import { useParams } from "react-router-dom";
import Side_nav_container from "../../container/Side_nav_container";
import DayAndTime from "../../utils/DayAndTime";
import { Stack, Skeleton, Typography } from "@mui/material";
import CreateProject from "../../modal/CreateProject";
import TeamTabs from "../../tabs/TeamTabs";

interface Team {
  id: string;
  name: string;
  admin_id: string;
  admin_name: string;
  code: string;
  members: string[];
  createdAt: string;
}

const Team = () => {
  const [detail, setDetail] = useState<Team | null>(null);

  const { id } = useParams();

  const getDetail = async () => {
    const config = { headers: { "Content-type": "application/json" } };
    try {
      const response = await axios.get(
        `${API_URL}/api/team/getDetail?team_id=${id}`,
        { params: config.headers }
      );
      console.log(response.data);
      setDetail(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getDetail();
  });

  return (
    <Side_nav_container>
      <div>
        {detail ? (
          <>
            <Typography
              variant="h4"
              className="text-[#22C55E]"
              sx={{ textTransform: "uppercase" }}
            >
              {detail.name}
            </Typography>

            <Stack direction="row" spacing={0.5}>
              <Typography variant="body2">Team Lead: </Typography>
              <Typography variant="subtitle2">{detail.admin_name}</Typography>
            </Stack>

            <Stack direction="row" spacing={0.5}>
              <Typography variant="body2">Created on:</Typography>{" "}
              <DayAndTime date={detail.createdAt} />
            </Stack>
          </>
        ) : (
          <Stack spacing={1}>
            <Skeleton
              variant="text"
              sx={{ fontSize: "1rem" }}
              width={150}
              height={70}
            />
            <Skeleton variant="text" sx={{ fontSize: "1rem" }} width={300} />
            <Skeleton variant="text" sx={{ fontSize: "1rem" }} width={150} />
          </Stack>
        )}

        <div className="flex justify-end">
          <CreateProject />
        </div>

        <div>
          <TeamTabs />
        </div>
      </div>
    </Side_nav_container>
  );
};

export default Team;
