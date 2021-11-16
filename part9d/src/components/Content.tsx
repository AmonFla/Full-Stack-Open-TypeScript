import React from 'react'; 
import PropTypes from 'prop-types';
import Part from './Part';
import { CoursePart } from '../types';

const Content = (props: any) => { 

  return (
    <>
        {props.parts.map( (part: CoursePart) => <Part key={part.name} part={part} />)}
    </>
  )
};

Content.propTypes ={
    parts: PropTypes.array
}

export default Content;