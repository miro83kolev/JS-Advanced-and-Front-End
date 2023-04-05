window.addEventListener("load", solve);

function solve() {
  let make = document.getElementById('make');
  let model = document.getElementById('model');
  let year = document.getElementById('year');
  
  let originalCost = document.getElementById('original-cost');
  let sellingPrice = document.getElementById('selling-price');
  let publishBtn = document.getElementById('publish');
  let tableBody = document.getElementById('table-body');
  let form = document.querySelector('form');
  let profit = document.getElementById('profit');
  let totalSum = 0;

  let carInfo = {};

  publishBtn.addEventListener('click', publishBtnHandler);

  function publishBtnHandler(event) {
      event.preventDefault();
      if (make.value === '' || model.value === '' || year.value === '' || originalCost.value === '' || sellingPrice.value === ''){
        console.log('error');
        return;
      }

      if (originalCost.value > sellingPrice.value) {
        console.log('error');
        return;
      }

      let fuel = document.getElementById('fuel');
      let fuelOptions = fuel.options[fuel.selectedIndex].text;

      carInfo = {
        make: make.value,
        model: model.value,
        year: year.value,
        fuel: fuel.options[fuel.selectedIndex].text,
        originalCost: originalCost.value,
        sellingPrice: sellingPrice.value,
      };

      const trItem = createElement('tr', tableBody, null, ['row']);      
      createElement('td', trItem, `${make.value}`);
      createElement('td', trItem, `${model.value}`);
      createElement('td', trItem, `${year.value}`);
      createElement('td', trItem, `${carInfo['fuel']}`);
      createElement('td', trItem, `${originalCost.value}`);
      createElement('td', trItem, `${sellingPrice.value}`);
      let tdBtns = createElement('td', trItem, null, null);
      let editBtn = createElement('button', tdBtns, 'Edit', null);
      let sellBtn = createElement('button', tdBtns, 'Sell', null);
      editBtn.className = 'action-btn edit';
      sellBtn.className = 'action-btn sell';
      
      editBtn.addEventListener('click', editBtnHandler);
      sellBtn.addEventListener('click', sellBtnHandler);
      form.reset();
  }

  function editBtnHandler(event) {
      const trItem = event.currentTarget.parentNode;
      make.value = carInfo['make'];
      model.value = carInfo['model'];
      year.value = carInfo['year'];
      //when selection return text not value
      fuel.text = carInfo['fuel'];
      originalCost.value = carInfo['originalCost'];
      sellingPrice.value = carInfo['sellingPrice'];
      trItem.parentNode.remove();
  }

  function sellBtnHandler(event) {    
    const trItem = event.currentTarget.parentNode
    const carList = document.getElementById('cars-list');    
    const eachList = createElement('li', carList, null, ['each-list']);
    createElement('span', eachList, `${carInfo['make']} ${carInfo['model']}`);
    createElement('span', eachList, `${carInfo['year']}`);
    createElement('span', eachList, `${carInfo['sellingPrice']}`);
    trItem.parentNode.remove();
    totalSum += carInfo['sellingPrice'];
    profit.textContent = Number(totalSum).toFixed(2);
        
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
