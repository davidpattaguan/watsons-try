import React from "react";
import camps from "../db/dummy";
import CardItem from "./CardItem";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";

const CardsList = () => {
  return (
    <Container>
      <Grid container spacing={3} mt={1}>
        {camps.map((campaign) => {
          return (
            <Grid item sm={4} xs={12}>
              <CardItem campaign={campaign} key={campaign.campId} />
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};

export default CardsList;
