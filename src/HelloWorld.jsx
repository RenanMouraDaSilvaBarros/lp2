import React, { useState } from 'react';
// import Get from './utils/RequestMethods';
import axios from 'axios'

function HelloWorld() {

  const [count, setCount] = useState("OFF");

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => {
        axios.get("http://localhost:8080")
        .then(response => {
          setCount(response.data);
        })
        .catch(error => {
          console.log(error);
        })
      }}>
        Click me
      </button>

    </div>
  );
}

export default HelloWorld;