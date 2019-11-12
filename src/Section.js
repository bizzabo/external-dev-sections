/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { createUseStyles } from "react-jss";
import classnames from "classnames";
import classes from "*.module.sass";
const useStyles = createUseStyles({
  gravatar: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    height: "50%",
    color: "white",
    margin: "auto",
    transform: "translate(0, -10%)",
    fontSize: 70
  },
  contactInfoContainer: {
    paddingTop: 8,
    color: "#000",
    "& .contact-fullname": {
      fontSize: "1rem",
      fontWeight: "bold"
    },
    "& .contact-title": {
      fontSize: "0.8rem"
    },
    "& .contact-company": {
      fontSize: "0.8rem",
      fontWeight: "bold"
    }
  }
});
export default ({ section }) => {
  const { elements: [header, people] = [] } = section;
  const { text, rootKey } = header;
  const { contacts, contactListId } = people;
  console.log(section);
  return (
    <div className="atom-sectionMain row">
      <div className="col-xs-12 text-center attendees-faces contacts-element">
        <div className="main-app-container  ">
          <div
            className={`col-xs-12 text-center form-group element-${rootKey}`}
          >
            <h2 className="atom-main medium custom-font">{text}</h2>
          </div>
          <div className="col-xs-12 text-center attendees-faces-holder">
            <div className="row js-contacts-element">
              {contactListId ? (
                contacts.map(contact => (
                  <Contact
                    key={contact.id}
                    rootKey={people.rootKey}
                    contact={contact}
                  />
                ))
              ) : (
                <div className="attendees-empty">
                  <img
                    src="https://events.bizzabo.com/scripts/web-common/editor-templates/images/urban/attendees_empty.png"
                    alt="no attendees"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

function Contact({ contact, rootKey }) {
  const {
    id,
    thumbnailUrl,
    firstName,
    lastName,
    speakerId,
    facebookPage,
    linkedinPage,
    twitter,
    title,
    company
  } = contact;
  return (
    <div className="col-md-3 col-sm-6 col-xs-12 entity-photo-holder">
      <div className={`element-${rootKey}`}>
        {speakerId ? (
          <a href={`/5794/agenda/speakers/${speakerId}`}>
            <ContactImage {...{ firstName, lastName, thumbnailUrl, rootKey }} />
          </a>
        ) : (
          <div className="make-relative">
            <ContactImage {...{ firstName, lastName, thumbnailUrl, rootKey }} />
          </div>
        )}
      </div>

      <ContactInfo {...{ firstName, lastName, rootKey, title, company }} />

      <ContactSocial {...{ facebookPage, linkedinPage, twitter, rootKey }} />
    </div>
  );
}
function ContactInfo({ rootKey, firstName, lastName, title, company }) {
  const classes = useStyles();
  return (
    <div
      className={classnames(`element-${rootKey}`, classes.contactInfoContainer)}
    >
      <div className="atom-text1 contact-fullname">
        {`${firstName} ${lastName}`}
      </div>
      <div className="atom-text2  contact-title">{title}</div>
      <div className="atom-text3  contact-company">{company}</div>
    </div>
  );
}
const ContactImage = props => {
  const { firstName, lastName, thumbnailUrl } = props;
  const classes = useStyles();
  let retVal = null;

  if (thumbnailUrl) {
    retVal = <img src={thumbnailUrl} className="center-block" alt="speaker" />;
  } else {
    retVal = (
      <>
        <img
          src="https://events.bizzabo.com/images/home/empty_placeholder.png"
          className="img-responsive  center-block"
          alt="placeholder"
        />
        <div className={classes.gravatar}>
          {firstName.charAt(0).toUpperCase()}
          {lastName.charAt(0).toUpperCase()}
        </div>
      </>
    );
  }

  return retVal;
};
function ContactSocial({ facebookPage, linkedinPage, twitter }) {
  return (
    <div className={classes.socialLinks}>
      <a href={facebookPage} target="_blank" rel="noopener noreferrer">
        <i className="speaker-icon fa icon-facebook" />
      </a>

      <a href={linkedinPage} target="_blank" rel="noopener noreferrer">
        <i className="speaker-icon fa icon-linkedin" />
      </a>

      <a
        href={`https://twitter.com/${twitter}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="speaker-icon fa icon-twitter" />
      </a>
    </div>
  );
}
