import React, { useState } from 'react';

function HelloWorld() {

  const [count, setCount] = useState("off");

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => {

        var xhttp = new XMLHttpRequest();

        xhttp.onreadystatechange = function () {
          if (this.readyState == 4 && this.status == 200) {
            console.log(this.responseText)
            setCount(this.responseText);
          }
        };
        xhttp.open("GET", "http://localhost:8080", true);
        xhttp.send();

        setCount("awating sever")

      }}>
        Click me
      </button>

    </div>
  );
}

export default HelloWorld;