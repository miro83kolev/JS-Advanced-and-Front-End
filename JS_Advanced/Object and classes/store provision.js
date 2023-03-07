function store(arr1, arr2) {
  let store = {};

  for (let i = 0; i < arr1.length; i += 2) {
    let currentProd = arr1[i];
    store[currentProd] = Number(arr1[i + 1]);
  }
  for (let i = 0; i < arr2.length; i += 2) {
    let currentProd = arr2[i];
    if (!store.hasOwnProperty(currentProd)) {
      store[currentProd] = 0;
    }
    store[currentProd] += Number(arr2[i + 1]);
  }

  for (let [item, value] of Object.entries(store)) {
    console.log(`${item} -> ${value}`);
  }
}

store(
  ["Chips", "5", "CocaCola", "9", "Bananas", "14", "Pasta", "4", "Beer", "2"],
  ["Flour", "44", "Oil", "12", "Pasta", "7", "Tomatoes", "70", "Bananas", "30"]
);
