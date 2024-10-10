import React from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";

import { Suspense, lazy } from "react";
const Profiler = lazy(() => import("../../../../pages/Profile/Profiler"));

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
function content() {
  return (
    <>
      <Grid container spacing={2} rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={12}>
          <Item>
            <Suspense fallback={<div>Please wait...</div>}>
              <Profiler />

            </Suspense>
          </Item>
        </Grid>
      </Grid>
    </>
  );
}

export default content;
