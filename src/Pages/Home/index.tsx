import { Grid } from "@mui/material";
import { CommentCard } from "../../Components";

type Props = {};

function Home({}: Props) {
  return (
    <Grid container item xs={12}>
      <Grid item xs={4}>
        <CommentCard />
      </Grid>
    </Grid>
  );
}

export default Home;
