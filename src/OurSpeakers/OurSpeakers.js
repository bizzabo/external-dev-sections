/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import map from "lodash/map";
import cx from "classnames";

import { createUseStyles } from "react-jss";

import SpeakerBox from "./SpeakerBox";

const speakersData = [
  {
    name: "NELL FARMER",
    imageUrl: "https://i.pravatar.cc/300",
    designation: "UI/UX Expert",
    location: "Grey Fade",
    linkedinUrl: "https://linkedin.com",
    twitterUrl: "https://twitter.com"
  },
  {
    name: "NELL FARMER 1",
    imageUrl: "https://i.pravatar.cc/300",
    designation: "UI/UX Expert",
    location: "Grey Fade",
    linkedinUrl: "https://linkedin.com",
    twitterUrl: "https://twitter.com"
  },
  {
    name: "NELL FARMER 2",
    imageUrl: "https://i.pravatar.cc/300",
    designation: "UI/UX Expert",
    location: "Grey Fade",
    linkedinUrl: "https://linkedin.com",
    twitterUrl: "https://twitter.com"
  },
  {
    name: "NELL FARMER 3",
    imageUrl: "https://i.pravatar.cc/300",
    designation: "UI/UX Expert",
    location: "Grey Fade",
    linkedinUrl: "https://linkedin.com",
    twitterUrl: "https://twitter.com"
  },
  {
    name: "NELL FARMER 4",
    imageUrl: "https://i.pravatar.cc/300",
    designation: "UI/UX Expert",
    location: "Grey Fade",
    linkedinUrl: "https://linkedin.com",
    twitterUrl: "https://twitter.com"
  },
  {
    name: "NELL FARMER 5",
    imageUrl: "https://i.pravatar.cc/300",
    designation: "UI/UX Expert",
    location: "Grey Fade",
    linkedinUrl: "https://linkedin.com",
    twitterUrl: "https://twitter.com"
  },
  {
    name: "NELL FARMER 6",
    imageUrl: "https://i.pravatar.cc/300",
    designation: "UI/UX Expert",
    location: "Grey Fade",
    linkedinUrl: "https://linkedin.com",
    twitterUrl: "https://twitter.com"
  },
  {
    name: "NELL FARMER 7",
    imageUrl: "https://i.pravatar.cc/300",
    designation: "UI/UX Expert",
    location: "Grey Fade",
    linkedinUrl: "https://linkedin.com",
    twitterUrl: "https://twitter.com"
  },
  {
    name: "NELL FARMER 8",
    imageUrl: "https://i.pravatar.cc/300",
    designation: "UI/UX Expert",
    location: "Grey Fade",
    linkedinUrl: "https://linkedin.com",
    twitterUrl: "https://twitter.com"
  }
];

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