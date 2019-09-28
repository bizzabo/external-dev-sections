import React from "react";

import { createUseStyles } from "react-jss";

import ImageBox from "./ImageBox";
import SocialBox from "./SocialBox";

const SpeakerBox = ({ speaker }) => {
  const classes = useStyles();

  return (
    <div className={classes.column}>
      <h4 className={classes.peopleHeading}>{speaker.name}</h4>
      <ImageBox imageUrl={speaker.imageUrl} />
      <div className={classes.itemFooter}>
        <div className={classes.speakerInfo}>
          <span className={classes.speakerDesignation}>
            {speaker.designation}
          </span>
          <span className={classes.speakerLocation}>{speaker.location}</span>
        </div>
        <SocialBox
          linkedinUrl={speaker.linkedinUrl}
          twitterUrl={speaker.linkedinUrl}
        />
      </div>
    </div>
  );
};

const useStyles = createUseStyles({
  column: {
    width: "230px",
    margin: "0 24px 48px 24px",
    position: "relative"
  },
  peopleHeading: {
    color: "#ffffff"
  },
  itemFooter: {
    display: "flex",
    justifyContent: "space-between",
    alignIitems: "center",
    margin: "6px 0",
    paddingLeft: "2px"
  },
  speakerInfo: {
    display: "flex",
    flexDirection: "column"
  },
  speakerDesignation: {
    color: "#ffffff",
    fontWeight: 600,
    margin: 0
  },
  speakerLocation: {
    color: " #ffffff",
    margin: 0
  },
  socialIcons: {
    color: "#ffffff",
    display: "flex",
    width: "60px",
    justifyContent: "space-between",
    fontSize: "24px"
  },
  socialLink: {
    color: "#ffffff"
  },
  "@media (min-width: 800px)": {
    column: {
      flex: "50 %",
      maxWidth: "50%"
    }
  }
});

export default SpeakerBox;
