window.addEventListener("load", solve);

function solve() {
  let inputDomSelectors = {
    firstName: document.getElementById("first-name"),
    lastName: document.getElementById("last-name"),
    dateIn: document.getElementById("date-in"),
    dateOut: document.getElementById("date-out"),
    peopleCount: document.getElementById("people-count"),
  };

  let otherDomSelectors = {
    nextBtn: document.getElementById("next-btn"),
    infoContainer: document.querySelector(".info-list"),
    confirmList: document.querySelector(".confirm-list"),
    verifiedRes: document.getElementById("verification"),
    form: document.querySelector("form"),
  };

  let reservationInfo = {};

  otherDomSelectors.nextBtn.addEventListener("click", nextStepHandler);

  function nextStepHandler(event) {
    event.preventDefault();
    let allFieldsAreValid = Object.values(inputDomSelectors).every(
      (input) => input.value !== ""
    );

    if (!allFieldsAreValid) {
      return;
    }

    const { firstName, lastName, dateIn, dateOut, peopleCount } =
      inputDomSelectors;
    reservationInfo = {
      firstName: firstName.value,
      lastName: lastName.value,
      dateIn: dateIn.value,
      dateOut: dateOut.value,
      peopleCount: peopleCount.value,
    };

    const liItem = createElement("li", otherDomSelectors.infoContainer, "", [
      "reservation-content",
    ]);
    const article = createElement("article", liItem);
    createElement("h3", article, `Name: ${firstName.value} ${lastName.value}`);
    createElement("p", article, `From date: ${dateIn.value}`);
    createElement("p", article, `To date: ${dateOut.value}`);
    createElement("p", article, `For: ${peopleCount.value} people`);
    let editBtn = createElement("button", liItem, "Edit", ["edit-btn"]);
    let continueBtn = createElement("button", liItem, "Continue", [
      "continue-btn",
    ]);
    editBtn.addEventListener("click", editTicketHandler);
    continueBtn.addEventListener("click", continueTicketHandler);
    otherDomSelectors.nextBtn.setAttribute("disabled", true);    
    otherDomSelectors.form.reset();
  }

  function editTicketHandler() {
    this.parentNode.remove();
    for (const key in reservationInfo) {
      inputDomSelectors[key].value = reservationInfo[key];
    }
    otherDomSelectors.nextBtn.removeAttribute("disabled");
  }

  function continueTicketHandler() {
    const liItem = this.parentNode;
    const editBtn = liItem.querySelector(".edit-btn");
    const continueBtn = liItem.querySelector(".continue-btn");
    const confirmBtn = createElement("button", liItem, "Confirm", [
      "confirm-btn",
    ]);
    const cancelBtn = createElement("button", liItem, "Cancel", ["cancel-btn"]);
    confirmBtn.addEventListener("click", confirmReservationHandler);
    cancelBtn.addEventListener("click", cancelReservationHandler);
    otherDomSelectors.confirmList.appendChild(liItem);
    editBtn.remove();
    continueBtn.remove();
  }

  function confirmReservationHandler() {
    this.parentNode.remove();
    otherDomSelectors.nextBtn.removeAttribute("disabled");
    createElement("h1", otherDomSelectors.verifiedRes, "Confirmed.", [
      "reservation-confirmed",
    ]);
  }

  function cancelReservationHandler() {
    this.parentNode.remove();
    otherDomSelectors.nextBtn.removeAttribute("disabled");
    createElement("h1", otherDomSelectors.verifiedRes, "Cancelled.", [
      "reservation-cancelled",
    ]);
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
