import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import FilterListIcon from "@material-ui/icons/FilterList";
import ShowChartIcon from "@material-ui/icons/ShowChart";
import NotificationsIcon from "@material-ui/icons/Notifications";
import SearchIcon from "@material-ui/icons/Search";
import AcUnitIcon from "@material-ui/icons/AcUnit";

import "./index.css";
import {
  Button,
  Container,
  Grid,
  InputBase,
  TextField,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
    backgroundColor: "#fbfbfb",
    borderBottom: "1px solid #ddd",
  },
  root: {
    display: "flex",
  },
  tab_bo: {
    fontSize: 10,
    fontWeight: 500,
    color: "#4a4e5b",
    textTransform: "capitalize",
    backgroundColor: "transparent",
  },
  ima_st: {
    borderRadius: 4,
    marginRight: 8,
    height: 20,
    width: 20,
    alt: "none",
    // src="image.jpg"
  },
  tab_col: {
    color: "#81848d",
    fontSize: 10,
  },
  pad_15: {
    paddingBottom: "15px",
    paddingTop: "15px",
  },
  padd_15_back: {
    padding: "15px",
    // backgroundColor: "#f8f6f6",
    // backgroundColor: "red",
    borderRadius: "12px",
  },
  img_dash: {
    padding: "4px",
    width: "50px",
    height: "50px",
    marginRight: "8px",
    borderRadius: "12px",
  },
  search: {
    marginLeft: 0,
    width: "100%",
    display: "flex",
    backgroundColor: "#f8f6f6",
    borderRadius: "8px",
    height: "46px",
  },
  searchIcon: {
    paddingTop: "10px",
  },
});

function createData(name, email, number, salary, address, action) {
  return { name, email, number, salary, address, action };
}

const rows = [
  createData(
    "Satyam Agarwal",
    "satyamagarwal08@gmail.com",
    +91 - 8279356411,
    5000,
    "sikandra,Agra",
    "action"
  ),
  createData(
    "Satyam Agarwal",
    "satyamagarwal08@gmail.com",
    "+91-8279356411",
    5000,
    "Sikandra Agra",
    "action"
  ),
  createData(
    "Satyam Agarwal",
    "satyamagarwal08@gmail.com",
    +91 - 8279356411,
    5000,
    "Sikandra Agra",
    "action"
  ),
  createData(
    "Satyam Agarwal",
    "satyamagarwal08@gmail.com",
    +91 - 8279356411,
    5000,
    "Sikandra Agra",
    "action"
  ),
  createData(
    "Satyam Agarwal",
    "satyamagarwal08@gmail.com",
    +91 - 8279356411,
    5000,
    "Sikandra Agra",
    "action"
  ),
  createData(
    "Satyam Agarwal",
    "satyamagarwal08@gmail.com",
    +91 - 8279356411,
    5000,
    "Sikandra Agra",
    "action"
  ),
];

export default function Data() {
  const classes = useStyles();

  return (
    <div>
      <Grid container>
        <Grid
          item
          xs={6}
          spacing={2}
          className={classes.pad_15}
          style={{ fontWeight: "bold", fontSize: "25px" }}
        >
          {/* <h2 style={{ display: "flex" }}>  */}
          {"Employees"}
          {/* </h2> */}
        </Grid>

        <Grid
          item
          xs={4}
          align="right"
          style={{ width: "10px", height: "10px" }}
        >
          {/* <TextField
            fullWidth
            id="outlined-basic"
            label="search"
            variant="outlined"
            placeholder="search"
            height="10px"
            style={{ backgroundColor: "#f8f6f6" }}
          >
            {" "}
            <SearchIcon />
          </TextField> */}
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              fullWidth
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </div>
        </Grid>
        <Grid item xs={1} align="center" className={classes.padd_15_back}>
          <NotificationsIcon fontSize="small" />
        </Grid>
        <Grid item xs={1} align="right">
          <img src="image.jpg" className={classes.img_dash} />
        </Grid>
      </Grid>

      <div style={{ paddingBottom: "5px", paddingTop: "15px" }}>
        <Grid container>
          <Grid
            item
            xs={6}
            spacing={2}
            style={{ fontWeight: "600", fontSize: "20px" }}
          >
            {"12345 Employees"}
          </Grid>
          <Grid item xs={2} align="right"></Grid>
          <Grid item xs={2} align="right" style={{ padding: "7px" }}>
            <Button
              variant="contained"
              size="large"
              style={{
                borderRadius: "10px",
                backgroundColor: "#f54969",
                // padding: "4px",
              }}
            >
              <Typography
                className={classes.root}
                style={{
                  fontSize: "9px",
                  color: "#fdd2da",
                  paddingTop: "6px",
                  paddingBottom: "6px",
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
                  +{" "}
                </div>
                add employess
              </Typography>{" "}
            </Button>
          </Grid>

          <Grid
            item
            xs={1}
            spacing={2}
            align="center"
            className={classes.padd_15_back}
          >
            <ShowChartIcon fontSize="medium"></ShowChartIcon>
          </Grid>
          <Grid item xs={1} align="center" className={classes.padd_15_back}>
            <FilterListIcon fontSize="medium"></FilterListIcon>
          </Grid>
        </Grid>
      </div>
      <TableContainer>
        <Table className={classes.table} aria-label="caption table">
          <TableHead>
            <TableRow>
              <TableCell className={classes.tab_col}>Name</TableCell>
              <TableCell className={classes.tab_col} align="left">
                Email
              </TableCell>
              <TableCell className={classes.tab_col} align="left">
                Mobile Number
              </TableCell>
              <TableCell className={classes.tab_col} align="left">
                Salary
              </TableCell>
              <TableCell className={classes.tab_col} align="left">
                Address
              </TableCell>
              <TableCell className={classes.tab_col} align="center">
                Action
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody style={{ fontSize: "10px", fontWeight: "Bold" }}>
            {rows.map((row) => (
              <TableRow key={row.name}>
                <TableCell
                  component="th"
                  scope="row"
                  className={classes.tab_bo}
                  // style={{ alignItems: "center" }}
                >
                  <img src="image.jpg" className={classes.ima_st} />
                  {row.name}
                </TableCell>
                <TableCell align="left" className={classes.tab_bo}>
                  {row.email}
                </TableCell>
                <TableCell align="left" className={classes.tab_bo}>
                  {row.number}
                </TableCell>
                <TableCell align="left" className={classes.tab_bo}>
                  {row.salary}
                </TableCell>
                <TableCell align="left" className={classes.tab_bo}>
                  {row.address}
                </TableCell>
                <TableCell align="right" className={classes.tab_bo}>
                  <EditIcon
                    style={{ color: "#8867fd", marginRight: "20px" }}
                    fontSize="small"
                  ></EditIcon>

                  <DeleteIcon
                    style={{ color: "#f34467" }}
                    fontSize="small"
                  ></DeleteIcon>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
