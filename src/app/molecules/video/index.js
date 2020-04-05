import React from 'react';
import './.scss'

export default ({data}) => {
  const {id, url} = data;
  return (
    <div className="video">
      <img src={url} alt="hoho"/>
    </div>
  )
}
