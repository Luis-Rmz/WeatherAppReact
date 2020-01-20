//import React from 'react';
import PropTypes from 'prop-types';

const Location = ({ city }) => {
    //Destructuring
    //const {city} = props;
  return(city);
};

Location.propTypes = {
    city: PropTypes.string.isRequired,
}

export default Location;