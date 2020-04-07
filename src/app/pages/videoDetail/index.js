import React from 'react';
import Template from './template';

export default (props) => {    
  const {url} = props.history.location.state;

  return (
    <Template url={url}/>
  )
}
