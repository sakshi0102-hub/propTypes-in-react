import React from 'react';
import PropTypes from 'prop-types';

const MyComponent = ({ myString, myNumber, myBoolean }) => {
  return (
    <div>
      <p>String: {myString}</p>
      <p>Number: {myNumber}</p>
      <p>Boolean: {myBoolean ? 'True' : 'False'}</p>
    </div>
  );
};
MyComponent.propTypes = {
  myString: PropTypes.string.isRequired,
  myNumber: PropTypes.number.isRequired,
  myBoolean: PropTypes.bool.isRequired,
};

export default MyComponent;
