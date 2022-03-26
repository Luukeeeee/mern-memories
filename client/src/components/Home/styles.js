import { makeStyles, createStyles } from "@mui/styles";

export default makeStyles((theme) =>
  createStyles({
    [theme.breakpoints.down("sm")]: {
      mainContainer: {
        flexDirection: "column-reverse",
      },
    },
  })
);
