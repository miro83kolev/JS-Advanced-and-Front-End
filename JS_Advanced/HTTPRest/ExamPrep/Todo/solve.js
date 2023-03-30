function attachEvents() {
  const BASE_URL = "http://localhost:3030/jsonstore/tasks/";
  const titleInput = document.getElementById("title");
  const loadBtn = document.getElementById("load-button");
  const addBtn = document.getElementById("add-button");
  const todoListContainer = document.getElementById("todo-list");

  loadBtn.addEventListener("click", loadTaskHandler);
  addBtn.addEventListener("click", addTaskHandler);

  function loadTaskHandler(event) {
    if (event) {
      event.preventDefault();
    }

    todoListContainer.innerHTML = "";

    fetch(BASE_URL)
      .then((data) => data.json())
      .then((taskRes) => {
        const tasks = Object.values(taskRes);

        for (let { _id, name } of tasks) {
          const li = document.createElement("li");
          const span = document.createElement("span");
          const removeBtn = document.createElement("button");
          const editBtn = document.createElement("button");

          li.id = _id;
          span.textContent = name;
          removeBtn.textContent = "Remove";
          editBtn.textContent = "Edit";

          editBtn.addEventListener("click", loadEditForm);
          removeBtn.addEventListener("click", removeTaskHandler);

          //could be appendChild
          li.append(span, removeBtn, editBtn);
          todoListContainer.appendChild(li);
        }
      })
      .catch((err) => {
        console.error(err);
      });
  }

  function loadEditForm(event) {
    const liParent = event.currentTarget.parentNode;
    const [span, _removeBtn, editBtn] = Array.from(liParent.children);
    const editInput = document.createElement("input");
    editInput.value = span.textContent;
    liParent.prepend(editInput);
    const submitBtn = document.createElement("button");

    submitBtn.addEventListener("click", submitTaskHandler);
    submitBtn.textContent = "Submit";
    liParent.appendChild(submitBtn);
    span.remove();
    editBtn.remove();
  }

  function submitTaskHandler(event) {
    const liParent = event.currentTarget.parentNode;
    const id = liParent.id;
    const [input] = Array.from(liParent.children);
    const httpHeaders = {
      method: "PATCH",
      body: JSON.stringify({ name: input.value }),
    };

    fetch(`${BASE_URL}${id}`, httpHeaders)
      .then(() => loadTaskHandler())
      .catch((err) => {
        console.log(err);
      });
  }

  function addTaskHandler(event) {
    event.preventDefault();
    const name = titleInput.value;
    const httpHeaders = {
        method: "POST",
        body: JSON.stringify({ name })
    };

    fetch(BASE_URL, httpHeaders)
        .then(() => {
            loadTaskHandler();
            titleInput.value = '';
        })
        .catch((err) => {
            console.error(err);
        }) 
  }

  function removeTaskHandler(event) {
    const id = event.currentTarget.parentNode.id;
    const httpHeaders = {
        method: "DELETE"
    }

    fetch (`${BASE_URL}${id}`, httpHeaders)
        .then(() => loadTaskHandler())
        .catch((err) => {
            console.error(err);
        })
  }
}

attachEvents();
