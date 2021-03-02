import React from "react";
import clsx from "clsx";
import {
  Typography,
  CssBaseline,
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  Container,
  Grid,
  Drawer,
  Divider,
  ListItem,
  ListItemIcon,
  ListItemText,
  Button,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import NotificationsIcon from "@material-ui/icons/Notifications";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import DashboardIcon from "@material-ui/icons/Dashboard";
import { useHistory } from "react-router-dom";
import styles from "./style";
import { useSelector } from "react-redux";
import { ExitToApp } from "@material-ui/icons";

const Layout = (props) => {
  const { cart } = useSelector((state) => state);
  const { children, title } = props;
  const classes = styles();
  const [open, setOpen] = React.useState(false);
  const history = useHistory();

  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const logOut = () => {
    localStorage.removeItem("isAuthenticated");
    history.push("/login");
  };

  const auth = localStorage.getItem("isAuthenticated");

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="absolute"
        className={clsx(classes.appBar, open && classes.appBarShift)}
      >
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={clsx(
              classes.menuButton,
              open && classes.menuButtonHidden
            )}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            component="h1"
            variant="h6"
            color="inherit"
            noWrap
            className={classes.title}
          >
            {title}
          </Typography>
          {auth && <Typography>Hi, {auth}</Typography>}
          <IconButton color="inherit">
            <Badge
              onClick={() => history.push("/cart")}
              badgeContent={cart.data.length}
              color="secondary"
            >
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
          {auth ? (
            <IconButton onClick={logOut} color="inherit">
              <ExitToApp />
            </IconButton>
          ) : (
            <Button color = "default" variant="contained" onClick={() => history.push("/login")}>
              Login
            </Button>
          )}
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
      >
        <div className={classes.toolbarIcon}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <div>
          <ListItem button onClick={() => history.push("/")}>
            <ListItemIcon>
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItem>
          <ListItem button onClick={() => history.push("/cart")}>
            <ListItemIcon>
              <ShoppingCartIcon />
            </ListItemIcon>
            <ListItemText primary="My Cart" />
          </ListItem>
        </div>
        <Divider />
      </Drawer>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              {children}
            </Grid>
          </Grid>
        </Container>
      </main>
    </div>
  );
};

export default Layout;
