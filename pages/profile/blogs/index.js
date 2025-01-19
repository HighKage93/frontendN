import {
  Typography,
  Tabs,
  Tab,
  Stepper,
  StepLabel,
  StepContent,
  Step,
  StepIcon,
  Avatar,
  Box,
  Divider,
} from "@mui/material";
import { useState } from "react";

const Blogs = () => {
  const [tabValue, setTabValue] = useState(0);
  const [blogActiveStep, setBlogActiveStep] = useState(0);
  const [projectctiveStep, setProjectActiveStep] = useState(0);
  const steps = [
    {
      label: "Footballers reunion",
      title: "Galácticos' Getaway: A Coastal Reunion in 2050",
      key: "label1",
      time: "4 March 2019",
      dscription:
        "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it",
      blog: {
        paragraph: [
          `2050`,
          `Somewhere in Spain along the coast, a sandy beach, on a Clásico night.`,
          `Ramos: “Welcome to our humble gateway.”`,
          `Messi: “Fuck man, how much did you make at Madrid? Who owns it?”`,
          `Ramos: “Perez, of course. Zizou gave me the keys when I retired. It’s a getaway and a get-together point for Galácticos when they quit football. Nobody knows this, or we’d have the paparazzi.”`,
          `Piqué: “You’re fucking with me, right?”`,
          `Cris: “No, man. You can ask Puyol or Ronaldinho; they were here as well. Here we bring only the ones who are worthy.”`,
          `Xavi: “But Messi deserves better than this.”`,
          `Iker: “Xavi, buddy! For how long are you gonna do this, huh? It’s over now. We’re half-dead with one foot in the grave and the other on a banana skin. What now?”`,
          `Xavi: “I pass.”`,
          `All laugh.`,
          `Benzema: “Fuck this, where are the drinks and the pool?”`,
          `Iniesta: “Yeah, I’ve got to keep my shoes and stuff. Let’s go to the rooms.”`,
          `Piqué (shouting): “Refs! Refs! Why do I have a smaller room than Ramos? This is cheating...”`,
          `Busquets: “Yeah, yeah. Even I have a room facing the sea; it’s cold.”`,
          `Ramos: “Oh, for fuck’s sake, when will you guys grow up...”`,
        ],
      },
    },
    {
      label: "Decentralization of the Internet",
      title: "The Decentralized Web: Empowering the Future of Connectivity",
      key: "label1",
      time: "17 January 2025",
      description:
        "A deep dive into the potential of decentralizing the internet. From blockchain to peer-to-peer networks, learn how decentralization could change the way we connect, share, and protect our data.",
      blog: {
        paragraph: [
          "The internet, as we know it today, is largely centralized. A handful of companies control the vast majority of the platforms and services we use daily—from social media giants to cloud service providers. This centralization, while offering convenience and innovation, comes with significant drawbacks, most notably in privacy, security, and control over data. However, the concept of a decentralized internet promises to shift the balance, offering a more secure, private, and democratic digital ecosystem.",

          "So, what exactly is a decentralized internet? In simple terms, decentralization means spreading control and data across multiple nodes, rather than relying on a single entity or server. It’s a model where no single organization has complete control, and users themselves retain more authority over their personal data and digital presence. This is made possible through technologies like blockchain and peer-to-peer (P2P) networks, which allow for more distributed and transparent systems that are harder to censor or control.",

          "Why do we need a decentralized internet? The centralized model has led to several issues, such as data breaches, censorship, monopolies, and lack of privacy. Personal data is often collected, stored, and sold by corporations without user consent, while governments or powerful entities can easily impose censorship and surveillance. In a decentralized model, each individual or organization can control their own data and online activities. This not only enhances privacy but also mitigates the risks of data monopolies and overreach.",

          "In terms of where we are today, decentralized technologies have come a long way but are still in their early stages. Blockchain, for instance, has revolutionized the way transactions are recorded and verified across a network of computers. Cryptocurrencies like Bitcoin and Ethereum are prime examples of decentralized applications (dApps) that enable peer-to-peer transactions without the need for banks or centralized authorities. These technologies offer transparency, security, and immutability—traits that are essential for the vision of a decentralized web.",

          "Peer-to-peer networks are another key component of a decentralized internet. By connecting users directly without intermediaries, these networks eliminate the need for centralized servers and allow for a more resilient, efficient system. For example, file-sharing protocols like BitTorrent have been around for years, enabling users to share files directly with each other. This concept could be expanded to everything from social media platforms to cloud storage, where users would own and control their own data, rather than entrusting it to third parties.",

          "While decentralized technologies have shown great promise, challenges remain. Scalability is a major issue, as decentralized networks often require more computational power and resources than centralized ones. There are also concerns about regulation, as decentralized systems can be difficult for governments to monitor and control. Additionally, widespread adoption is still in its infancy, with many decentralized applications still struggling to attract mainstream users due to usability issues and a lack of infrastructure.",

          "Despite these challenges, the future of a decentralized internet looks bright. The increasing focus on privacy, security, and control over personal data is driving innovation in this space. Companies and developers are working on creating more efficient decentralized systems, from decentralized storage solutions like IPFS (InterPlanetary File System) to new blockchain platforms that are more scalable and energy-efficient.",

          "The decentralized internet is not a pipe dream—it’s becoming a reality. As technologies mature and more people demand greater control over their digital lives, we can expect the internet to evolve into a more open, democratic, and user-centric platform. By decentralizing the web, we can reduce the power of monopolistic corporations, enhance privacy, and create a more equitable digital space for everyone.",
        ],
      },
    },
  ];
  const projectSteps = [
    {
        label: "My Personal Profile Portfolio",
        title: "Building a Multi-Page Application with Next.js, TypeScript, MUI, and AWS",
        key: "label1",
        time: "17 January 2025",
        dscription:
          "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it",
        blog: {
          paragraph: [
            `In today's fast-paced development world, creating a highly efficient, scalable, and responsive web application is crucial. In this blog, I will walk you through the process of developing a multi-page application using some of the most modern and powerful tools: Next.js, TypeScript, MUI, and AWS.`,
            `The project started by building a multi-page application using Next.js, which allowed for optimized routing and content delivery. TypeScript was integrated to help write more reliable code by enforcing strict type checks, significantly reducing bugs and improving overall code quality.`,
            `I used MUI for the front-end development to ensure the user interface is not only modern and responsive but also scalable. The components provided by MUI allowed me to focus on the application's logic rather than spending time on designing UI elements from scratch.`,
            `For hosting, I chose AWS EC2 instances. EC2 allows for flexible computing power that could be scaled up or down based on application demand. With Route 53, I mapped the domain to ensure easy management of DNS records. This, in combination with a Load Balancer, ensured that traffic was evenly distributed across servers, ensuring high availability and minimizing downtime.`,
            `Additionally, I set up a CI/CD pipeline to automate the deployment process. This pipeline streamlined updates and made sure the application was always in sync with the latest code changes without any manual intervention. Using tools like AWS CodePipeline and GitHub Actions made the process efficient and reliable.`,
            `Building a multi-page application using Next.js, TypeScript, MUI, and AWS has been an exciting journey. By leveraging the strengths of these tools, I was able to create a modern, scalable, and secure web application that meets the needs of both developers and end-users. With the CI/CD pipeline in place, I can deploy and manage the application efficiently, ensuring it remains up-to-date and performs well in production.`,
          ],
        },
      },
  ];
  const handleStepClick = (index) => {
    setBlogActiveStep(index === blogActiveStep ? -1 : index); // Toggle expand/collapse
  };
  const handleProjStepClick = (index) => {
    setProjectActiveStep(index === projectctiveStep ? -1 : index); // Toggle expand/collapse
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "250px",
        marginLeft: "45px",
        marginTop: "105px",
      }}
      className="row"
    >
      <Typography
        sx={{
          color: "white",
          fontSize: "36px",
          fontFamily: "500",
        }}
      >
        {`"Creativity is just connecting things. When you ask creative people how they did something, they feel guilty because they didn’t really do it—they just saw something."`}
      </Typography>
      <Typography
        sx={{
          color: "grey",
          fontSize: "26px",
          ml: "125px",
          mt: "25px",
        }}
      >
        - Steve Jobs
      </Typography>
      <div
        style={{
          marginTop: "45px",
        }}
      >
        <Tabs
          value={tabValue}
          onChange={(e, newValue) => setTabValue(newValue)}
          TabIndicatorProps={{
            style: {
              backgroundColor: "white", // Underline color for the selected tab
            },
          }}
        >
          <Tab
            label="Blogs"
            sx={{
              fontSize: "35px",
              fontWeight: "500",
              color: "white",
              "&:hover": {
                backgroundColor: "black",
                color: "white",
              },
              "&.Mui-selected": {
                backgroundColor: "grey",
                color: "white",
              },
              mr: 10,
            }}
          />
          <Tab
            label="Projects"
            sx={{
              fontSize: "35px",
              fontWeight: "500",
              color: "white",
              "&:hover": {
                backgroundColor: "black",
                color: "white",
              },
              "&.Mui-selected": {
                backgroundColor: "grey",
                color: "white",
              },
              mr: 10,
            }}
          />
        </Tabs>
      </div>
      <Divider
        sx={{ color: "white", backgroundColor: "white", marginTop: "15px" }}
      />
      <div className="row mt-5">
        <div className="col-lg-3 col-md-3">
          {tabValue == 0 ? (
            <Stepper
            activeStep={blogActiveStep}
            orientation="vertical"
            sx={{
              ".MuiStepConnector-line": {
                borderColor: "whitesmoke",
                borderWidth: "3px",
              },
              ".MuiStep-root": {
                mb: 4,
              },
            }}
          >
            {steps.map((elem, index) => (
              <Step key={elem.label}>
                <StepLabel
                  onClick={() => handleStepClick(index)} // Handle step click
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    cursor: "pointer",
                    fontSize: "1.5rem",
                    ".MuiStepIcon-root": {
                      width: "40px",
                      height: "40px",
                      backgroundColor:
                        index === blogActiveStep ? "black" : "white",
                      color: index === blogActiveStep ? "white" : "black",
                      borderRadius: "50%",
                      border: "2px solid black",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    },
                  }}
                >
                  <Typography sx={{ ml: 2, color: "white", fontSize: "35px" }}>
                    {elem.label}
                  </Typography>
                  <Typography sx={{ ml: 2, color: "white", fontSize: "20px" }}>
                    {elem?.time}
                  </Typography>
                </StepLabel>
              </Step>
            ))}
          </Stepper>
          ) : tabValue == 1 ? (
            <Stepper
            activeStep={projectctiveStep}
            orientation="vertical"
            sx={{
              ".MuiStepConnector-line": {
                borderColor: "whitesmoke",
                borderWidth: "3px",
              },
              ".MuiStep-root": {
                mb: 4,
              },
            }}
          >
            {projectSteps.map((elem, index) => (
              <Step key={elem.label}>
                <StepLabel
                  onClick={() => handleProjStepClick(index)} // Handle step click
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    cursor: "pointer",
                    fontSize: "1.5rem",
                    ".MuiStepIcon-root": {
                      width: "40px",
                      height: "40px",
                      backgroundColor:
                        index === projectctiveStep ? "black" : "white",
                      color: index === projectctiveStep ? "white" : "black",
                      borderRadius: "50%",
                      border: "2px solid black",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    },
                  }}
                >
                  <Typography sx={{ ml: 2, color: "white", fontSize: "35px" }}>
                    {elem.label}
                  </Typography>
                  <Typography sx={{ ml: 2, color: "white", fontSize: "20px" }}>
                    {elem?.time}
                  </Typography>
                </StepLabel>
              </Step>
            ))}
          </Stepper>
          ) : null}
        </div>
        <div className="col-lg-9 col-md-9">
          {tabValue == 0 ? (
            <div
              style={{
                border: "1px solid white",
                borderRadius: "8px",
                backgroundColor: "black",
                padding: "25px",
                opacity: "0.5",
              }}
            >
              <Typography
                sx={{
                  color: "white",
                  fontSize: "45px",
                }}
              >
                {steps[blogActiveStep]?.title}
              </Typography>
              <div
                style={{
                  overflow: "auto",
                  maxHeight: "700px",
                }}
              >
                {steps[blogActiveStep]?.blog?.paragraph?.map((elem) => {
                  return (
                    // eslint-disable-next-line react/jsx-key
                    <Typography
                      sx={{
                        color: "white",
                        marginTop: "15px",
                        fontSize: "25px",
                      }}
                    >
                      {elem}
                    </Typography>
                  );
                })}
              </div>
            </div>
          ) : tabValue == 1 ? (
            <div
              style={{
                border: "1px solid white",
                borderRadius: "8px",
                backgroundColor: "black",
                padding: "25px",
                opacity: "0.5",
              }}
            >
              <Typography
                sx={{
                  color: "white",
                  fontSize: "45px",
                }}
              >
                {projectSteps[projectctiveStep]?.title}
              </Typography>
              <div
                style={{
                  overflow: "auto",
                  maxHeight: "100%",
                }}
              >
                {steps[blogActiveStep]?.blog?.paragraph?.map((elem, index) => {
                  return (
                    <Typography
                      key={index}
                      sx={{
                        color: "white",
                        marginTop: "15px",
                        fontSize: "25px",
                      }}
                    >
                      {elem}
                    </Typography>
                  );
                })}
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
