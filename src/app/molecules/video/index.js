import React from 'react';
import { Link } from 'react-router-dom';
import './.scss'

export default ({data}) => {
  const {id, url} = data;
  return (
    <div className="video">
      <Link to={{ pathname: `/videos/${id}`, state: { url }}}>About</Link>
    </div>
  )
}
