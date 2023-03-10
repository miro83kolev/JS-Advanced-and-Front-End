function extract() {
  let contentEl = document.getElementById("content");
  let patern = /\(([^(]+\))/g;
  let matches = contentEl.textContent.matchAll(patern);
  let result = [];
  for (let match of matches) {
    result.push(match[1]);
  }

  return result.join("; ");
}
