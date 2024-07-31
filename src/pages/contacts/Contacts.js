import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import React from "react";
import { columns, rows } from "./Data";
import Header from "../../components/Header";

const Contacts = () => {
  return (
    <Box sx={{ width: "98%", height: 600, mx: "auto" }}>
       <Header
        title="CONTACTS"
        subTitle="List of Contacts for Future Reference"
      />
      <DataGrid
        slots={{
          toolbar: GridToolbar,
        }}
        rows={rows}
        columns={columns}
      />
    </Box>
  );
};

export default Contacts;
