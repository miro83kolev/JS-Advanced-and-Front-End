function magicMatrice(input) {

  let currentSum = 0;
  let sumRow = 0;
  for (matrice of input) {
    sumRow = matrice.reduce((a, b) => a + b);
  }
  console.log(sumRow);

}
   

magicMatrice([
  [4, 5, 6],
  [6, 5, 4],
  [5, 5, 5],
]);

