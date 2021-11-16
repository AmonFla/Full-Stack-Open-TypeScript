import React from 'react'; 
import PropTypes from 'prop-types';
import { CoursePart } from '../types/course';

const Total = (props: any) => { 

  return (
    <p>
        Number of exercises{" "}
        {props.parts.reduce((carry:number, part:CoursePart) => carry + part.exerciseCount, 0)}
      </p>
  )
};

Total.propTypes ={
    parts: PropTypes.array
}

export default Total;