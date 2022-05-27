import * as React from "react";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Avatar, AvatarGroup, Stack } from "@mui/material";
import { Box } from "@mui/system";
import CustomizedProgressBars from "./CustomizedProgressBars";

const CardItem = ({ campaign }) => {
  return (
    <Card sx={{ borderRadius: 3, padding: "0.5rem" }} elevation={0}>
      <CardContent>
        <Box sx={{ display: "flex", mb: "1rem" }}>
          <CardMedia
            component="img"
            image="https://cdn.vox-cdn.com/thumbor/9j-s_MPUfWM4bWdZfPqxBxGkvlw=/1400x1050/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/22312759/rickroll_4k.jpg"
            alt="green iguana"
            sx={{ maxWidth: 80, borderRadius: 2 }}
          />
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
              mx: 1,
            }}
          >
            <Box>
              <Box>
                <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                  {campaign.campName}
                </Typography>
              </Box>

              <Box>
                <Typography variant="caption" display="block" gutterBottom>
                  Campaign ID: {campaign.campId}
                </Typography>
              </Box>

              <Box>
                <Box>
                  <Box
                    component="div"
                    sx={{
                      display: "inline",
                      border: "1.2px solid gray",
                      borderRadius: 1,
                      p: "2px",
                      fontSize: "0.65rem",
                    }}
                  >
                    {campaign.type}
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Paper elevation={1} sx={{ p: 1, borderRadius: 2 }}>
                <Typography sx={{ fontWeight: "200" }}>End Date</Typography>
                <Typography sx={{ fontWeight: "600" }}>
                  June 12, 2022
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper elevation={1} sx={{ p: 1, borderRadius: 2 }}>
                <Typography sx={{ fontWeight: "200" }}>Budget</Typography>
                <Typography sx={{ fontWeight: "600" }}>P 120,000</Typography>
              </Paper>
            </Grid>
          </Grid>
        </Box>
        <Box mt={3}>
          <CustomizedProgressBars />
          <Box sx={{ display: "flex", flexDirection: "row-reverse" }}>
            <Typography variant="caption">Campaign Target</Typography>
          </Box>
        </Box>
        <Box mt={3} sx={{ display: "flex", justifyContent: "space-between" }}>
          <AvatarGroup max={4}>
            <Avatar
              alt="Remy Sharp"
              src="https://images.unsplash.com/photo-1566753323558-f4e0952af115?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1021&q=80"
            />
            <Avatar
              alt="Travis Howard"
              src="https://images.unsplash.com/photo-1541855492-581f618f69a0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bWFsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60"
            />
            <Avatar
              alt="Cindy Baker"
              src="https://images.unsplash.com/photo-1525457136159-8878648a7ad0?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687"
            />
            <Avatar
              alt="Agnes Walker"
              src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
            />
            <Avatar
              alt="Trevor Henderson"
              src="https://images.unsplash.com/photo-1581382575275-97901c2635b7?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687"
            />
          </AvatarGroup>
          <Button
            variant="contained"
            color="secondary"
            size="small"
            disableElevation
          >
            View Campaign
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default CardItem;
