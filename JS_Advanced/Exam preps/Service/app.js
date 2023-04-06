window.addEventListener('load', solve);

function solve() {
    let type = document.querySelector('#type-product');
    let form = document.querySelector('form');
    let description = document.querySelector('#description');
    let clientPhone = document.getElementById('client-phone');
    let clientName = document.getElementById('client-name');
    let submitBtn = document.querySelector('form button');
    let receivedOrders = document.getElementById('received-orders');
    let completedOrders = document.getElementById('completed-orders');
    let clearBtn = document.querySelector('.clear-btn');

    submitBtn.addEventListener('click', submitEventHandler );
    clearBtn.addEventListener('click', clearButtonsHandler );

    function submitEventHandler(e) {
        e.preventDefault();
        if (description.value && clientName.value && clientPhone.value) {
            addInfo(e, type.value, clientName.value, clientPhone.value, description.value);
            form.reset();
        }
    };

    function addInfo(e, type, clientName, clientPhone, description) {
        let div = htmlGenerator('div', '', receivedOrders);
        div.setAttribute('class', 'container');
        htmlGenerator('h2', `Product type for repair: ${type}`, div);
        htmlGenerator('h3', `Client information: ${clientName}, ${clientPhone}`, div);
        htmlGenerator('h4', `Description of the problem: ${description}`, div);

        let startBtn = htmlGenerator('button', 'Start repair', div);
        startBtn.setAttribute('class', 'start-btn');

        let finishBtn = htmlGenerator('button', 'Finish repair', div);
        finishBtn.setAttribute('class', 'finish-btn');
        finishBtn.setAttribute('disabled', 'disabled');

        startBtn.addEventListener('click', (e) => {
            startBtn.setAttribute('disabled', true);
            finishBtn.removeAttribute('disabled');
        });

        finishBtn.addEventListener('click', (e) => {
            e.target.parentNode.remove();

            let divFinished = htmlGenerator('div', '', completedOrders);
            divFinished.setAttribute('class', 'container');
            htmlGenerator('h2', `Product type for repair: ${type}`, divFinished);
            htmlGenerator('h3', `Client information: ${clientName}, ${clientPhone}`, divFinished);
            htmlGenerator('h4', `Description of the problem: ${description}`, divFinished);
        });
    }   

    function clearButtonsHandler() {
        let allFinishedDivs = completedOrders.querySelectorAll('div');
        for (let div of allFinishedDivs) {
            div.remove();
        }
    };
    
    
    
    function htmlGenerator(tagName, content, parent) {
        let element = document.createElement(tagName);
        element.textContent = content;

        if (parent) {
            parent.appendChild(element);
        }

        return element;
    }
}