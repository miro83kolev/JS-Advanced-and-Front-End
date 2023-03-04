function cityInfo(city) {
  let props = Object.keys(city);

  for (let prop of props) {
    console.log(`${prop} -> ${city[prop]}`);
  }
}

cityInfo({
  name: "Sofia",
  area: 492,
  population: 1238438,
  country: "Bulgaria",
  postCode: "1000",
});
