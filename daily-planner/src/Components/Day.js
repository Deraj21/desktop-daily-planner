import React from 'react';
import { Link } from 'react-router-dom';

export default function Day(props){
  let { day } = props;
  return (
    <Link className="Day" to={`/h/day/`}>
      <p>{day}</p>
    </Link>
  );
}