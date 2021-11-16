import React from 'react'; 
import PropTypes from 'prop-types';

const Content = (props: any) => { 

  return (
    <>
        {props.parts.map( (part: any) => <p key={part.name} >{part.name} {part.exerciseCount} </p>)}
    </>
  )
};

Content.propTypes ={
    parts: PropTypes.array
}

export default Content;