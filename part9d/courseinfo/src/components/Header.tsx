import React from 'react'; 
import PropTypes from 'prop-types';

const Header = (props: any) => { 

  return (
    <>
      <h1>{props.name}</h1>
    </>
  )
};

Header.propTypes ={
    name: PropTypes.string
}

export default Header;