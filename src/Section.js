/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

const Section = props => {
    const {section} = props;
    return (
      <div className="rowHolder element-1469903 atom-sectionSecondary cover-photo-background custom-space-top custom-space-bottom" style={{backgroundImage: 'url("https://res.cloudinary.com/bizzaboprod/image/upload/v1419411425/SplitShire-7662_eqi7sf")'}}>
        <div className="atom-sectionMain main-app-container header business">
          <div className="row">
            <div className="business-logo-holder">
              <div className="col-xs-12 business-event-image-holder">
                <img className="center-image" alt="event logo"/>
              </div>
            </div>
            <div className="element-1469900 col-xs-12 col-sm-10 col-sm-offset-1 business-event-name-holder text-center">
              <h1 className="atom-main custom-font business">Example Header Section</h1>
            </div>
            <div className="business-venue-holder col-xs-12 text-center form-group">
              <div className="row">
                <div className="col-xs-12 form-group">
                  <div className="row">
                    <div className="element-1469901 col-xs-12 text-center">
                      <span className="atom-main">
                        <i className="fa icon-event"></i>
                        <span className="date-venue-holder custom-font ">May 7th, 2020</span>
                      </span>
                    </div>
                    <div className="col-xs-12 text-center">
                      <div className="custom-color color-2 custom-font element-1469905">
                        <span className="extra-text-holder atom-header1">United States</span>
                      </div>
                    </div>
                    <div className="col-xs-12 text-center">
                      <div className="custom-color color-2 custom-font element-1469905">
                        <span className="extra-text-holder atom-header2">Doors open at:</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xs-12 form-group business-button-holder text-center">
              <a className="register-btn-holder element-1469906 js-register-btn-holder">
                <button type="button" className="atom-main color-0-hover-opacity business btn btn-success btn-register">Register</button>
              </a>
            </div>
            <div className="text-center">
              <div className="col-xs-12 social-share-buttons-holder">
                <button className="js-social-share-link-new link-button">
                  <div className="social-share-button facebook">
                    <i className="fa icon-facebook"></i>
                  </div>
                </button>
                <button className="js-social-share-link-new link-button">
                  <div className="social-share-button twitter">
                    <i className="fa icon-twitter"></i>
                  </div>
                </button>
                <button className="js-social-share-link-new link-button">
                  <div className="social-share-button linkedin">
                    <i className="fa icon-linkedin"></i>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  export default Section;