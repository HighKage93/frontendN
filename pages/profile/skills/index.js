import { Typography } from "@mui/material";
import SkillBox from "../../../public/components/skills/SkillBox";
import { useEffect, useState } from "react";

const Skills = () => {
  const [skills] = useState([
    {
      key: "lang",
      skill: "Languages",
      list: ["Java", "JavaScript", "TypeScript"],
    },
    {
      key: "web",
      skill: "Web Development",
      list: [
        "React.js",
        "Next.js",
        "Redux",
        "Redux-Sagas / thunk",
        "HTML",
        "CSS",
      ],
    },
    {
      key: "db",
      skill: "Database Technologies",
      list: ["MYSQL", "MongoDB"],
    },
    {
      key: "aws",
      skill: "AWS Fundamentals",
      list: ["EC2", "DynamoDB", "Clusters", "S3", "..."],
    },
    {
      key: "soft",
      skill: "Soft Skills",
      list: [
        "Communicator",
        "Leadership",
        "Collaborator",
        "Possitive Attitude",
        "Motivator",
        "Time Management",
        "Solution Oriented",
        "Analytical",
      ],
    },
  ]);
  const [selected, setSelected] = useState("lang");

  const handleSelect = (key) => {
    setSelected(key);
  };

  useEffect(() => {
    console.log(selected, "selected state in parent");
  }, [selected]);

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
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "35px",
        }}
      >
        <Typography
          sx={{
            fontSize: "64px",
            lineHeight: "42px",
            fontWeight: "400",
            height: "82px",
            color: "white",
            marginTop: "25px",
            fontFamily: "IBM Plex Mono",
            textDecoration: "underline",
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
        }}
      >
        <Typography
          sx={{
            fontSize: "16px",
            lineHeight: "20px",
            fontWeight: "400",
            height: "20px",
            color: "white",
            marginTop: "5px",
            fontFamily: "IBM Plex Mono",
          }}
        >
          I am striving to never stop learning and improving
        </Typography>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "25px",
        }}
      >
        {skills.map((elem) => (
          <SkillBox
            key={elem.key} // Key for React rendering
            data={elem}
            selected={selected}
            onClick={() => handleSelect(elem.key)} // Correctly pass handler
          />
        ))}
      </div>
      <div
        style={{
          marginTop: "35px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "black", // Black background
          padding: "20px", // Add padding for spacing
          borderRadius: "8px", // Optional: Add rounded corners
        }}
      >
        <div style={{ textAlign: "center" }}>
          {skills
            ?.find((skill) => skill.key === selected)
            ?.list.map((item, index) => (
              <div
                key={index} // Unique key for each item
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "10px", // Space between items
                }}
              >
                <div
                  style={{
                    height: "10px",
                    width: "10px",
                    backgroundColor: "white", // Bullet point color
                    borderRadius: "50%", // Make it a circle
                    marginRight: "10px", // Space between bullet and text
                  }}
                ></div>
                <Typography
                  sx={{
                    color: "white", // White text
                    fontSize: "30px", // Adjust font size
                    fontFamily: "IBM Plex Mono",
                  }}
                >
                  {item}
                </Typography>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
