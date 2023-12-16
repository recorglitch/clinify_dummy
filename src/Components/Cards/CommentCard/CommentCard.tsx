import { Delete } from "@mui/icons-material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Avatar, Grid, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Collapse from "@mui/material/Collapse";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import { red } from "@mui/material/colors";
import { styled } from "@mui/material/styles";
import moment from "moment";
import * as React from "react";
import "./index.css";

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const dummy_data = [
  {
    userId: 1,
    userName: "John Smith",
    message: "This is another comment from John.",
    createdAt: "1642276781000",
  },
  {
    userId: 2,
    userName: "Jane Doe",
    message: "Testing out the comment section!",
    createdAt: "1642276843000",
  },
  {
    userId: 3,
    userName: "Bob Johnson",
    message: "I like the new update!",
    createdAt: "1642276905000",
  },
  {
    userId: 4,
    userName: "Alice Brown",
    message: "Keep up the good work!",
    createdAt: "1642276967000",
  },
  {
    userId: 5,
    userName: "Eva Green",
    message: "Greetings from Eva!",
    createdAt: "1642277029000",
  },
  {
    userId: 6,
    userName: "Charlie Wilson",
    message: "Nice feature addition!",
    createdAt: "1642277091000",
  },
];

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function CommentCard() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        // avatar={
        //   <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
        //     R
        //   </Avatar>
        // }
        action={
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
          // <IconButton aria-label="settings">
          //   <MoreVertIcon />
          // </IconButton>
        }
        title="Comments"
        titleTypographyProps={{ sx: { fontSize: "0.9rem" } }}
        // subheader={
        //   <div style={{ display: "flex", flexDirection: "column" }}>
        //     <Typography sx={{ fontSize: "0.8rem" }}>
        //       This is a comment
        //     </Typography>
        //     <Typography sx={{ fontSize: "0.7rem" }}>
        //       September 14, 2016
        //     </Typography>
        //   </div>
        // }
      />

      {/* <CardMedia
        component="img"
        height="194"
        image="/static/images/cards/paella.jpg"
        alt="Paella dish"
      /> */}

      {/* <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the
          mussels, if you like.
        </Typography>
      </CardContent> */}
      {/* <CardActions disableSpacing> */}
      {/* <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton> */}

      {/* </CardActions> */}
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Grid container item xs={12}>
            <Grid
              item
              xs={3}
              sx={{
                // border: "1px solid green",
                display: "flex",
                flex: "1",
                flexDirection: "column",
                justifyItems: "center",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  height: "100%",
                  marginBottom: "3rem",
                  width: "1px",
                  backgroundColor: "gray",
                }}
              />
            </Grid>
            <Grid item xs={9}>
              {dummy_data?.map((comment, idx) => {
                const formattedDate = moment(
                  Date.parse(comment.createdAt)
                ).format("MMMM D, YYYY");
                return (
                  <div
                    style={{
                      display: "flex",
                      position: "relative",
                      // border: "1px solid green",
                      flexDirection: "column",
                    }}
                  >
                    <div
                      className="bendDiv"
                      style={{
                        position: "absolute",
                        width: "20%",
                        height: "1px",
                        translate: "-2.35rem 3rem",
                      }}
                    />
                    <CardHeader
                      sx={{ maxHeight: "5rem" }}
                      avatar={
                        <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                          {comment.userName.slice(0, 1)}
                        </Avatar>
                      }
                      title={comment.userName}
                      titleTypographyProps={{ sx: { fontSize: "0.9rem" } }}
                      subheader={
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "0.2rem",
                          }}
                        >
                          <Typography sx={{ fontSize: "0.6rem" }}>
                            September 14, 2016
                          </Typography>
                          <Typography sx={{ fontSize: "0.8rem" }}>
                            {comment.message}
                          </Typography>
                        </div>
                      }
                      // action={
                      //   <IconButton aria-label="settings">
                      //     <Delete />
                      //   </IconButton>
                      // }
                    ></CardHeader>
                    {idx < dummy_data.length - 1 && (
                      <div
                        style={{
                          height: "1px",
                          width: "80%",
                          backgroundColor: "gray",
                          alignSelf: "center",
                        }}
                      />
                    )}
                  </div>
                );
              })}
            </Grid>
          </Grid>
        </CardContent>
      </Collapse>
    </Card>
  );
}
