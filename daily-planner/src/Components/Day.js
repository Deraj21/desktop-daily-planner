import React from 'react';
import { Link } from 'react-router-dom';

export default function Day(props){
  let { data } = props

  return (
    <Link className="Day" to={`/h/day/${data}`}>
      <p>{data}</p>
    </Link>
  );
}