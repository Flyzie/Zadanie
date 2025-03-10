onmessage = (event) => {
  if (event.data.command === "start") {
    const accuracy = event.data.accuracy;
    //Blocking the stack
    const start = Date.now();
    while (Date.now() - start < 8000) {}
    //calculated using archimedean method
    const angleInRadians = (180 / accuracy) * (Math.PI / 180);
    const response = accuracy * Math.sin(angleInRadians);
    postMessage(response);
  }
};
