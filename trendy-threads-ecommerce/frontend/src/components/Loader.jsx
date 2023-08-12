import React from "react";
import { CircularProgress } from "@mui/material";

const Loader = () => {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      color="primary"
    >
      <CircularProgress />
    </div>
  );
};

export default Loader;
