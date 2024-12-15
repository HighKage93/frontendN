import { Typography } from "@mui/material";

const Skills = () => {
  return (
    <div>
      <div
        className="row"
        style={{
          marginTop: "105px",
        }}
      >
        <div className="col-lg-8 col-md-8" />
        <div className="col-lg-4 col-md-4">
          <Typography
            sx={{
              fontSize: "152px",
              lineHeight: "42px",
              fontWeight: "500",
              height: "82px",
              // width: "96px",
              color: "white",
              marginLeft: "45px",
              marginTop: "25px",
              fontFamily: "IBM Plex Mono",
            }}
          >
            {"</>"}
          </Typography>
        </div>
      </div>
      <div
        // className="row"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "35px"
        }}
      >
        <Typography
          sx={{
            fontSize: "64px",
            lineHeight: "42px",
            fontWeight: "400",
            height: "82px",
            color: "#12F7D6",
            marginTop: "25px",
            fontFamily: "IBM Plex Mono",
            textDecoration: "underline",
            // textde
          }}
        >
          Skills
        </Typography>
        
      </div>
      <div
        style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            // marginTop: "5px"
          }}
      >
      <Typography
            sx={{
                fontSize: "16px",
                lineHeight: "20px",
                fontWeight: "400",
                height: "20px",
                color: "#FFFFFF",
                marginTop: "5px",
                fontFamily: "IBM Plex Mono",
                // textDecoration: "underline",
                // textde
              }}
        >
            I am striving to never stop learning and improving
        </Typography>
      </div>
    </div>
  );
};

export default Skills;
