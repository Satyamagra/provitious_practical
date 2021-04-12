import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";

import { SideBarData } from "./SideBarData";
import "./App.css";
import { NavLink, HashRouter, Switch, Route } from "react-router-dom";
import Data from "../Data";
import { Button, Container, Link, Typography } from "@material-ui/core";
import { MediaData } from "./SideBarData";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    backgroundColor: "faf7f8",
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
}));

export default function SideBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <div style={{ backgroundColor: "#faf7f8" }}>
        <Drawer
          className={classes.drawer}
          variant="permanent"
          classes={{
            paper: classes.drawerPaper,
          }}
          anchor="left"
        >
          <div
            spacing={6}
            style={{ backgroundColor: "#faf7f8", padding: "30px" }}
          >
            <center>
              <Typography variant="h6" style={{ fontSize: "30px" }}>
                LOGO
              </Typography>
            </center>
          </div>
          <center style={{ backgroundColor: "#faf7f8" }}>
            <Button
              variant="contained"
              style={{ borderRadius: "10px", backgroundColor: "#f54969" }}
            >
              <Typography
                className={classes.root}
                style={{
                  fontSize: "8px",
                  margin: "10px",
                  color: "#fdd2da",
                  textTransform: "capitalize",
                }}
              >
                <div
                  style={{
                    background: "#fb98a7",
                    borderRadius: "3px",
                    color: "white",
                    paddingLeft: "5px",
                    paddingRight: "5px",
                    marginRight: "6px",
                    fontWeight: "bold",
                  }}
                >
                  +
                </div>{" "}
                add new employess
              </Typography>{" "}
            </Button>
          </center>

          <Container spacing={2} style={{ backgroundColor: "#faf7f8" }}>
            <Typography
              style={{
                fontSize: "10px",
                marginTop: "18px",
                paddingLeft: "18px",
                fontWeight: "bold",
              }}
            >
              {"Menu"}
            </Typography>
            <div className="SideBar">
              <List className="SideBarData">
                {SideBarData.map((data, key) => {
                  return (
                    <Container>
                      <NavLink
                        to={data.link}
                        className="row"
                        style={{ textDecoration: "none" }}
                        activeStyle={{
                          fontWeight: "bold",
                          color: "black",
                          fontSize: "10px",
                          backgroundColor: "#fdd2da",
                          height: "35px",
                        }}
                      >
                        <div id="icon">{data.icon}</div>
                        <div id="title">{data.title}</div>
                      </NavLink>
                    </Container>
                  );
                })}
              </List>
            </div>
            <Divider />
          </Container>
          <Container spacing={2} style={{ backgroundColor: "#faf7f8" }}>
            <Typography
              style={{
                fontSize: "10px",
                marginTop: "10px",
                paddingLeft: "18px",
                fontWeight: "bold",
              }}
            >
              {"Media"}
            </Typography>
            <div className="SideBar">
              <List className="SideBarData">
                {MediaData.map((data, key) => {
                  return (
                    <Container>
                      <NavLink
                        to={data.link}
                        className="row"
                        style={{ textDecoration: "none" }}
                        activeStyle={{
                          fontWeight: "bold",
                          color: "black",
                          fontSize: "10px",
                          backgroundColor: "#fdd2da",
                          height: "35px",
                        }}
                      >
                        <div id="icon">{data.icon}</div>
                        <div id="title">{data.title}</div>
                      </NavLink>
                    </Container>
                  );
                })}
              </List>
            </div>
          </Container>
        </Drawer>
      </div>

      <main className={classes.content}>
        <Switch>
          <Route path="/table" component={Data} />
          {/* <Route path="/user/studentlist" component={StudentList} />
        <Route path="/user/studentSearch" component={StudentSearch} /> */}
        </Switch>
      </main>
    </div>
  );
}
