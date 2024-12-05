import React from "react";
import "./App.css";
import { Box, Typography } from "@mui/material";
import NavBar from "./components/NavBar";

function App() {
  return (
    <Box>
      <Box display={"flex"}>
        <Box
          sx={{
            width: "45%",
            height: "1368px",
            bgcolor: "black",
            position: "relative",
          }}
        >
          <Typography
            color={"white"}
            fontFamily={"Plusjakartasans, sans-serif"}
            fontWeight={"800"}
            fontSize={"8vw"}
            letterSpacing={"-4px"}
            position={"absolute"}
          >
            Unlock your business's full
            <span style={{ color: "yellow" }}> potential .</span>
          </Typography>
          <Box
            sx={{
              backgroundImage:
                "linear-gradient(270deg, yellow 40%, #98a30c 64%, black 89%)", // Gradient colors
              WebkitBackdropFilter: "blur(5px)", // Blur effect for Safari
              backdropFilter: "blur(5px)", // Blur effect for other browsers
              width: "810px", // Fixed width
              height: "144px", // Fixed height
              position: "absolute", // Absolute positioning
              inset: "auto 0% 0.3%", // Placement relative to container edges
              transform: "translate(-110px, -91px) rotate(-18deg)", // Translation and rotation
            }}
          />
        </Box>
        <Box
          sx={{
            position: "relative",
            overflow: "hidden",
            backgroundImage: `linear-gradient(#121a1f7d, #121a1f7d), url('https://cdn.prod.website-files.com/65b00de355f451f99469a575/65b03d58e6efd0c53e33e57d_pexels-fauxels-3184433%20(2).jpg')`,
            backgroundPosition: "0 0, 50%", // Gradient starts at the top-left, image is centered vertically
            //backgroundRepeat: "repeat, no-repeat", // Gradient repeats, image does not
            backgroundSize: "auto, cover", // Gradient keeps its size, image covers fully
            //alignItems: "flex-start", // Flex aligns items to the top
            width: "65%", // Full width of the container
            marginTop: "-30%", // Pushes the container up (based on original CSS)
            // paddingTop: "77%", // Aspect ratio for the box height
            // display: "flex", // Enables flexbox for alignment
          }}
        >
          <Box
            sx={{
              backdropFilter: "blur(5px)", // Applies the blur effect
              backgroundColor: "#31373ce6", // Semi-transparent background color
              width: "110%", // Fixed width
              height: "144px", // Fixed height
              position: "absolute", // Position relative to the parent container
              inset: "auto 0% 0%", // Places the box inside the container
              transform: "translate(-47px, -148px) rotate(-18deg)", // Applies translation and rotation
            }}
          />
        </Box>
      </Box>
    </Box>
  );
}

export default App;
