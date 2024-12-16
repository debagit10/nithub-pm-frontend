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
          </>
        ) : (
          <Skeleton
            variant="text"
            sx={{ fontSize: "1rem" }}
            width={150}
            height={70}
          />
        )}

        <div className="flex justify-end">
          {detail ? (
            <CreateProject />
          ) : (
            <Skeleton variant="rectangular" width={70} height={30} />
          )}
        </div>

        <div>
          <TeamTabs />
        </div>
      </div>
    </Side_nav_container>
  );
};

export default Team;
