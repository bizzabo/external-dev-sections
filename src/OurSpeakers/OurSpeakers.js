/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

import map from "lodash/map";
import cx from "classnames";

import { createUseStyles } from "react-jss";

import SpeakerBox from "./SpeakerBox";

import { speakersData } from "./speakersData";

const OurSpeakers = props => {
  const classes = useStyles();
  return (
    <div>
      <h1
        className={cx("padding-vertical-large text-center", classes.myButton)}
      >
        OUR SPEAKERS
      </h1>
      <div className={classes.gallery}>
        {map(speakersData, speaker => (
          <SpeakerBox key={speaker.name} speaker={speaker} />
        ))}
      </div>
    </div>
  );
};

const useStyles = createUseStyles({
  speakersHeading: {
    color: " #7156DD",
    fontSize: "48px !important"
  },
  gallery: {
    backgroundColor: "#7156DD",
    padding: "120px 10%",
    margin: "0 10%",
    display: "flex",
    flexWrap: "wrap",
    alignContent: "space-around",
    justifyContent: "center"
  },
  "@media (min-width: 800px)": {
    backgroundColor: "#7156DD",
    padding: "120px 0",
    margin: 0
  }
});

export default OurSpeakers;
