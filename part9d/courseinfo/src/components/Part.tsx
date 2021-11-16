import React from 'react'; 
import { CoursePart } from '../types/course';
import { assetNever } from '../helpers/type';

const Part = (props: any) => { 

    const part: CoursePart = props.part;

    switch(part.name){
        case "Fundamentals":
            return (<p>{part.name} - {part.description} - {part.exerciseCount}</p>);
            break;
        case "Deeper type usage":
            return (<p>{part.name} - {part.description} - {part.exerciseSubmissionLink} - {part.exerciseCount}</p>);
            break;
        case "Using props to pass data":
            return(<p>{part.name} - {part.groupProjectCount} - {part.exerciseCount}</p>);
            break;
        case "nueva interface":
            return (<p>{part.name} - {part.description} - {part.exerciseCount}</p>);
            break;
        default:
            return assetNever(part);
       }
  
};
 

export default Part;