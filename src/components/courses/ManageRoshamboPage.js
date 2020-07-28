import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { showNewGameResults } from "../../redux/actions/resultsActions";

import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

import { bindActionCreators } from "redux";
import sendResult from "../../api/resultsApi";

import Weapon from "./weapon";
import lizard from "../../images/lizard.png";
import scissors from "../../images/scissors.png";
import paper from "../../images/paper.png";
import spock from "../../images/spock.png";
import rock from "../../images/rock.png";
import choose from "../../images/choose.png";
import computer from "../../images/choose.png";

import "./App.css";
import { css } from "@emotion/core";
import RingLoader from "react-spinners/RingLoader";

const weaponImages = {
  lizard,
  scissors,
  paper,
  spock,
  rock,
  choose,
  computer,
};

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

export default function AutoGrid({ handleSelect, winner, arsenal }) {
  const dispatch = useDispatch();
  const [selectedWeapon, setSelectedWeapon] = React.useState(choose);
  const [selectedWeaponText, setSelectedWeaponText] = React.useState("choose");
  const computerSelectedWeaponText = useSelector(
    (state) => state.results.computerResult
  );
  const computerSelectedWeapon =
    weaponImages[computerSelectedWeaponText.toLowerCase()];

  const resultsOutput = useSelector((state) => state.results.gameResult);
  const winsOutput = useSelector((state) => state.results.Wins);
  const loseOutput = useSelector((state) => state.results.Lose);
  const tieOutput = useSelector((state) => state.results.Tie);

  const loadingStyle = useSelector((state) => state.results.loading);

  const runGame = (
    setSelectedWeaponArg,
    setSelectedWeaponTextArg,
    sendResultArg,
    settingSelectedWeaponFunction
  ) => {
    // update the computer weapon via useState
    settingSelectedWeaponFunction(setSelectedWeaponArg);
    setSelectedWeaponText(setSelectedWeaponTextArg);
    dispatch(showNewGameResults(sendResultArg));
  };

  const selectedOption = (selecedOption) => {
    console.log(selecedOption);
  };

  // Can be a string as well. Need to ensure each key-value pair ends with ;
  const override = css`
    width: 150px;
    height: 0px;
    display: flex;
    margin: 0 auto;
    border-color: red;
  `;

  class AwesomeComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        loading: true,
      };
    }
  }

  const styleLoading = () => {};

  const pickFunction = (choice) => {};
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div id="Loading">
        <RingLoader
          css={override}
          size={150}
          style={styleLoading}
          loading={loadingStyle}
        ></RingLoader>
      </div>
      <Grid container>
        <Grid item className="moveLogo" xs={5}>
          <Weapon weapon={selectedWeapon} src={scissors} />
          <div id="playerStatus">{selectedWeaponText}</div>
        </Grid>
        <Grid item className="status" xs={2}>
          <div className="container" id="statsContainer">
            <div id="winsLabel">
              Wins:<div id="wins">{winsOutput}</div>
            </div>
            <div id="LoseLabel">
              Lose:<div id="lose">{loseOutput}</div>
            </div>
            <div id="TieLabel">
              Draw:<div id="tie">{tieOutput}</div>
            </div>
          </div>
        </Grid>
        <Grid item className="moveLogo" xs={5}>
          <Weapon weapon={computerSelectedWeapon} />
          <div id="ComputerPlayerStatus">{computerSelectedWeaponText}</div>
        </Grid>
      </Grid>

      <Grid item container className="instructionsGrid" xs={12}>
        <div id="instructions">
          {selectedWeaponText} Vs. {computerSelectedWeaponText}
        </div>
        <div id="outcome">{resultsOutput}</div>
      </Grid>

      <Grid container spacing={3}>
        <Grid item xs={1}></Grid>
        <Grid item xs={2}>
          <Paper>
            <button
              onClick={() => {
                runGame(paper, "Paper", 1, setSelectedWeapon);
              }}
              className={classes.paper}
            >
              <img src={paper} className="choices" alt="Logo" />
            </button>
          </Paper>
        </Grid>
        <Grid item xs={2}>
          <Paper>
            <button
              onClick={() => {
                runGame(rock, "Rock", 2, setSelectedWeapon);
              }}
              className={classes.paper}
            >
              <img src={rock} className="choices" alt="Logo" />
            </button>
          </Paper>
        </Grid>
        <Grid item xs={2}>
          <Paper>
            <button
              onClick={() => {
                runGame(scissors, "Scissors", 3, setSelectedWeapon);
              }}
              className={classes.paper}
            >
              <img src={scissors} className="choices" alt="Logo" />
            </button>
          </Paper>
        </Grid>
        <Grid item xs={2}>
          <Paper>
            <button
              onClick={() => {
                runGame(lizard, "Lizard", 4, setSelectedWeapon);
              }}
              className={classes.paper}
            >
              <img src={lizard} className="choices" alt="Logo" />
            </button>
          </Paper>
        </Grid>
        <Grid item xs={2}>
          <Paper>
            <button
              onClick={() => {
                runGame(spock, "Spock", 5, setSelectedWeapon);
              }}
              className={classes.paper}
            >
              <img src={spock} className="choices" alt="Logo" />
            </button>
          </Paper>
        </Grid>

        <Grid item xs={1}></Grid>
      </Grid>
    </div>
  );
}
