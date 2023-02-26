function login(arr) {
  let username = arr.shift();
  let tries = 0;

  for (let pass of arr) {
    let reversePass = pass.split("").reverse().join("");
    tries++;
    if (reversePass === username) {
      console.log(`User ${username} logged in.`);
      break;
    } else {
      if (tries >= 4) {
        console.log(`User ${username} blocked!`);
        break;
      }
      console.log(`Incorrect password. Try again.`);
    }
  }
}

login(['Acer','login','go','let me in','recA']);
login(['momo','omom']);
login(['sunny','rainy','cloudy','sunny','not sunny']);
