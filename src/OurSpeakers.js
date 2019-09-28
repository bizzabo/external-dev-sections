/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import map from "lodash/map";
import cx from "classnames";

import styles from "./styles/our-speakers.module.scss";


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
]
  
const OurSpeakers = props => {
  return (
    <div className={styles.ourSpeakers}>
      <h1 className={cx('padding-vertical-large text-center', styles.speakersHeading)}>
        OUR SPEAKERS
      </h1>
      <div className={styles.gallery}>         
        {map(speakersData, (speaker) => (
          <div className={styles.column}>
            <h4 className={styles.peopleHeading}>{speaker.name}</h4>
            <div className={styles.imageContainer}>
              <img src={speaker.imageUrl} alt="img" className={styles.image}/>
              <div className={styles.horizontalLine} />
            </div>
            <div className={styles.itemFooter}>
              <div className={styles.speakerInfo}>
                <span className={styles.speakerDesignation}>{speaker.designation}</span>
                <span className={styles.speakerLocation}>{speaker.location}</span>
              </div>
              <div className={styles.socialIcons}>
                <a className={styles.socialLink} href={speaker.linkedinUrl}><i className="fa fa-linkedin"></i>
                </a>
                <a className={styles.socialLink} href={speaker.twitterUrl}><i className="fa fa-twitter"></i>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurSpeakers;
