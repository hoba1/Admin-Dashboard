import React from "react";
import Row1 from "./Row1";
import Row2 from "./Row2";
import Row3 from "./Row3";
import { Box, Button, Stack } from "@mui/material";
import { DownloadOutlined } from "@mui/icons-material";
import Header from "../../components/Header";

const Dashboard = () => {
  return (
    <Box>
      <Stack direction={"row"} alignItems={"center"} justifyContent={"space-between"}>
        <Header
          isDashboard
          title={"Dashboard"}
          subTitle={"Welcome to your dashboard"}
        />
        <Box textAlign={"Right"} mb={1}>
          <Button
            variant="contained"
            sx={{ p: "6px 8px", textTransform: "capitalize" }}
          >
            <DownloadOutlined sx={{ mr: "6px" }} />
            download reports
          </Button>
        </Box>
      </Stack>
      <Row1 />
      <Row2 />
      <Row3 />
    </Box>
  );
};

export default Dashboard;
