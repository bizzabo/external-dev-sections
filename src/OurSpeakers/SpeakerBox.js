import React from "react";

import { createUseStyles } from "react-jss";

import ImageBox from "./ImageBox";
import SocialBox from "./SocialBox";
import InfoBox from "./InfoBox";

const SpeakerBox = ({ speaker }) => {
  const classes = useStyles();

  return (
    <div className={classes.column}>
      <h4 className={classes.peopleHeading}>{speaker.name}</h4>
      <ImageBox imageUrl={speaker.imageUrl} />
      <div className={classes.itemFooter}>
        <InfoBox
          designation={speaker.designation}
          location={speaker.location}
        />
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
  "@media (min-width: 800px)": {
    column: {
      flex: "50 %",
      maxWidth: "50%"
    }
  }
});

export default SpeakerBox;
