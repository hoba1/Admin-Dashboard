import { Box, useTheme } from "@mui/material";
import Line from "./Line";
import Header from "../../components/Header";

const LineChart = () => {
  const theme = useTheme();
  return (
    <Box>
      <Header title="Line Chart" subTitle="Simple Line Chart" />

      <Line />
    </Box>
  );
};

export default LineChart;
