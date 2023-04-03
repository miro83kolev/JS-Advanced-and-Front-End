window.addEventListener('load', solve);

function solve() {

    const inputDOMSelectors = {
        //get all input elements
        firstName: document.getElementById('first-name'),
        lastName: document.getElementById('last-name'),
        peopleCount: document.getElementById('people-count'),
        fromDate: document.getElementById('from-date'),
        daysCount: document.getElementById('days-count'),
    };

    const otherDOMSelectors = {
        // get all other needed elements like buttons and containers where you put information
        nextBtn: document.getElementById('next-btn'),
        infoContainer: document.querySelector('.ticket-info-list'),
        comfirmContainer: document.querySelector('.confirm-ticket'),
        main: document.getElementById('main'),
        form: document.querySelector('form'),
        body: document.getElementById('body'),

    };

    //created a new object to collect information about ticket
    let ticketInfo = {};

    //assign the next button click event
    otherDOMSelectors.nextBtn.addEventListener('click', nextStepHandler);

    //next button click event
    function nextStepHandler(event) {
        //prevent default event for submit event, because next button is submit one
        event.preventDefault();

        let allFieldsAreValid = Object.values(inputDOMSelectors)
            .every((input) => input.value !== '');
        
        if (!allFieldsAreValid) {
            return;
        }

        // destructuring all input fields into variables
        const {firstName, lastName, peopleCount, fromDate, daysCount} = inputDOMSelectors;
        //creation of ticketinfo object
        ticketInfo = {
            firstName: firstName.value,
            lastName: lastName.value,
            peopleCount: peopleCount.value,
            fromDate: fromDate.value,
            daysCount: daysCount.value,            
        };

        //creation of elements in html using createElement function

        const liItem = createElement('li', otherDOMSelectors.infoContainer, '', ['ticket']);
        const article = createElement('article', liItem);
        createElement('h3', article, `Name: ${firstName.value} ${lastName.value}`);
        createElement('p', article, `From date: ${fromDate.value}`);
        createElement('p', article, `For: ${daysCount.value} days`);
        createElement('p', article, `For: ${peopleCount.value} people`);
        const editBtn = createElement('button', liItem, 'Edit', ['edit-btn']);
        const continueBtn = createElement('button', liItem, 'Continue', ['continue-btn']);
        editBtn.addEventListener('click', editTicketHandler);
        continueBtn.addEventListener('click', continueTicketHandler);
        otherDOMSelectors.form.reset();
        otherDOMSelectors.nextBtn.setAttribute('disabled', true);   

    }

    function editTicketHandler() {
        // using this to remove the whole parent container
        this.parentNode.remove();
        // using for in and ticketinfo obj to fill in back infoDOM selectors
        for (const key in ticketInfo) {
            inputDOMSelectors[key].value = ticketInfo[key];
        }
        //remove next button disabled
        otherDOMSelectors.nextBtn.removeAttribute('disabled');
    }

    function continueTicketHandler() {
        // copy liItem from this parent node
        const liItem = this.parentNode;
        //find in liItem both edit and continue buttons to remove them
        const editBtn = liItem.querySelector('.edit-btn');
        const continueBtn = liItem.querySelector('.continue-btn');
        //create new buttons confirm and cancel
        const confirmBtn = createElement('button', liItem, 'Confirm', ['confirm-btn']);
        const cancelBtn = createElement('button', liItem, 'Cancel', ['cancel-btn']);

        // attaching event handlers on new buttons
        confirmBtn.addEventListener('click', confirmTicketHandler);
        cancelBtn.addEventListener('click', cancelTicketHandler);
        //append it to confirm container
        otherDOMSelectors.comfirmContainer.appendChild(liItem);
        //remove buttons
        editBtn.remove();
        continueBtn.remove();
    }

    function cancelTicketHandler() {
        //remove all containers
        this.parentNode.remove();
        // removing disabled on next button
        otherDOMSelectors.nextBtn.removeAttribute('disabled');
    }

    function confirmTicketHandler(){
        //removing main
        otherDOMSelectors.main.remove();
        //creating a new element with text
        createElement('h1', otherDOMSelectors.body, 'Thank you, have a nice day!', null, 'thank-you');
        //creating back btn
        const backBtn = createElement('button', otherDOMSelectors.body, 'Back', null, 'back-btn'); 
        //attaching event to back button      
        backBtn.addEventListener('click', () => {
            window.location.reload();
        });
    }

    //function backBtnHandler(){
        //back btn action
       // window.location.reload();
    //}

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


    
   


    
    
