import React, { useEffect } from "react";
import { Typography } from "@mui/material";

const SkillBox = (props) => {
  const { data, selected, onClick } = props;

  useEffect(() => {
    console.log(`SkillBox: ${data.key} is ${selected === data.key ? "selected" : "not selected"}`);
  }, [selected]);

  return (
    <div
      style={{
        height: "132px",
        width: "288px",
        backgroundColor: selected === data.key ? "grey" : "white",
        borderRadius: "8px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginLeft: "15px",
        cursor: "pointer",
        border: selected === data.key ? "3px solid blue" : "3px solid green",
        marginTop: "25px"
      }}
      onClick={onClick} // Correctly handle click event
    >
      <Typography
        sx={{
          fontSize: "30px",
          fontWeight: "500",
          color: "black",
        }}
      >
        {data.skill}
      </Typography>
    </div>
  );
};

export default SkillBox;
