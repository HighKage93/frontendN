import { Avatar, Tooltip } from "@mui/material";
import React from "react";

const MenuItemNew = (props) => {
  const isSelected = props.selected === props.data.key;

  return (
    <div className="row mx-2 my-5">
      <div
        style={{
          height: "40px",
          width: "40px",
          cursor: "pointer",
        }}
        onClick={props.onClick} // Handle click event
      >
        <Tooltip title={props?.data?.toolTip}>
          <Avatar
            sx={{
              backgroundColor: isSelected ? "#0288d1" : "black", // Highlight selected
              boxShadow: isSelected ? "0px 4px 12px rgba(0, 0, 0, 0.2)" : "none", // Add shadow
              "&:hover": {
                cursor: "pointer",
                backgroundColor: "#0288d1", // Hover color
              },
            }}
          >
            {props.data.icon}
          </Avatar>
        </Tooltip>
      </div>
    </div>
  );
};

export default MenuItemNew;
