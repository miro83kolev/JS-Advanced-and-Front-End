function addItem() {
  let ul = document.getElementById("items");
  let li = document.createElement("li");
  let input = document.getElementById("newItemText");
  let inputValue = input.value;

  li.textContent = inputValue;
  ul.appendChild(li);

  input.value = "";
}
