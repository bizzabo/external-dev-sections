import React from "react";

import { createUseStyles } from "react-jss";

const SpeakerBox = ({ speaker }) => {
  const classes = useStyles();

  return (
    <div className={classes.column}>
      <h4 className={classes.peopleHeading}>{speaker.name}</h4>
      <div className={classes.imageContainer}>
        <img
          src={speaker.imageUrl}
          alt="img"
          className={classes.imageContainer.image}
        />
        <div className={classes.horizontalLine} />
      </div>
      <div className={classes.itemFooter}>
        <div className={classes.speakerInfo}>
          <span className={classes.speakerDesignation}>
            {speaker.designation}
          </span>
          <span className={classes.speakerLocation}>{speaker.location}</span>
        </div>
        <div className={classes.socialIcons}>
          <a className={classes.socialLink} href={speaker.linkedinUrl}>
            <i className="fa fa-linkedin"></i>
          </a>
          <a className={classes.socialLink} href={speaker.twitterUrl}>
            <i className="fa fa-twitter"></i>
          </a>
        </div>
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
  imageContainer: {
    position: "relative",
    image: {
      width: "100 %"
    }
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
  }
});

export default SpeakerBox;
