window.addEventListener("load", solve);

function solve() {
  let totalLikes = 0;
  const inputDOMSelectors = {
    genre: document.querySelector('input[name="genre"]'),
    name: document.querySelector('input[name="name"]'),
    author: document.querySelector('input[name="author"]'),
    date: document.querySelector('input[name="date"]'),
  };

  const otherDOMSelectors = {
    addBtn: document.getElementById("add-btn"),
    allHitsContainer: document.querySelector(".all-hits-container"),
    savedContainer: document.querySelector(".saved-container"),
    totalLikesContainer: document.querySelector(".likes > p"),
  };

  otherDOMSelectors.addBtn.addEventListener("click", addSongHandler);

  function addSongHandler(event) {
    event.preventDefault();
    let allInputsAreNotEmpty = Object.values(inputDOMSelectors).every(
      (input) => input.value !== ""
    );

    if (!allInputsAreNotEmpty) {
      return;
    }

    const { genre, name, author, date } = inputDOMSelectors;
    const songContainer = createElement(
      "div",
      otherDOMSelectors.allHitsContainer,
      "",
      ["hits-info"]
    );
    createElement("img", songContainer, null, null, null, {
      src: "./static/img/img.png",
    });
    createElement("h2", songContainer, `Genre: ${genre.value}`);
    createElement("h2", songContainer, `Name: ${name.value}`);
    createElement("h2", songContainer, `Author: ${author.value}`);
    createElement("h3", songContainer, `Date: ${date.value}`);
    const saveBtn = createElement("button", songContainer, "Save song", [
      "save-btn",
    ]);
    const likeBtn = createElement("button", songContainer, "Like song", [
      "like-btn",
    ]);
    const deleteBtn = createElement("button", songContainer, "Delete", [
      "delete-btn",
    ]);

    likeBtn.addEventListener("click", likeSongHandler);
    deleteBtn.addEventListener("click", deleteSongHandler);
    saveBtn.addEventListener("click", saveSongHandler);

    clearAllSelectors();
  }

  function likeSongHandler() {
    this.setAttribute("disabled", true);
    totalLikes++;
    otherDOMSelectors.totalLikesContainer.textContent = `Total Likes: ${totalLikes}`;
  }

  function deleteSongHandler() {
    //if you are using event.currentTarget === this
    this.parentNode.remove();
  }

  function saveSongHandler() {
    const songRef = this.parentNode;
    otherDOMSelectors.savedContainer.appendChild(songRef);
    const saveBtn = songRef.querySelector(".save-btn");
    const likeBtn = songRef.querySelector(".like-btn");
    saveBtn.remove();
    likeBtn.remove();
  }

  function clearAllSelectors() {
    Object.values(inputDOMSelectors).forEach((input) => {
      input.value = "";
    });
  }

  function createElement(
    type,
    parentNode,
    content,
    classes,
    id,
    attributes,
    useInnerHTML
  ) {
    const htmlElement = document.createElement(type);

    if (content && useInnerHTML) {
      htmlElement.innerHTML = content;
    } else {
      if (content && type !== "input") {
        htmlElement.textContent = content;
      }

      if (content && type === "input") {
        htmlElement.value = content;
      }
    }

    if (classes && classes.length > 0) {
      htmlElement.classList.add(...classes);
    }

    if (id) {
      htmlElement.id = id;
    }

    if (attributes) {
      for (const key in attributes) {
        htmlElement[key] = attributes[key];
      }
    }

    if (parentNode) {
      parentNode.appendChild(htmlElement);
    }

    return htmlElement;
  }
}
