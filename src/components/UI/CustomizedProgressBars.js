import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  marginTop: "10px",
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: "#D1F2EB",
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: "#1ABC9C",
  },
}));

export default function CustomizedProgressBars() {
  return (
    <Box sx={{ width: "100%" }}>
      <BorderLinearProgress variant="determinate" value={10} />
    </Box>
  );
}
