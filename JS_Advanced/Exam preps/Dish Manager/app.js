window.addEventListener("load", solve);

function solve() {
   let inputDOMSelectors = {
      firstName: document.getElementById('first-name'),
      lastName: document.getElementById('last-name'),
      age: document.getElementById('age'),      
      dishDesc: document.getElementById('task')
   }

   let otherDOMSelectors = {
      inProgressContainer: document.getElementById('in-progress'),
      finishedContainer: document.getElementById('finished'),
      submitBtn: document.getElementById('form-btn'),
      clearBtn: document.getElementById('clear-btn'),
      progressCount: document.getElementById('progress-count'),
      form: document.querySelector('form'),

   }

   let dishPersonInfo = {};
   let inProgressCounter = 0;  

   otherDOMSelectors.submitBtn.addEventListener('click', submitButtonHandler );

   function submitButtonHandler(event) {
      event.preventDefault();
      const allFieldsAreValid = Object.values(inputDOMSelectors)
        .every((input) => input.value !=='');
      
      if (!allFieldsAreValid) {
        return;
      }

      let gender = document.getElementById('genderSelect');
      let genderOption = gender.options[gender.selectedIndex].text;

      const {firstName, lastName, age, dishDesc} = inputDOMSelectors;

      dishPersonInfo = {
          firstName: firstName.value,
          lastName: lastName.value,
          age: age.value,
          gender: gender.options[gender.selectedIndex].text,
          dishDesc: dishDesc.value,
      };

      const liItem = createElement('li', otherDOMSelectors.inProgressContainer, null, ['each-line'] );
      const article = createElement('article', liItem);
      createElement('h4', article, `${firstName.value} ${lastName.value}`);
      createElement('p', article, `${genderSelect.value}, ${age.value}`);
      createElement('p', article, `${dishDesc.value}`);
      const editBtn = createElement('button', liItem, 'Edit', ['edit-btn']);
      const completeBtn = createElement('button', liItem, 'Mark as complete', ['complete-btn']);
      editBtn.addEventListener('click', editButtonHandler);
      completeBtn.addEventListener('click', completeButtonHandler);
      inProgressCounter++;
      otherDOMSelectors.progressCount.textContent = inProgressCounter;
      otherDOMSelectors.form.reset();

   }

   function editButtonHandler() {
      firstName = dishPersonInfo['firstName'];
      lastName = dishPersonInfo['lastName'];
      age = dishPersonInfo['age'];
      gender = dishPersonInfo['gender'];
      dishDesc = dishPersonInfo['dishDesc'];
      this.parentNode.remove();
      inProgressCounter--      
      otherDOMSelectors.progressCount.textContent = inProgressCounter;
   }

   function completeButtonHandler(){
    
    const liItem = this.parentNode
    const editBtn = liItem.querySelector('.edit-btn');
    const completeBtn = liItem.querySelector('.complete-btn');
    inProgressCounter--;
    otherDOMSelectors.progressCount.textContent = inProgressCounter;
    otherDOMSelectors.finishedContainer.appendChild(liItem);
    editBtn.remove();
    completeBtn.remove();
    otherDOMSelectors.clearBtn.addEventListener('click', clearAllHandler )
   }
   
   function clearAllHandler(){
    this.parentNode.remove();
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
