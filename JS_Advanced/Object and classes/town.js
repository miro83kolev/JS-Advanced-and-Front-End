function towns(input) {
  let result = {};
  for (let tokens of input) {
    let info = tokens.split(" | ");
    let townName = info[0];
    let latitude = Number(info[1]).toFixed(2);
    let longitude = Number(info[2]).toFixed(2);
    result.town = townName;
    result.latitude = latitude;
    result.longitude = longitude;
    console.log(result);
  }
}

towns(["Sofia | 42.696552 | 23.32601", "Beijing | 39.913818 | 116.363625"]);
