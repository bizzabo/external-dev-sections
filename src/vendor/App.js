import React from 'react';
import Section from '../Section';

const App = props => {
  const {section} = props;
  return (
    <div className="main-view footer-padding footer-padding-confirmation" style={{opacity: 1}}>
      <div className="home-page home-custom-css 1420702-custom-css " data-server-rendered="true">
        <ul className="sections-holder" data-server-rendered="true">
          <div className="business-template section-440241" data-server-rendered="true" data-model-id={section.id}>
            <div className={`section-${section.rootKey} section-header business-template`} id={`section-${section.id}`}>
              <Section {...props}/>
            </div>
          </div>
        </ul>
      </div>
    </div>
  );
}

export default App;
