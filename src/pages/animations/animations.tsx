import React from "react";
import { Grid } from "@mui/material";
import {
  AnimationTypeProps,
  AnimationSection,
} from "../../components/animation/animation";

function Animations() {
  const animations: AnimationTypeProps[] = [
    "keyFrames",
    "setInterval",
    "animationRAF",
  ];
  return (
    <Grid
      container
      spacing={2}
      p={1}
      sx={{
        justifyContent: "center",
        flexDirection: "column",
        margin: 0,
        alignItems: "center",
      }}
    >
      {animations.map((animation) => (
        <Grid item key={animation} sx={{ justifyContent: "center", mt: 3 }}>
          <AnimationSection id={animation} />
        </Grid>
      ))}
    </Grid>
  );
}

export default Animations;
