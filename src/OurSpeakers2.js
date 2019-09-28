/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import cx from "classnames";

import { createUseStyles } from "react-jss";

import SpeakerBox from "./components/OurSpeakers/SpeakerBox";

import { speakersData } from "./data/speakersData";

const OurSpeakers = props => {
  const classes = useStyles();
  return (
    <div>
      <h1
        className={cx(
          "padding-vertical-large text-center",
          classes.speakersHeading
        )}
      >
        our speakers
      </h1>
      <SpeakerBox speakerList={speakersData} />
    </div>
  );
};

const useStyles = createUseStyles({
  speakersHeading: {
    color: " #7156DD",
    fontSize: "48px !important",
    textTransform: "uppercase"
  }
});

export default OurSpeakers;
