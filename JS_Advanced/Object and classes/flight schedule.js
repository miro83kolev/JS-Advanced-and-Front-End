function flightSchedule(input) {
  let [flights, changedFlights, status] = input;
  let flightObj = {};

  // create an object with all flights as keys and their status as value
  flights.forEach((flight) => {
    flightObj[flight] = "Ready to fly";
  });

  // update the status of the flights that have changed
  changedFlights.forEach((flight) => {
    let [flightNumber, status] = flight.split(" ");
    flightObj[flightNumber] = status;
  });

  // print the flights with the given status
  for (let [flightNumber, flightStatus] of Object.entries(flightObj)) {
    if (flightStatus === status[0]) {
      console.log({
        Destination: flightNumber.split(" ")[1],
        Status: flightStatus,
      });
      if (flightStatus !== "Ready to fly") {
        flightObj[flightNumber] = "Ready to fly";
      }
    }
  }
}
