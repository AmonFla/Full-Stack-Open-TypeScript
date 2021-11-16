import React from 'react'; 
import PropTypes from 'prop-types';
import Part from './Part';
import { CoursePart } from '../types/course';

const Content = (props: any) => { 

  return (
    <>
        {props.parts.map( (part: CoursePart) => <Part key={part.name} part={part} />)}
    </>
  )
};


export default Content;