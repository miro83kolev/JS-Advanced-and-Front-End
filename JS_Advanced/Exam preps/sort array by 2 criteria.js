function sort(input) {
  const twoCriteriaSort = (cur, next) =>
    cur.length - next.length || cur.localeCompare(next);
  input.sort(twoCriteriaSort);
  return input.join("\n");
}

console.log(sort(["alpha", "beta", "gamma"]));
