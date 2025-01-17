// 'use client';
// import { Typography } from "@mui/material";
// import React, { useEffect } from "react";
// import dynamic from "next/dynamic";
// import gsap from "gsap";

// // Dynamically import GSAP plugins
// const gsapPromise = import('gsap');
// const ScrollTriggerPromise = import('gsap/ScrollTrigger');

// const AnimationTestWrapper = () => {
//   useEffect(() => {
//     // Animation for Row 1 to Row 2 transition
//     gsap.timeline({
//       scrollTrigger: {
//         trigger: ".row-2",
//         start: "top bottom", // Start when row-2's top enters the bottom of the viewport
//         end: "top center",   // End when row-2's top reaches the center of the viewport
//         scrub: true,         // Smooth animation tied to scroll position
//       },
//     })
//     .fromTo(
//       ".row-1",
//       { y: 0, opacity: 1 },
//       { y: "-100%", opacity: 0, ease: "power1.out" }
//     )
//     .fromTo(
//       ".row-2",
//       { y: "100%", opacity: 0 },
//       { y: "0%", opacity: 1, ease: "power1.out" },
//       "<" // Start this animation at the same time as the previous one ends
//     );

//     // Animation for Row 2 to Row 3 transition
//     gsap.timeline({
//       scrollTrigger: {
//         trigger: ".row-3",
//         start: "top bottom", // Start when row-3's top enters the bottom of the viewport
//         end: "top center",   // End when row-3's top reaches the center of the viewport
//         scrub: true,         // Smooth animation tied to scroll position
//       },
//     })
//     .fromTo(
//       ".row-2",
//       { opacity: 1 },
//       { opacity: 0, ease: "power1.out" }
//     )
//     .fromTo(
//       ".row-3",
//       { x: "-100%", opacity: 0 },
//       { x: "0%", opacity: 1, ease: "power1.out" },
//       "<"
//     );
//   }, []);

//   return (
//     <div>
//       <div
//         className="row-1"
//         style={{
//           height: "100vh",
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//           backgroundColor: "yellow",
//         }}
//       >
//         <Typography
//           sx={{
//             color: "black",
//             fontSize: "85px",
//             fontWeight: "500",
//           }}
//         >
//           Section 1
//         </Typography>
//       </div>
//       <div
//         className="row row-2"
//         style={{
//           height: "100vh",
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//           backgroundColor: "black",
//         }}
//       >
//         <Typography
//           sx={{
//             color: "white",
//             fontSize: "85px",
//             fontWeight: "500",
//           }}
//         >
//           Section 2
//         </Typography>
//       </div>
//       <div
//         className="row row-3"
//         style={{
//           height: "100vh",
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//           backgroundColor: "green",
//         }}
//       >
//         <Typography
//           sx={{
//             color: "white",
//             fontSize: "85px",
//             fontWeight: "500",
//           }}
//         >
//           Section 3
//         </Typography>
//       </div>
//     </div>
//   );
// };

// const AnimationTest = () => {
//   return <AnimationTestWrapper />;
// };

// export default AnimationTest;
