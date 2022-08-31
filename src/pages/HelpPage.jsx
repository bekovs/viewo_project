import { Typography } from "@mui/material";
import React from "react";
import qr from "../assets/images/qr.png";
const HelpPage = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <Typography sx={{ fontSize: "4vmin" }}>Feedback and help</Typography>
      <img src={qr} style={{ width: "40%" }} />
    </div>
  );
};

export default HelpPage;
