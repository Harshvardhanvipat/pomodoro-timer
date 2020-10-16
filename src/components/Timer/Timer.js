import React, { useState } from "react";

function Timer() {
    var d =
  const [timer, setTimer] = useState(Date.now());

  return <div>This is a timer component {timer} </div>;
}

export default Timer;
