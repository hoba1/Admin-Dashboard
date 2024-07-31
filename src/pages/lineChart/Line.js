import { Box, useTheme } from "@mui/material";
import { ResponsiveLine } from "@nivo/line";
import React from "react";

const data = [
  {
    id: "france",
    color: "hsl(52, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 140,
      },
      {
        x: "helicopter",
        y: 95,
      },
      {
        x: "boat",
        y: 18,
      },
      {
        x: "train",
        y: 203,
      },
      {
        x: "subway",
        y: 95,
      },
      {
        x: "bus",
        y: 248,
      },
      {
        x: "car",
        y: 115,
      },
      {
        x: "moto",
        y: 162,
      },
      {
        x: "bicycle",
        y: 166,
      },
      {
        x: "horse",
        y: 104,
      },
      {
        x: "skateboard",
        y: 172,
      },
      {
        x: "others",
        y: 288,
      },
    ],
  },
  {
    id: "us",
    color: "hsl(87, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 61,
      },
      {
        x: "helicopter",
        y: 158,
      },
      {
        x: "boat",
        y: 45,
      },
      {
        x: "train",
        y: 263,
      },
      {
        x: "subway",
        y: 146,
      },
      {
        x: "bus",
        y: 275,
      },
      {
        x: "car",
        y: 35,
      },
      {
        x: "moto",
        y: 64,
      },
      {
        x: "bicycle",
        y: 276,
      },
      {
        x: "horse",
        y: 171,
      },
      {
        x: "skateboard",
        y: 252,
      },
      {
        x: "others",
        y: 297,
      },
    ],
  },
  {
    id: "germany",
    color: "hsl(18, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 1,
      },
      {
        x: "helicopter",
        y: 251,
      },
      {
        x: "boat",
        y: 194,
      },
      {
        x: "train",
        y: 85,
      },
      {
        x: "subway",
        y: 212,
      },
      {
        x: "bus",
        y: 163,
      },
      {
        x: "car",
        y: 85,
      },
      {
        x: "moto",
        y: 196,
      },
      {
        x: "bicycle",
        y: 56,
      },
      {
        x: "horse",
        y: 157,
      },
      {
        x: "skateboard",
        y: 10,
      },
      {
        x: "others",
        y: 265,
      },
    ],
  },
  {
    id: "norway",
    color: "hsl(224, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 60,
      },
      {
        x: "helicopter",
        y: 77,
      },
      {
        x: "boat",
        y: 80,
      },
      {
        x: "train",
        y: 59,
      },
      {
        x: "subway",
        y: 194,
      },
      {
        x: "bus",
        y: 283,
      },
      {
        x: "car",
        y: 2,
      },
      {
        x: "moto",
        y: 103,
      },
      {
        x: "bicycle",
        y: 129,
      },
      {
        x: "horse",
        y: 168,
      },
      {
        x: "skateboard",
        y: 248,
      },
      {
        x: "others",
        y: 292,
      },
    ],
  },
];

const Line = ({isDashboard = false}) => {
  const theme = useTheme();
  return (
    <Box sx={{ height: isDashboard ? "280px" : "75vh" }}>
      <ResponsiveLine
        data={data}
        curve="catmullRom"
        theme={{
          text: {
            fontSize: 11,
            fill: theme.palette.text.primary,
            outlineWidth: 0,
            outlineColor: "transparent",
          },
          axis: {
            domain: {
              line: {
                stroke: theme.palette.divider,
                strokeWidth: 1,
              },
            },
            legend: {
              text: {
                fontSize: 12,
                fill: theme.palette.text.primary,
                outlineWidth: 0,
                outlineColor: "transparent",
              },
            },
            ticks: {
              line: {
                stroke: theme.palette.divider,
                strokeWidth: 1,
              },
              text: {
                fontSize: 11,
                fill: theme.palette.text.secondary,
                outlineWidth: 0,
                outlineColor: "transparent",
              },
            },
          },
          grid: {
            line: {
              stroke: theme.palette.divider,
              strokeWidth: 0,
            },
          },
          legends: {
            title: {
              text: {
                fontSize: 11,
                fill: theme.palette.text.primary,
                outlineWidth: 0,
                outlineColor: "transparent",
              },
            },
            text: {
              fontSize: 11,
              fill: theme.palette.text.primary,
              outlineWidth: 0,
              outlineColor: "transparent",
            },
            ticks: {
              line: {},
              text: {
                fontSize: 10,
                fill: theme.palette.text.primary,
                outlineWidth: 0,
                outlineColor: "transparent",
              },
            },
          },
          annotations: {
            text: {
              fontSize: 13,
              fill: theme.palette.text.primary,
              outlineWidth: 2,
              outlineColor: "#ffffff",
              outlineOpacity: 1,
            },
            link: {
              stroke: "#000000",
              strokeWidth: 1,
              outlineWidth: 2,
              outlineColor: "#ffffff",
              outlineOpacity: 1,
            },
            outline: {
              stroke: "#000000",
              strokeWidth: 2,
              outlineWidth: 2,
              outlineColor: "#ffffff",
              outlineOpacity: 1,
            },
            symbol: {
              fill: "#000000",
              outlineWidth: 2,
              outlineColor: "#ffffff",
              outlineOpacity: 1,
            },
          },
          tooltip: {
            wrapper: {},
            container: {
              background: theme.palette.background.default,
              color: theme.palette.text.primary,
              fontSize: 12,
            },
            basic: {},
            chip: {},
            table: {},
            tableCell: {},
            tableCellValue: {},
          },
        }}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        xScale={{ type: "point" }}
        yScale={{
          type: "linear",
          min: "auto",
          max: "auto",
          stacked: true,
          reverse: false,
        }}
        yFormat=" >-.2f"
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: !isDashboard && "transportation",
          legendOffset: 36,
          legendPosition: "middle",
          truncateTickAt: 0,
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: !isDashboard && "Count",
          legendOffset: -45,
          legendPosition: "middle",
          truncateTickAt: 0,
        }}
        pointSize={10}
        pointColor={{ theme: "background" }}
        pointBorderWidth={2}
        pointBorderColor={{ from: "serieColor" }}
        pointLabel="data.yFormatted"
        pointLabelYOffset={-12}
        enableTouchCrosshair={true}
        useMesh={true}
        legends={[
          {
            anchor: "bottom-right",
            direction: "column",
            justify: false,
            translateX: 100,
            translateY: 0,
            itemsSpacing: 0,
            itemDirection: "left-to-right",
            itemWidth: 80,
            itemHeight: 20,
            itemOpacity: 0.75,
            symbolSize: 12,
            symbolShape: "circle",
            symbolBorderColor: "rgba(0, 0, 0, .5)",
            effects: [
              {
                on: "hover",
                style: {
                  itemBackground: "rgba(0, 0, 0, .03)",
                  itemOpacity: 1,
                },
              },
            ],
          },
        ]}
      />
    </Box>
  );
};

export default Line;
