import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: theme.spacing(1.25),
  },
  divider: {
    margin: theme.spacing(0, -2),
  },
  checkOutButton: {
    marginTop: theme.spacing(2),
    fontWeight: 600,
    height: theme.spacing(6),
  },
  imageContainer: {
    textAlign: "center",
  },
  image: {
    height: 180,
    borderRadius: theme.spacing(0.5),
    marginBottom: theme.spacing(1),
  },
  itemButton: {
    margin: theme.spacing(0, 1),

    "& input": {
      textAlign: "center",
      padding: "10px 14px",
      fontWeight: 600,
    },
    maxWidth: 48,
    height: 8,
  },
  detailsRight: {
    textAlign: "right",
  },
}));
