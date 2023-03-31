function attachEvents() {
  const BASE_URL = "http://localhost:3030/jsonstore/grocery/";
  const inputDomSelectors = {
    product: document.getElementById("product"),
    count: document.getElementById("count"),
    price: document.getElementById("price"),
  };

  const otherDomSelectors = {
    addBtn: document.getElementById("add-product"),
    updateBtn: document.getElementById("update-product"),
    loadBtn: document.getElementById("load-product"),
    productContainer: document.getElementById("tbody"),
    form: document.querySelector(".list"),
  };

  let currentProducts = [];
  let productToEdit = {};

  otherDomSelectors.loadBtn.addEventListener("click", loadProductHandler);
  otherDomSelectors.updateBtn.addEventListener("click", updateProductHandler);
  otherDomSelectors.addBtn.addEventListener("click", addProductHandler);

  function loadProductHandler(event) {
    if (event) {
      event.preventDefault();
    }

    otherDomSelectors.productContainer.innerHTML = "";
    fetch(BASE_URL)
      .then((res) => res.json())
      .then((allProductsRes) => {
        currentProducts = Object.values(allProductsRes);
        for (const { product, count, price, _id } of currentProducts) {
          const tableRow = createElement(
            "tr",
            otherDomSelectors.productContainer
          );
          tableRow.id = _id;
          createElement("td", tableRow, product, ["name"]);
          createElement("td", tableRow, count, ["count"]);
          createElement("td", tableRow, price, ["product-price"]);
          const buttonsTd = createElement("td", tableRow, null, ["btn"]);
          const updateBtn = createElement("button", buttonsTd, "Update", [
            "update",
          ]);
          const deleteBtn = createElement("button", buttonsTd, "Delete", [
            "delete",
          ]);

          updateBtn.addEventListener("click", loadUpdateFromHandler);
          deleteBtn.addEventListener("click", deleteProductHandler);
        }
      });
  }

  function loadUpdateFromHandler() {
    const id = this.parentNode.parentNode.id;
    //find
    productToEdit = currentProducts.find((p) => p._id === id);
    for (let key in inputDomSelectors) {
      inputDomSelectors[key].value = productToEdit[key];
    }
    otherDomSelectors.addBtn.setAttribute("disabled", true);
    otherDomSelectors.updateBtn.removeAttribute("disabled");
  }

  function deleteProductHandler() {
    const id = this.parentNode.parentNode.id;
    const httpHeaders = {
      method: "DELETE",
    };

    fetch(`${BASE_URL}${id}`, httpHeaders)
      .then(() => loadProductHandler())
      .catch((err) => {
        console.error(err);
      });
  }

  function updateProductHandler(event) {
    event.preventDefault();
    const { product, count, price } = inputDomSelectors;
    const payload = JSON.stringify({
      product: product.value,
      count: count.value,
      price: price.value,
    });

    const httpHeaders = {
      method: "PATCH",
      body: payload,
    };

    fetch(`${BASE_URL}${productToEdit._id}`, httpHeaders)
      .then(() => {
        loadProductHandler();
        otherDomSelectors.addBtn.removeAttribute("disabled");
        otherDomSelectors.updateBtn.setAttribute(`disabled`, true);
        otherDomSelectors.form.reset();
      })
      .catch((err) => {
        console.error(err);
      });
  }

  function addProductHandler(event) {
    event.preventDefault();
    const { product, count, price } = inputDomSelectors;
    const payload = JSON.stringify({
      product: product.value,
      count: count.value,
      price: price.value,
    });

    const httpHeaders = {
      method: "POST",
      body: payload,
    };

    fetch(BASE_URL, httpHeaders)
      .then(() => {
        loadProductHandler();
        otherDomSelectors.form.reset();
      })
      .catch((err) => {
        console.error(err);
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

attachEvents();
