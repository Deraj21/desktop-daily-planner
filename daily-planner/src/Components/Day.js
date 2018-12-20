import React from 'react';

export default function Day(props){
  let { data } = props

  return (
    <div className="Day">
      {data}
    </div>
  );
}