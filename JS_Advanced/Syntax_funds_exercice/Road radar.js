function roadRadar(speed, area) {
  const motorwaySpeed = 130;
  const interstateSpeed = 90;
  const citySpeed = 50;
  const residentialSpeed = 20;
  let diff = 0;
  let status = "";

  switch (area) {
    case "motorway":
      if (speed <= motorwaySpeed) {
        console.log(`Driving ${speed} km/h in a ${motorwaySpeed} zone`);
      } else {
        diff = speed - motorwaySpeed;
        if (diff <= 20) {
          status = "speeding";
          console.log(
            `The speed is ${diff} km/h faster than the allowed speed of ${motorwaySpeed} - ${status}`
          );
        } else if (diff >= 21 && diff <= 40) {
          status = "excessive speeding";
          console.log(
            `The speed is ${diff} km/h faster than the allowed speed of ${motorwaySpeed} - ${status}`
          );
        } else {
          status = "reckless driving";
          console.log(
            `The speed is ${diff} km/h faster than the allowed speed of ${motorwaySpeed} - ${status}`
          );
        }
      }
      break;
    case "interstate":
      if (speed <= interstateSpeed) {
        console.log(`Driving ${speed} km/h in a ${interstateSpeed} zone`);
      } else {
        diff = speed - interstateSpeed;
        if (diff <= 20) {
          status = "speeding";
          console.log(
            `The speed is ${diff} km/h faster than the allowed speed of ${interstateSpeed} - ${status}`
          );
        } else if (diff >= 21 && diff <= 40) {
          status = "excessive speeding";
          console.log(
            `The speed is ${diff} km/h faster than the allowed speed of ${interstateSpeed} - ${status}`
          );
        } else {
          status = "reckless driving";
          console.log(
            `The speed is ${diff} km/h faster than the allowed speed of ${interstateSpeed} - ${status}`
          );
        }
      }
      break;
    case "city":
      if (speed <= citySpeed) {
        console.log(`Driving ${speed} km/h in a ${citySpeed} zone`);
      } else {
        diff = speed - citySpeed;
        if (diff <= 20) {
          status = "speeding";
          console.log(
            `The speed is ${diff} km/h faster than the allowed speed of ${citySpeed} - ${status}`
          );
        } else if (diff >= 21 && diff <= 40) {
          status = "excessive speeding";
          console.log(
            `The speed is ${diff} km/h faster than the allowed speed of ${citySpeed} - ${status}`
          );
        } else {
          status = "reckless driving";
          console.log(
            `The speed is ${diff} km/h faster than the allowed speed of ${citySpeed} - ${status}`
          );
        }
      }
      break;
    case "residential":
      if (speed <= residentialSpeed) {
        console.log(`Driving ${speed} km/h in a ${residentialSpeed} zone`);
      } else {
        diff = speed - residentialSpeed;
        if (diff <= 20) {
          status = "speeding";
          console.log(
            `The speed is ${diff} km/h faster than the allowed speed of ${residentialSpeed} - ${status}`
          );
        } else if (diff >= 21 && diff <= 40) {
          status = "excessive speeding";
          console.log(
            `The speed is ${diff} km/h faster than the allowed speed of ${residentialSpeed} - ${status}`
          );
        } else {
          status = "reckless driving";
          console.log(
            `The speed is ${diff} km/h faster than the allowed speed of ${residentialSpeed} - ${status}`
          );
        }
      }
      break;
  }
}

roadRadar(40, 'city');
roadRadar(21, 'residential');
roadRadar(120, 'interstate');
roadRadar(200, 'motorway');
