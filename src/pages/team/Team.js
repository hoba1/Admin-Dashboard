import { DataGrid } from "@mui/x-data-grid";
import React from "react";
import { rows } from "./Data";
import { Box, useTheme, Typography } from "@mui/material";
import {
  AdminPanelSettingsOutlined,
  LockOpenOutlined,
  SecurityOutlined,
} from "@mui/icons-material";
import Header from "../../components/Header";

const Team = () => {
  const theme = useTheme();

  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 33,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "age",
      headerName: "Age",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "phone",
      headerName: "Phone",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "access",
      headerName: "access",
      flex: 1,
      align: "center",
      headerAlign: "center",
      renderCell: ({ row: { access } }) => {
        return (
          <Box
            sx={{
              p: "5px",
              width: "99px",
              mt: "10px",
              mx: "auto",
              borderRadius: "3px",
              textAlign: "center",
              display: "flex",
              justifyContent: "space-evenly",

              backgroundColor:
                access === "Admin"
                  ? theme.palette.primary.dark
                  : access === "Manager"
                  ? theme.palette.secondary.dark
                  : "#3da58a",
            }}
          >
            {access === "Admin" ? (
              <AdminPanelSettingsOutlined fontSize="small" sx={{color: "#fff"}} />
            ) : access === "Manager" ? (
              <SecurityOutlined fontSize="small" sx={{color: "#fff"}} />
            ) : (
              <LockOpenOutlined fontSize="small" sx={{color: "#fff"}} />
            )}
            <Typography fontSize="13px" sx={{color: "#fff"}}>{access}</Typography>
          </Box>
        );
      },
    },
  ];

  return (
    <Box sx={{ width: "98%", height: 600, mx: "auto" }}>
      <Header title={"Team"} subTitle={"Managing Team Members"} />
      <DataGrid rows={rows} columns={columns} />
    </Box>
  );
};

export default Team;
