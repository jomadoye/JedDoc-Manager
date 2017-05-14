import React from 'react';
import PropTypes from 'prop-types';

const WelcomePageDocList = ({ document }) => (
    <div>
      <div >
        <div className="col s4">
          <div className="card teal darken-1 z-depth-5">
            <div className="card-content white-text">
              <span className="card-title">{document.title}</span>
              <div className="divider" />
              <div className="divider" />
              <p>{`${document.body.substring(0, 150)}...`}</p>
            </div>
          </div>
         </div>
       </div>
    </div>
  );

WelcomePageDocList.propTypes = {
  document: PropTypes.object.isRequired,
};

export default WelcomePageDocList;
