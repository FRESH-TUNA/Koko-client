import React from 'react';
import axios from 'axios'
import logo from './logo.svg';
import './namespace.css';
import { useState } from 'react';

function Namespace() {
  const [file, setFile] = useState(0);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData();
    data.append("video", file);
    axios({
      method: 'post',
      url: 'http://localhost:8000/videos',
      data,
      headers: {
        'content-type': 'multipart/form-data'
      },
    })
    axios.post('http://localhost:8000/videos', data)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  return (
    <div className="tbs-client-app">
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={ (e) => setFile(e.target.files[0]) }/>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Namespace;